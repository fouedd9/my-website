import { useState } from "react";
import { Icon } from "@iconify/react";

import type { Project, ProjectAccent } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

interface AccentStyle {
  badge: string;
  glow: string;
  imageBackground: string;
  hoverBorder: string;
  highlightIcon: string;
  buttonHover: string;
  shine: string;
}

const accentStyles: Record<ProjectAccent, AccentStyle> = {
  violet: {
    badge: "border-violet-400/20 bg-violet-400/10 text-violet-200",
    glow: "bg-violet-500/25",
    imageBackground: "from-violet-950/80 via-[#11111a] to-[#08080c]",
    hoverBorder: "hover:border-violet-400/30",
    highlightIcon: "text-violet-300",
    buttonHover:
      "hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-200",
    shine: "via-violet-300/80",
  },

  blue: {
    badge: "border-blue-400/20 bg-blue-400/10 text-blue-200",
    glow: "bg-blue-500/25",
    imageBackground: "from-blue-950/80 via-[#0d111a] to-[#08090c]",
    hoverBorder: "hover:border-blue-400/30",
    highlightIcon: "text-blue-300",
    buttonHover:
      "hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-200",
    shine: "via-blue-300/80",
  },

  green: {
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    glow: "bg-emerald-500/25",
    imageBackground: "from-emerald-950/70 via-[#0c1512] to-[#080b0a]",
    hoverBorder: "hover:border-emerald-400/30",
    highlightIcon: "text-emerald-300",
    buttonHover:
      "hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-200",
    shine: "via-emerald-300/80",
  },

  orange: {
    badge: "border-orange-400/20 bg-orange-400/10 text-orange-200",
    glow: "bg-orange-500/25",
    imageBackground: "from-orange-950/70 via-[#17100d] to-[#0b0908]",
    hoverBorder: "hover:border-orange-400/30",
    highlightIcon: "text-orange-300",
    buttonHover:
      "hover:border-orange-400/30 hover:bg-orange-400/10 hover:text-orange-200",
    shine: "via-orange-300/80",
  },

  amber: {
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    glow: "bg-amber-500/25",
    imageBackground: "from-amber-950/70 via-[#17140c] to-[#0b0a07]",
    hoverBorder: "hover:border-amber-400/30",
    highlightIcon: "text-amber-300",
    buttonHover:
      "hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-200",
    shine: "via-amber-300/80",
  },
};

export default function ProjectCard({
  project,
  onActivate,
  onDeactivate,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!project) {
    console.error("ProjectCard : la propriété project est absente.");
    return null;
  }

  const styles = accentStyles[project.accent];

  if (!styles) {
    console.error(
      `ProjectCard : accent invalide pour "${project.title}" :`,
      project.accent,
    );

    return null;
  }

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  return (
    <article
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocusCapture={onActivate}
      onBlurCapture={(event) => {
        const nextElement = event.relatedTarget as Node | null;

        if (!nextElement || !event.currentTarget.contains(nextElement)) {
          onDeactivate?.();
        }
      }}
      className={`
        group
        relative
        mx-auto
        flex
        h-auto
        w-full
        max-w-6xl
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#09090b]
        shadow-[0_24px_80px_rgba(0,0,0,0.42)]
        transition-all
        duration-500
        hover:shadow-[0_30px_100px_rgba(0,0,0,0.55)]
        md:h-80
        md:flex-row
        ${styles.hoverBorder}
      `}
    >
      {/* Reflet lumineux supérieur */}
      <div
        className={`
          pointer-events-none
          absolute
          left-[-45%]
          top-0
          z-30
          h-px
          w-[42%]
          bg-gradient-to-r
          from-transparent
          to-transparent
          opacity-0
          transition-all
          duration-[1400ms]
          ease-out
          group-hover:left-[105%]
          group-hover:opacity-100
          ${styles.shine}
        `}
      />

      {/* Reflet lumineux inférieur */}
      <div
        className={`
          pointer-events-none
          absolute
          bottom-0
          right-[-45%]
          z-30
          h-px
          w-[42%]
          bg-gradient-to-r
          from-transparent
          to-transparent
          opacity-0
          transition-all
          delay-100
          duration-[1400ms]
          ease-out
          group-hover:right-[105%]
          group-hover:opacity-70
          ${styles.shine}
        `}
      />

      {/* Halo général */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          opacity-60
          blur-[100px]
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:opacity-100
          ${styles.glow}
        `}
      />

      {/* Partie image */}
      <div
        className={`
          relative
          flex
          h-56
          shrink-0
          items-center
          justify-center
          overflow-hidden
          border-b
          border-white/10
          bg-gradient-to-br
          p-4
          sm:h-64
          sm:p-5
          md:h-full
          md:w-[46%]
          md:border-b-0
          md:border-r
          ${styles.imageBackground}
        `}
      >
        {/* Lumière derrière le visuel */}
        <div
          className={`
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-56
            w-56
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            opacity-70
            blur-[85px]
            transition-all
            duration-700
            group-hover:scale-125
            group-hover:opacity-100
            ${styles.glow}
          `}
        />

        {/* Grille */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
            [background-size:28px_28px]
          "
        />

        {/* Skeleton pendant le chargement */}
        <div
          className={`
            pointer-events-none
            absolute
            inset-4
            z-10
            rounded-[18px]
            bg-white/[0.035]
            transition-opacity
            duration-700
            sm:inset-5
            ${imageLoaded ? "opacity-0" : "animate-pulse opacity-100"}
          `}
        />

        {/* Image */}
        <div
          className="
            relative
            z-20
            flex
            h-full
            w-full
            items-center
            justify-center
            transition-transform
            duration-700
            ease-out
            group-hover:-translate-y-1
            group-hover:scale-[1.02]
          "
        >
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`
              h-full
              w-full
              rounded-[18px]
              object-cover
              shadow-[0_22px_40px_rgba(0,0,0,0.48)]
              transition-all
              duration-1000
              ease-out
              ${
                imageLoaded
                  ? "scale-100 opacity-100 blur-0"
                  : "scale-[1.04] opacity-0 blur-xl"
              }
            `}
          />
        </div>

        {/* Fondu harmonisé autour de l’image */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-[radial-gradient(circle_at_center,transparent_50%,rgba(5,5,8,0.35)_100%)]
          "
        />

        {/* Reflet intérieur */}
        <div
          className="
            pointer-events-none
            absolute
            inset-4
            z-20
            rounded-[18px]
            ring-1
            ring-inset
            ring-white/[0.08]
            sm:inset-5
          "
        />
      </div>

      {/* Partie contenu */}
      <div
        className="
          relative
          z-10
          flex
          min-w-0
          flex-1
          flex-col
          p-5
          sm:p-6
          md:p-6
          lg:p-7
        "
      >
        <div className="flex shrink-0 items-center justify-between gap-4">
          <span
            className={`
              inline-flex
              items-center
              rounded-full
              border
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.17em]
              ${styles.badge}
            `}
          >
            {project.category}
          </span>

          <span className="text-xs font-medium text-zinc-500">
            {project.year}
          </span>
        </div>

        <div className="mt-3 shrink-0">
          <h3
            className="
              text-2xl
              font-semibold
              tracking-[-0.04em]
              text-white
              lg:text-3xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1.5
              line-clamp-2
              text-sm
              font-medium
              leading-5
              text-zinc-200
              lg:text-[15px]
            "
          >
            {project.headline}
          </p>

          <p
            className="
              mt-1.5
              line-clamp-2
              text-xs
              leading-[18px]
              text-zinc-400
              lg:text-[13px]
            "
          >
            {project.description}
          </p>
        </div>

        <div
          className="
            mt-2.5
            inline-flex
            w-fit
            max-w-full
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.035]
            px-2.5
            py-1.5
            text-[11px]
            font-medium
            text-zinc-300
          "
        >
          <Icon
            icon="lucide:sparkles"
            width={13}
            className={`shrink-0 ${styles.highlightIcon}`}
            aria-hidden="true"
          />

          <span className="truncate">{project.highlight}</span>
        </div>

        {technologies.length > 0 && (
          <div
            className="
              mt-2.5
              flex
              min-h-[52px]
              shrink-0
              flex-wrap
              content-start
              gap-1.5
            "
          >
            {technologies.map((technology) => (
              <span
                key={`${project.id}-${technology}`}
                className="
                  inline-flex
                  h-6
                  items-center
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-2.5
                  text-[10px]
                  font-medium
                  leading-none
                  text-zinc-400
                  transition-all
                  duration-300
                  group-hover:border-white/[0.13]
                  group-hover:bg-white/[0.05]
                  group-hover:text-zinc-300
                "
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto shrink-0 pt-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Explorer le projet ${project.title}`}
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3.5
              py-2
              text-xs
              font-medium
              text-zinc-200
              transition-all
              duration-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/40
              ${styles.buttonHover}
            `}
          >
            <span>Explorer le projet</span>

            <Icon
              icon="lucide:arrow-up-right"
              width={14}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
