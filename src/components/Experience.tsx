import { Icon } from "@iconify/react";

import { useTranslation } from "@/i18n";

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  missions: string[];
  technologies: Technology[];
  companyColor: string;
  glowColor: string;
  dotColor: string;
  delay: string;
  current?: boolean;
}

interface Technology {
  name: string;
  colorClass: string;
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  currentLabel: string;
  language: "fr" | "en";
}

function highlightMission(text: string, language: "fr" | "en") {
  const highlights =
    language === "fr"
      ? [
          "chatbot IA hybride",
          "réduisant le temps d’intégration de 50%",
          "Next.js",
          "3 000+ visiteurs",
          "temps de réponse API réduit de 35%",
          "réduction de 30% des bugs",
        ]
      : [
          "hybrid AI chatbot",
          "reducing onboarding time by 50%",
          "Next.js",
          "3,000+ visitors",
          "API response time reduced by 35%",
          "30% reduction in post-deployment bugs",
        ];

  const escapedHighlights = highlights.map((highlight) =>
    highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );

  const parts = text.split(new RegExp(`(${escapedHighlights.join("|")})`, "g"));

  return parts.map((part, index) => {
    const isHighlight = highlights.includes(part);

    if (!isHighlight) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    const isPerformance =
      part.includes("50%") ||
      part.includes("3 000+") ||
      part.includes("3,000+") ||
      part.includes("35%") ||
      part.includes("30%");

    return (
      <span
        key={`${part}-${index}`}
        className={
          isPerformance
            ? "font-medium text-emerald-400"
            : "font-medium text-white"
        }
      >
        {part}
      </span>
    );
  });
}

function ExperienceCard({
  experience,
  currentLabel,
  language,
}: ExperienceCardProps) {
  return (
    <div
      className="reveal-left relative pb-16 pl-16 last:pb-0 md:pl-20"
      style={{
        transitionDelay: experience.delay,
      }}
    >
      <div
        className={`absolute left-4 top-1 z-10 h-4 w-4 rounded-full border-4 border-[#050505] md:left-6 ${experience.dotColor} ${
          experience.current ? "current-experience-dot" : ""
        }`}
      />

      {experience.current && (
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          {currentLabel}
        </span>
      )}

      <article className="glass card-hover exp-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div
          className={`pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full blur-[80px] ${experience.glowColor}`}
        />

        <div className="relative z-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-medium text-white">
                {experience.position}
              </h3>

              <p
                className={`mt-1 text-sm font-medium ${experience.companyColor}`}
              >
                {experience.company}
              </p>
            </div>

            <span className="self-start whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-xs font-light text-neutral-500 sm:self-auto">
              {experience.period}
            </span>
          </div>

          <p className="mb-6 text-sm font-light leading-relaxed text-neutral-400">
            {experience.description}
          </p>

          {experience.missions.length > 0 && (
            <ul className="space-y-3">
              {experience.missions.map((mission) => (
                <li
                  key={mission}
                  className="flex items-start gap-3 text-sm font-light leading-relaxed text-neutral-300"
                >
                  <Icon
                    icon="lucide:chevron-right"
                    width={14}
                    className="mt-1 flex-shrink-0 text-indigo-400"
                    aria-hidden="true"
                  />

                  <span>{highlightMission(mission, language)}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology.name}
                className={`rounded-md px-2.5 py-1 text-[10px] font-medium ${technology.colorClass}`}
              >
                {technology.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

function Experience() {
  const { language, t } = useTranslation();

  const experiences: ExperienceItem[] =
    language === "fr"
      ? [
          {
            id: 1,
            position: "Développeur Front End",
            company: "ASENDIT",
            period: "Avril 2022 — Présent",
            description:
              "Développement de la solution SaaS Yeetch SIRH intégrée à Microsoft Teams pour automatiser la gestion RH.",
            companyColor: "text-indigo-400",
            glowColor: "bg-indigo-500/5",
            dotColor: "bg-indigo-500",
            delay: "0.1s",
            current: true,
            missions: [
              "Création d’un chatbot IA hybride (MCP, ChatGPT API) alliant base de connaissances et réponses instantanées",
              "Système complet de gestion des absences multi-rôles avec workflows et calendrier interactif",
              "Tableau de bord RH avec données stratégiques et analyses en temps réel",
              "Module d’onboarding et d’offboarding automatisé, réduisant le temps d’intégration de 50%",
              "Gestion des notes de frais avec OCR et suivi des utilisateurs",
              "Site Yeetch SIRH en Next.js, multilingue, optimisé pour le SEO et responsive",
              "Interface tactile interactive pour une exposition, utilisée par 3 000+ visiteurs",
              "Back-end Node.js et Express avec un temps de réponse API réduit de 35%",
              "Tests Jest permettant une réduction de 30% des bugs après déploiement",
            ],
            technologies: [
              {
                name: "React.js",
                colorClass: "bg-indigo-500/10 text-indigo-300",
              },
              {
                name: "Next.js",
                colorClass: "bg-indigo-500/10 text-indigo-300",
              },
              {
                name: "Node.js",
                colorClass: "bg-purple-500/10 text-purple-300",
              },
              {
                name: "Express",
                colorClass: "bg-purple-500/10 text-purple-300",
              },
              {
                name: "ChatGPT API",
                colorClass: "bg-cyan-500/10 text-cyan-300",
              },
              {
                name: "MCP",
                colorClass: "bg-cyan-500/10 text-cyan-300",
              },
              {
                name: "Jest",
                colorClass: "bg-emerald-500/10 text-emerald-300",
              },
              {
                name: "OCR",
                colorClass: "bg-amber-500/10 text-amber-300",
              },
            ],
          },
          {
            id: 2,
            position: "Développeur Full Stack",
            company: "BACHMANN RDS",
            period: "Fév. 2021 — Mars 2022",
            description:
              "Développement full stack de solutions web au sein d’une équipe Agile, de la conception à la mise en production.",
            companyColor: "text-purple-400",
            glowColor: "bg-purple-500/5",
            dotColor: "bg-purple-500",
            delay: "0.2s",
            missions: [],
            technologies: [
              {
                name: "React.js",
                colorClass: "bg-indigo-500/10 text-indigo-300",
              },
              {
                name: "Node.js",
                colorClass: "bg-purple-500/10 text-purple-300",
              },
              {
                name: "Express",
                colorClass: "bg-cyan-500/10 text-cyan-300",
              },
              {
                name: "MongoDB",
                colorClass: "bg-emerald-500/10 text-emerald-300",
              },
              {
                name: "Agile/Scrum",
                colorClass: "bg-amber-500/10 text-amber-300",
              },
            ],
          },
        ]
      : [
          {
            id: 1,
            position: "Front-End Developer",
            company: "ASENDIT",
            period: "April 2022 — Present",
            description:
              "Development of Yeetch, an HR SaaS platform integrated with Microsoft Teams to automate and simplify HR management.",
            companyColor: "text-indigo-400",
            glowColor: "bg-indigo-500/5",
            dotColor: "bg-indigo-500",
            delay: "0.1s",
            current: true,
            missions: [
              "Built a hybrid AI chatbot using MCP and the ChatGPT API, combining a knowledge base with instant responses",
              "Developed a complete multi-role leave management system with approval workflows and an interactive calendar",
              "Created an HR dashboard featuring strategic data and real-time analytics",
              "Built an automated onboarding and offboarding module, reducing onboarding time by 50%",
              "Developed an expense management module with OCR and user tracking",
              "Built the multilingual, responsive and SEO-friendly Yeetch HR website with Next.js",
              "Developed an interactive touchscreen interface for an exhibition, used by 3,000+ visitors",
              "Developed the Node.js and Express backend, with API response time reduced by 35%",
              "Implemented Jest tests, resulting in a 30% reduction in post-deployment bugs",
            ],
            technologies: [
              {
                name: "React.js",
                colorClass: "bg-indigo-500/10 text-indigo-300",
              },
              {
                name: "Next.js",
                colorClass: "bg-indigo-500/10 text-indigo-300",
              },
              {
                name: "Node.js",
                colorClass: "bg-purple-500/10 text-purple-300",
              },
              {
                name: "Express",
                colorClass: "bg-purple-500/10 text-purple-300",
              },
              {
                name: "ChatGPT API",
                colorClass: "bg-cyan-500/10 text-cyan-300",
              },
              {
                name: "MCP",
                colorClass: "bg-cyan-500/10 text-cyan-300",
              },
              {
                name: "Jest",
                colorClass: "bg-emerald-500/10 text-emerald-300",
              },
              {
                name: "OCR",
                colorClass: "bg-amber-500/10 text-amber-300",
              },
            ],
          },
          {
            id: 2,
            position: "Full-Stack Developer",
            company: "BACHMANN RDS",
            period: "Feb. 2021 — March 2022",
            description:
              "Full-stack development of web solutions within an Agile team, from initial design through to production deployment.",
            companyColor: "text-purple-400",
            glowColor: "bg-purple-500/5",
            dotColor: "bg-purple-500",
            delay: "0.2s",
            missions: [],
            technologies: [
              {
                name: "React.js",
                colorClass: "bg-indigo-500/10 text-indigo-300",
              },
              {
                name: "Node.js",
                colorClass: "bg-purple-500/10 text-purple-300",
              },
              {
                name: "Express",
                colorClass: "bg-cyan-500/10 text-cyan-300",
              },
              {
                name: "MongoDB",
                colorClass: "bg-emerald-500/10 text-emerald-300",
              },
              {
                name: "Agile/Scrum",
                colorClass: "bg-amber-500/10 text-amber-300",
              },
            ],
          },
        ];

  const currentLabel = language === "fr" ? "Poste actuel" : "Current position";

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="section-sep mb-32" />

      <div className="mx-auto max-w-6xl">
        <div id="experience-title" className="reveal mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            {t.experience.eyebrow}
          </span>

          <h2 className="gradient-text-static mt-4 text-3xl font-medium tracking-tighter md:text-4xl">
            {language === "fr"
              ? "Parcours Professionnel"
              : "Professional Experience"}

            <span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="timeline-line absolute bottom-0 left-6 top-0 w-px md:left-8" />

          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              currentLabel={currentLabel}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
