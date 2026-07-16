import Prism from "@/components/Prism";

function PrismBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-30 sm:opacity-35 md:opacity-45">
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.25)_42%,#050505_84%)]" />

      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-b from-transparent to-[#050505]" />
    </div>
  );
}

export default PrismBackground;
