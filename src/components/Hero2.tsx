import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import PrismBackground from "@/components/backgrounds/PrismBackground";

interface StatItem {
  target: number;
  suffix?: string;
  label: string;
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
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
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pb-24"
    >
      <PrismBackground />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="anim-fade-up delay-200 mb-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wide text-indigo-300 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible pour de nouveaux projets
          </span>
        </div>

        <h1 className="anim-clip delay-300 text-5xl font-medium leading-[0.88] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="gradient-text-static">Foued</span>

          <br />

          <span className="gradient-text">Saidane</span>
        </h1>

        <div className="anim-fade-up delay-500 mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-light text-neutral-400 sm:text-base md:text-lg">
          <Icon icon="lucide:code-2" width={20} className="text-indigo-400" />

          <span>Développeur FullStack</span>

          <span className="hidden text-zinc-600 sm:inline">|</span>

          <span className="font-medium text-indigo-400">React.js</span>

          <span className="text-zinc-600">/</span>

          <span className="font-medium text-purple-400">Node.js</span>
        </div>

        <p className="anim-fade-up delay-600 mx-auto mt-6 max-w-2xl px-2 text-sm font-light leading-relaxed text-neutral-500 sm:text-base">
          7+ ans d&apos;expérience dans la conception de solutions web modernes,
          performantes et maintenables. Intégration de l&apos;IA générative pour
          accélérer le développement.
        </p>

        <div className="anim-fade-up delay-700 mx-auto mt-9 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
          <a
            style={{ color: "black" }}
            href="#contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200 sm:w-auto"
          >
            Me contacter
            <Icon
              icon="lucide:arrow-right"
              width={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#experience"
            className="glass flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-indigo-500/30 hover:text-white sm:w-auto"
          >
            <Icon icon="lucide:briefcase" width={16} />
            Voir mon parcours
          </a>
        </div>

        <div className="anim-fade-up delay-1000 mx-auto mt-12 grid w-full max-w-md grid-cols-3 gap-2 sm:mt-16 sm:max-w-lg sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />

              <div className="mt-1 break-words text-[8px] uppercase leading-tight tracking-[0.12em] text-neutral-500 min-[375px]:text-[9px] sm:text-[10px] sm:tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] uppercase tracking-widest text-neutral-600">
          Scroll
        </span>

        <div className="flex h-8 w-5 justify-center rounded-full border border-neutral-700 pt-1.5">
          <div className="h-2 w-1 rounded-full bg-indigo-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
