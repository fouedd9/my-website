import Prism from "@/components/Prism";

interface PrismBackgroundProps {
  isInteractive?: boolean;
  pointerX?: number;
  pointerY?: number;
}

function PrismBackground({
  isInteractive = false,
  pointerX = 0,
  pointerY = 0,
}: PrismBackgroundProps) {
  const translateX = pointerX * 10;
  const translateY = pointerY * 7;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className={[
          "absolute -inset-[4%]",
          "transition-[transform,opacity,filter]",
          "duration-700 ease-out",
          isInteractive
            ? "opacity-50 md:opacity-55"
            : "opacity-30 sm:opacity-35 md:opacity-45",
        ].join(" ")}
        style={{
          transform: isInteractive
            ? `translate3d(${translateX}px, ${translateY}px, 0) scale(1.035)`
            : "translate3d(0, 0, 0) scale(1)",
          filter: isInteractive
            ? "saturate(1.08) brightness(1.05)"
            : "saturate(1) brightness(1)",
        }}
      >
        <Prism
          height={3}
          baseWidth={5.5}
          animationType="rotate"
          glow={0.65}
          noise={0.25}
          transparent
          scale={3.2}
          hueShift={0}
          colorFrequency={1}
          hoverStrength={1.5}
          inertia={0.05}
          bloom={0.8}
          timeScale={0.3}
          suspendWhenOffscreen
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.22)_40%,#050505_84%)]" />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505]/65 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050505] sm:h-40" />
    </div>
  );
}

export default PrismBackground;
