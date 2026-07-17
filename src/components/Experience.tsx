import { Icon } from "@iconify/react";

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

const experiences: ExperienceItem[] = [
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
      "Créé un chatbot IA hybride (MCP, ChatGPT API) alliant knowledge base et réponses instantanées",
      "Système complet de gestion des absences multi-rôles avec workflows et calendrier interactif",
      "Tableau de bord RH avec données stratégiques et analyses en temps réel",
      "Module d'onboarding/offboarding automatisé, réduisant le temps d'intégration de 50%",
      "Gestion des notes de frais avec OCR et suivi des utilisateurs",
      "Site Yeetch SIRH en Next.js, multilingue, SEO-friendly et responsive",
      "Interface tactile interactive pour exposition — utilisée par 3 000+ visiteurs",
      "Back-end Node.js/Express — temps de réponse API réduit de 35%",
      "Tests Jest — réduction de 30% des bugs post-déploiement",
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
      "Développement full stack de solutions web au sein d'une équipe Agile, de la conception à la mise en production.",
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

function highlightMission(text: string) {
  const highlights = [
    "chatbot IA hybride",
    "réduisant le temps d'intégration de 50%",
    "Next.js",
    "3 000+ visiteurs",
    "temps de réponse API réduit de 35%",
    "réduction de 30% des bugs",
  ];

  const parts = text.split(new RegExp(`(${highlights.join("|")})`, "g"));

  return parts.map((part, index) => {
    const isHighlight = highlights.includes(part);

    if (!isHighlight) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    const isPerformance =
      part.includes("50%") ||
      part.includes("3 000+") ||
      part.includes("35%") ||
      part.includes("30%");

    return (
      <span
        key={`${part}-${index}`}
        className={
          isPerformance
            ? "text-emerald-400 font-medium"
            : "text-white font-medium"
        }
      >
        {part}
      </span>
    );
  });
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div
      className="relative pl-16 md:pl-20 pb-16 last:pb-0 reveal-left"
      style={{
        transitionDelay: experience.delay,
      }}
    >
      <div
        className={`absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full ${experience.dotColor} border-4 border-[#050505] z-10 ${
          experience.current ? "current-experience-dot" : ""
        }`}
      />

      {experience.current && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Poste actuel
        </span>
      )}

      <article className="glass rounded-2xl p-6 sm:p-8 card-hover exp-card relative overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-60 h-60 ${experience.glowColor} rounded-full blur-[80px] pointer-events-none`}
        />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-medium text-white">
                {experience.position}
              </h3>

              <p
                className={`${experience.companyColor} font-medium text-sm mt-1`}
              >
                {experience.company}
              </p>
            </div>

            <span className="text-xs text-neutral-500 font-light whitespace-nowrap px-3 py-1 rounded-full bg-white/5 self-start sm:self-auto">
              {experience.period}
            </span>
          </div>

          <p className="text-sm text-neutral-400 font-light mb-6 leading-relaxed">
            {experience.description}
          </p>

          {experience.missions.length > 0 && (
            <ul className="space-y-3">
              {experience.missions.map((mission) => (
                <li
                  key={mission}
                  className="flex items-start gap-3 text-sm text-neutral-300 font-light leading-relaxed"
                >
                  <Icon
                    icon="lucide:chevron-right"
                    width={14}
                    className="text-indigo-400 flex-shrink-0 mt-1"
                  />

                  <span>{highlightMission(mission)}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology.name}
                className={`px-2.5 py-1 rounded-md text-[10px] font-medium ${technology.colorClass}`}
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
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="section-sep mb-32" />

      <div className="max-w-6xl mx-auto">
        <div id="experience-title" className="text-center mb-16 reveal">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Expérience
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tighter gradient-text-static">
            Parcours Professionnel
            <span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line" />

          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
