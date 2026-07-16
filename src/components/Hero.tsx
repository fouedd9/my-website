import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

interface StatItem {
  target: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    target: 7,
    label: "Ans d'exp.",
  },
  {
    target: 50,
    suffix: "+",
    label: "Projets",
  },
  {
    target: 35,
    suffix: "%",
    label: "Gain perf.",
  },
];

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        let current = 0;
        const increment = target / 40;

        const timer = window.setInterval(() => {
          current += increment;

          if (current >= target) {
            current = target;
            window.clearInterval(timer);
          }

          setCount(Math.floor(current));
        }, 40);
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <div
      ref={counterRef}
      className="stat-number text-2xl md:text-3xl font-semibold text-white"
    >
      {count}
      {suffix}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/8 blur-[100px] pointer-events-none" />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1200 800"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="beam-path"
          d="M0 400 Q300 200 600 400 T1200 400"
          stroke="url(#beamGradient)"
          strokeWidth="1"
        />

        <path
          className="beam-path"
          d="M0 500 Q400 300 600 500 T1200 300"
          stroke="url(#beamGradientSecondary)"
          strokeWidth="0.5"
          style={{
            animationDelay: "1.5s",
          }}
        />

        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="beamGradientSecondary"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="anim-fade-up delay-200 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-indigo-300 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible pour de nouveaux projets
          </span>
        </div>

        <h1 className="anim-clip delay-300 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.85]">
          <span className="gradient-text-static">Foued</span>

          <br />

          <span className="gradient-text">Saidane</span>
        </h1>

        <div className="anim-fade-up delay-500 mt-8 flex flex-wrap items-center justify-center gap-3 text-neutral-400 text-base md:text-lg font-light">
          <Icon icon="lucide:code-2" width={20} className="text-indigo-400" />

          <span>Développeur FullStack</span>

          <span className="text-zinc-600">|</span>

          <span className="text-indigo-400 font-medium">React.js</span>

          <span className="text-zinc-600">/</span>

          <span className="text-purple-400 font-medium">Node.js</span>
        </div>

        <p className="anim-fade-up delay-600 mt-6 text-neutral-500 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
          7+ ans d&apos;expérience dans la conception de solutions web modernes,
          performantes et maintenables. Intégration de l&apos;IA générative pour
          accélérer le développement.
        </p>

        <div className="anim-fade-up delay-700 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2"
          >
            Me contacter
            <Icon
              icon="lucide:arrow-right"
              width={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#experience"
            className="px-8 py-3.5 glass text-sm font-medium text-neutral-300 rounded-full hover:text-white hover:border-indigo-500/30 transition-all duration-300 flex items-center gap-2"
          >
            <Icon icon="lucide:briefcase" width={16} />
            Voir mon parcours
          </a>
        </div>

        <div className="anim-fade-up delay-1000 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />

              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 anim-fade delay-1000 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-neutral-600">
          Scroll
        </span>

        <div className="w-5 h-8 rounded-full border border-neutral-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
