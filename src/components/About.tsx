import { Icon } from "@iconify/react";

import { useTranslation } from "@/i18n";

interface ContactInformation {
  icon: string;
  label: string;
  href?: string;
}

interface SpokenLanguage {
  code: string;
  level: string;
}

interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  backgroundColor: string;
}

const contactInformation: ContactInformation[] = [
  {
    icon: "lucide:map-pin",
    label: "Grenoble, France",
  },
  {
    icon: "lucide:mail",
    label: "fouedsaidane2@gmail.com",
    href: "mailto:fouedsaidane2@gmail.com",
  },
  {
    icon: "lucide:phone",
    label: "+33(0)7 67 65 30 82",
    href: "tel:+33767653082",
  },
];

const spokenLanguages: SpokenLanguage[] = [
  {
    code: "FR",
    level: "C2",
  },
  {
    code: "EN",
    level: "B2/C1",
  },
];

function About() {
  const { language, t } = useTranslation();

  const expertiseItems: ExpertiseItem[] = [
    {
      icon: "lucide:bot",
      title: language === "fr" ? "IA Générative" : "Generative AI",
      description: "Copilot, ChatGPT, Claude, MCP",
      iconColor: "text-indigo-400",
      backgroundColor: "bg-indigo-500/10",
    },
    {
      icon: "lucide:layers",
      title: language === "fr" ? "Architecture" : "Architecture",
      description: "SaaS, Microservices, REST API",
      iconColor: "text-purple-400",
      backgroundColor: "bg-purple-500/10",
    },
    {
      icon: "lucide:smartphone",
      title: language === "fr" ? "Multi-device" : "Multi-device",
      description:
        language === "fr"
          ? "Responsive, Tactile, Desktop"
          : "Responsive, Touch, Desktop",
      iconColor: "text-cyan-400",
      backgroundColor: "bg-cyan-500/10",
    },
    {
      icon: "lucide:users",
      title: "Agile",
      description: "Scrum, Kanban, Sprint, JIRA",
      iconColor: "text-emerald-400",
      backgroundColor: "bg-emerald-500/10",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="section-sep mb-32" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div id="about-title" className="reveal-left md:col-span-4">
            <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
              {t.about.eyebrow}
            </span>

            <h2 className="gradient-text-static mt-4 text-3xl font-medium leading-tight tracking-tighter md:text-4xl">
              {language === "fr" ? "Qui suis-je" : "Who I am"}

              <span className="text-indigo-400">.</span>
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              {contactInformation.map((information) => {
                const content = (
                  <>
                    <Icon
                      icon={information.icon}
                      width={16}
                      className="flex-shrink-0 text-indigo-400"
                      aria-hidden="true"
                    />

                    <span>{information.label}</span>
                  </>
                );

                if (information.href) {
                  return (
                    <a
                      key={information.label}
                      href={information.href}
                      className="flex items-center gap-3 text-sm font-light text-neutral-400 transition-colors hover:text-white"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={information.label}
                    className="flex items-center gap-3 text-sm font-light text-neutral-400"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {spokenLanguages.map((spokenLanguage) => (
                <div
                  key={spokenLanguage.code}
                  className="glass rounded-xl px-4 py-2 text-center"
                >
                  <div className="text-sm font-medium text-white">
                    {spokenLanguage.code}
                  </div>

                  <div className="mt-0.5 text-[10px] text-indigo-300">
                    {spokenLanguage.level}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right md:col-span-8">
            <div className="glass card-hover relative overflow-hidden rounded-2xl p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/5 blur-[60px]" />

              {language === "fr" ? (
                <p className="relative z-10 text-[15px] font-light leading-[1.8] text-neutral-300">
                  Développeur FullStack JS passionné, avec plus de{" "}
                  <span className="font-medium text-white">
                    7 ans d&apos;expérience
                  </span>{" "}
                  dans la conception de solutions web modernes, performantes et
                  maintenables. Spécialisé en{" "}
                  <span className="font-medium text-indigo-400">Node.js</span>{" "}
                  et{" "}
                  <span className="font-medium text-indigo-400">React.js</span>,
                  j&apos;utilise l&apos;IA générative — GitHub Copilot, ChatGPT,
                  Claude — pour accélérer le développement, améliorer la qualité
                  du code et renforcer la productivité des équipes.
                </p>
              ) : (
                <p className="relative z-10 text-[15px] font-light leading-[1.8] text-neutral-300">
                  Passionate FullStack JavaScript developer with more than{" "}
                  <span className="font-medium text-white">
                    7 years of experience
                  </span>{" "}
                  building modern, high-performance and maintainable web
                  solutions. Specialized in{" "}
                  <span className="font-medium text-indigo-400">Node.js</span>{" "}
                  and{" "}
                  <span className="font-medium text-indigo-400">React.js</span>,
                  I use generative AI tools — GitHub Copilot, ChatGPT and Claude
                  — to accelerate development, improve code quality and increase
                  team productivity.
                </p>
              )}

              <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {expertiseItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className={`
                        mt-0.5
                        flex
                        h-8
                        w-8
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        ${item.backgroundColor}
                      `}
                    >
                      <Icon
                        icon={item.icon}
                        width={16}
                        className={item.iconColor}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-medium text-white">
                        {item.title}
                      </div>

                      <div className="mt-0.5 text-xs font-light text-neutral-500">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
