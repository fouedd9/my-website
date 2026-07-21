import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Icon } from "@iconify/react";

import PrismBackground from "@/components/backgrounds/PrismBackground";
import SpecularButton from "@/components/ui/SpecularButton";
import { useTranslation } from "@/i18n";

interface StatItem {
  target: number;
  suffix?: string;
  label: string;
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

interface PointerPosition {
  x: number;
  y: number;
}

function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    let timer: number | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;

        let current = 0;
        const increment = target / 40;

        timer = window.setInterval(() => {
          current += increment;

          if (current >= target) {
            current = target;

            if (timer) {
              window.clearInterval(timer);
            }
          }

          setCount(Math.floor(current));
        }, 40);

        observer.unobserve(element);
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, [target]);

  return (
    <div
      ref={counterRef}
      className="stat-number text-2xl font-semibold text-white sm:text-3xl"
    >
      {count}
      {suffix}
    </div>
  );
}

function Hero2() {
  const { language, t } = useTranslation();

  const [isNameHovered, setIsNameHovered] = useState<boolean>(false);

  const [pointerPosition, setPointerPosition] = useState<PointerPosition>({
    x: 0,
    y: 0,
  });

  const stats: StatItem[] = [
    {
      target: t.about.stats.experience.value,
      suffix: t.about.stats.experience.suffix,
      label: t.about.stats.experience.label,
    },
    {
      target: t.about.stats.projects.value,
      suffix: t.about.stats.projects.suffix,
      label: t.about.stats.projects.label,
    },
    {
      target: t.about.stats.performance.value,
      suffix: t.about.stats.performance.suffix,
      label: t.about.stats.performance.label,
    },
  ];

  const whatsappMessage =
    language === "fr"
      ? "Bonjour Foued, je viens de visiter votre portfolio et j'aimerais échanger avec vous."
      : "Hello Foued, I have just visited your portfolio and would like to connect with you.";

  const whatsappUrl = `https://wa.me/33767653082?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const handleNameMouseMove = (event: MouseEvent<HTMLHeadingElement>): void => {
    const bounds = event.currentTarget.getBoundingClientRect();

    const normalizedX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;

    const normalizedY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

    setPointerPosition({
      x: Math.max(-1, Math.min(1, normalizedX)),
      y: Math.max(-1, Math.min(1, normalizedY)),
    });
  };

  const handleNameMouseEnter = (): void => {
    setIsNameHovered(true);
  };

  const handleNameMouseLeave = (): void => {
    setIsNameHovered(false);

    setPointerPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pb-24"
    >
      <PrismBackground
        isInteractive={isNameHovered}
        pointerX={pointerPosition.x}
        pointerY={pointerPosition.y}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div className="anim-fade-up delay-200 mb-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wide text-indigo-300 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            {t.hero.availability}
          </span>
        </div>

        <p className="anim-fade-up delay-200 mb-3 text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
          {language === "fr" ? "Bonjour, je suis" : "Hello, I'm"}
        </p>

        <h1
          className="anim-clip delay-300 mx-auto w-fit cursor-default select-none text-5xl font-medium leading-[0.86] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          onMouseEnter={handleNameMouseEnter}
          onMouseMove={handleNameMouseMove}
          onMouseLeave={handleNameMouseLeave}
        >
          <span className="gradient-text-static">{t.hero.firstName}</span>

          <br />

          <span className="gradient-text">{t.hero.lastName}</span>
        </h1>

        <div className="anim-fade-up delay-500 mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-light text-neutral-400 sm:text-base md:text-lg">
          <Icon icon="lucide:code-2" width={20} className="text-indigo-400" />

          <span>{t.hero.role}</span>

          <span className="hidden text-zinc-600 sm:inline">|</span>

          <span className="font-medium text-indigo-400">React</span>

          <span className="text-zinc-600">•</span>

          <span className="font-medium text-sky-400">TypeScript</span>

          <span className="text-zinc-600">•</span>

          <span className="font-medium text-purple-400">Node.js</span>
        </div>

        <p className="anim-fade-up delay-600 mx-auto mt-6 max-w-2xl px-2 text-sm font-light leading-7 text-neutral-400 sm:text-base sm:leading-8">
          {t.hero.description}
        </p>

        <div className="anim-fade-up delay-700 mx-auto mt-9 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
          <SpecularButton
            href="#experience"
            size="md"
            radius={999}
            tint="#ffffff"
            tintOpacity={0.96}
            blur={8}
            textColor="#050505"
            lineColor="#818cf8"
            baseColor="#737373"
            intensity={1.25}
            shineSize={18}
            shineFade={55}
            thickness={1.5}
            speed={0.08}
            followMouse
            proximity={280}
            autoAnimate
            className="group w-full gap-2 sm:w-auto"
          >
            <p style={{ color: "black" }}>{t.hero.journeyButton}</p>

            <Icon
              style={{ color: "black" }}
              icon="lucide:arrow-right"
              width={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </SpecularButton>

          <SpecularButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            radius={999}
            tint="#18181b"
            tintOpacity={0.78}
            blur={18}
            textColor="#e4e4e7"
            lineColor="#a5b4fc"
            baseColor="#525252"
            intensity={1.35}
            shineSize={18}
            shineFade={55}
            thickness={1.5}
            speed={0.07}
            followMouse
            proximity={260}
            autoAnimate
            className="group w-full gap-2 sm:w-auto"
          >
            <Icon
              className="text-zinc-300 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-150 group-hover:text-[#25D366]"
              icon="ri:whatsapp-fill"
              width={18}
            />

            {t.hero.contactButton}
          </SpecularButton>
        </div>

        <div className="anim-fade-up delay-1000 mx-auto mt-12 grid w-full max-w-md grid-cols-3 gap-2 sm:mt-16 sm:max-w-lg sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "relative min-w-0 px-1 text-center sm:px-4",
                index > 0
                  ? "before:absolute before:left-0 before:top-1/2 before:h-8 before:w-px before:-translate-y-1/2 before:bg-white/10"
                  : "",
              ].join(" ")}
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />

              <div className="mt-1 text-[8px] uppercase leading-tight tracking-[0.1em] text-neutral-500 min-[375px]:text-[9px] sm:text-[10px] sm:tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] uppercase tracking-widest text-neutral-600">
          {language === "fr" ? "Défiler" : "Scroll"}
        </span>

        <div className="flex h-8 w-5 justify-center rounded-full border border-neutral-700 pt-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-indigo-400" />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
