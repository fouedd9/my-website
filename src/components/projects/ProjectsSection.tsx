import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

import { projects, type ProjectAccent } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const backgroundAccents: Record<ProjectAccent, string> = {
  violet:
    "bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.13),transparent_55%)]",

  blue: "bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.12),transparent_55%)]",

  green:
    "bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.11),transparent_55%)]",

  orange:
    "bg-[radial-gradient(circle_at_50%_45%,rgba(249,115,22,0.11),transparent_55%)]",

  amber:
    "bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.11),transparent_55%)]",
};

const mouseAccentColors: Record<ProjectAccent, string> = {
  violet: "rgba(139, 92, 246, 0.11)",
  blue: "rgba(59, 130, 246, 0.1)",
  green: "rgba(16, 185, 129, 0.095)",
  orange: "rgba(249, 115, 22, 0.095)",
  amber: "rgba(245, 158, 11, 0.095)",
};

type SectionStyle = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeAccent, setActiveAccent] = useState<ProjectAccent | null>(null);

  const sectionStyle: SectionStyle = {
    "--mouse-x": "50%",
    "--mouse-y": "45%",
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const bounds = section.getBoundingClientRect();

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;

    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    section.style.setProperty("--mouse-x", `${x}%`);
    section.style.setProperty("--mouse-y", `${y}%`);
  };

  const activeMouseColor = activeAccent
    ? mouseAccentColors[activeAccent]
    : "rgba(255,255,255,0.018)";

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={sectionStyle}
      onPointerMove={handlePointerMove}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050506]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Fond principal */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[#050506]
        "
      />

      {/* Halo qui suit la souris */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          transition-opacity
          duration-700
        "
        style={{
          background: `
            radial-gradient(
              circle 430px at var(--mouse-x) var(--mouse-y),
              ${activeMouseColor},
              transparent 72%
            )
          `,
          opacity: activeAccent ? 1 : 0.35,
        }}
      />

      {/* Halos fixes avec transition de couleur */}
      {(Object.keys(backgroundAccents) as ProjectAccent[]).map((accent) => (
        <div
          key={accent}
          className={`
              pointer-events-none
              absolute
              inset-0
              -z-20
              transition-opacity
              duration-700
              ease-out
              ${backgroundAccents[accent]}
              ${activeAccent === accent ? "opacity-100" : "opacity-0"}
            `}
        />
      ))}

      {/* Halo neutre */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.015]
          blur-[150px]
        "
      />

      {/* Grille */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.025]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:76px_76px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-20
          "
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.24em]
              text-violet-300
            "
          >
            Réalisations
          </span>

          <h2
            id="projects-title"
            className="
              mt-4
              text-4xl
              font-semibold
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-zinc-400
              sm:text-lg
            "
          >
            Des produits conçus pour résoudre de vrais problèmes, de la
            conception à la mise en production.
          </p>
        </div>

        <ScrollStack
          useWindowScroll
          itemDistance={130}
          itemStackDistance={30}
          stackPosition="24%"
          scaleEndPosition="4%"
          baseScale={0.9}
          itemScale={0.02}
          rotationAmount={0}
          blurAmount={0}
        >
          {projects.map((project) => (
            <ScrollStackItem
              key={project.id}
              itemClassName="
                h-auto
                border-0
                bg-transparent
                p-0
                shadow-none
                md:h-80
              "
            >
              <ProjectCard
                project={project}
                onActivate={() => {
                  setActiveAccent(project.accent);
                }}
                onDeactivate={() => {
                  setActiveAccent(null);
                }}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
