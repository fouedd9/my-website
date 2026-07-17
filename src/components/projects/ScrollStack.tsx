import { useCallback, useLayoutEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

interface CardTransform {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

export function ScrollStackItem({
  children,
  itemClassName = "",
}: ScrollStackItemProps) {
  return (
    <div
      className={`
        scroll-stack-card
        relative
        my-8
        min-h-[320px]
        w-full
        origin-top
        rounded-[32px]
        border
        border-white/10
        bg-zinc-950
        p-6
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        will-change-transform
        sm:p-10
        lg:min-h-[420px]
        ${itemClassName}
      `}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {children}
    </div>
  );
}

export default function ScrollStack({
  children,
  className = "",
  itemDistance = 120,
  itemScale = 0.025,
  itemStackDistance = 28,
  stackPosition = "18%",
  scaleEndPosition = "18%",
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardOffsetsRef = useRef<number[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stackCompletedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  const lastTransformsRef = useRef<Map<number, CardTransform>>(new Map());

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop <= start) return 0;
      if (scrollTop >= end) return 1;

      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePosition = useCallback(
    (value: string, containerHeight: number) => {
      if (value.includes("%")) {
        return (Number.parseFloat(value) / 100) * containerHeight;
      }

      return Number.parseFloat(value);
    },
    [],
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }

    const scroller = scrollerRef.current;

    return {
      scrollTop: scroller?.scrollTop ?? 0,
      containerHeight: scroller?.clientHeight ?? 0,
    };
  }, [useWindowScroll]);

  const getCardOffset = useCallback(
    (card: HTMLElement, index: number) => {
      const cachedOffset = cardOffsetsRef.current[index];

      if (cachedOffset !== undefined) {
        return cachedOffset;
      }

      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();

        return rect.top + window.scrollY;
      }

      return card.offsetTop;
    },
    [useWindowScroll],
  );

  const getEndElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();

        return rect.top + window.scrollY;
      }

      return element.offsetTop;
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) {
      return;
    }

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();

    const stackPositionPx = parsePosition(stackPosition, containerHeight);

    const scaleEndPositionPx = parsePosition(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector<HTMLElement>(".scroll-stack-end")
      : scrollerRef.current?.querySelector<HTMLElement>(".scroll-stack-end");

    const endElementTop = endElement ? getEndElementOffset(endElement) : 0;

    let topCardIndex = 0;

    cardsRef.current.forEach((card, index) => {
      const cardTop = getCardOffset(card, index);

      const triggerStart =
        cardTop - stackPositionPx - itemStackDistance * index;

      if (scrollTop >= triggerStart) {
        topCardIndex = index;
      }
    });

    cardsRef.current.forEach((card, index) => {
      const cardTop = getCardOffset(card, index);

      const triggerStart =
        cardTop - stackPositionPx - itemStackDistance * index;

      const triggerEnd = cardTop - scaleEndPositionPx;

      const pinStart = triggerStart;

      const pinEnd = endElementTop - containerHeight / 2;

      const progress = calculateProgress(scrollTop, triggerStart, triggerEnd);

      const targetScale = baseScale + index * itemScale;

      const scale = 1 - progress * (1 - targetScale);

      const rotation = rotationAmount * index * progress;

      const blur =
        index < topCardIndex
          ? Math.max(0, (topCardIndex - index) * blurAmount)
          : 0;

      let translateY = 0;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * index;
      } else if (scrollTop > pinEnd) {
        translateY =
          pinEnd - cardTop + stackPositionPx + itemStackDistance * index;
      }

      const nextTransform: CardTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const previousTransform = lastTransformsRef.current.get(index);

      const hasChanged =
        !previousTransform ||
        Math.abs(previousTransform.translateY - nextTransform.translateY) >
          0.1 ||
        Math.abs(previousTransform.scale - nextTransform.scale) > 0.001 ||
        Math.abs(previousTransform.rotation - nextTransform.rotation) > 0.1 ||
        Math.abs(previousTransform.blur - nextTransform.blur) > 0.1;

      if (hasChanged) {
        card.style.transform = `
          translate3d(
            0,
            ${nextTransform.translateY}px,
            0
          )
          scale(${nextTransform.scale})
          rotate(${nextTransform.rotation}deg)
        `;

        card.style.filter =
          nextTransform.blur > 0 ? `blur(${nextTransform.blur}px)` : "";

        lastTransformsRef.current.set(index, nextTransform);
      }

      if (index === cardsRef.current.length - 1) {
        const isLastCardPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

        if (isLastCardPinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        }

        if (!isLastCardPinned && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    getCardOffset,
    getEndElementOffset,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePosition,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
    useWindowScroll,
  ]);

  const calculateInitialOffsets = useCallback(() => {
    cardOffsetsRef.current = cardsRef.current.map((card) => {
      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();

        return rect.top + window.scrollY;
      }

      return card.offsetTop;
    });
  }, [useWindowScroll]);

  useLayoutEffect(() => {
    const root = useWindowScroll ? document : scrollerRef.current;

    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(".scroll-stack-card"),
    );

    cardsRef.current = cards;

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }

      card.style.willChange = "transform, filter";

      card.style.transformOrigin = "top center";

      card.style.backfaceVisibility = "hidden";

      card.style.webkitBackfaceVisibility = "hidden";

      card.style.transformStyle = "preserve-3d";

      card.style.transform = "translate3d(0, 0, 0)";
    });

    calculateInitialOffsets();

    const lenis = useWindowScroll
      ? new Lenis({
          duration: 1.1,
          smoothWheel: true,
          syncTouch: true,
          touchMultiplier: 1.5,
          wheelMultiplier: 1,
        })
      : new Lenis({
          wrapper: scrollerRef.current!,
          content:
            scrollerRef.current?.querySelector<HTMLElement>(
              ".scroll-stack-inner",
            ) ?? undefined,
          duration: 1.1,
          smoothWheel: true,
          syncTouch: true,
          touchMultiplier: 1.5,
          wheelMultiplier: 1,
        });

    lenis.on("scroll", updateCardTransforms);

    const animate = (time: number) => {
      lenis.raf(time);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    lenisRef.current = lenis;

    const handleResize = () => {
      calculateInitialOffsets();
      updateCardTransforms();
    };

    window.addEventListener("resize", handleResize);

    updateCardTransforms();

    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lenisRef.current?.destroy();
      lenisRef.current = null;

      cardsRef.current = [];
      cardOffsetsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      isUpdatingRef.current = false;
    };
  }, [
    calculateInitialOffsets,
    itemDistance,
    updateCardTransforms,
    useWindowScroll,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`
        relative
        w-full
        overflow-x-visible
        ${useWindowScroll ? "" : "h-full overflow-y-auto"}
        ${className}
      `}
    >
      <div
        className="
          scroll-stack-inner
          min-h-screen
          px-4
          pb-[35rem]
          pt-[12vh]
          sm:px-6
          lg:px-8
        "
      >
        {children}

        <div className="scroll-stack-end h-px w-full" />
      </div>
    </div>
  );
}
