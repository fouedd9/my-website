import { Icon } from "@iconify/react";

interface ContactInformation {
  icon: string;
  label: string;
  href?: string;
}

interface Language {
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

const languages: Language[] = [
  {
    code: "FR",
    level: "C2",
  },
  {
    code: "EN",
    level: "B2/C1",
  },
];

const expertiseItems: ExpertiseItem[] = [
  {
    icon: "lucide:bot",
    title: "IA Générative",
    description: "Copilot, ChatGPT, Claude, MCP",
    iconColor: "text-indigo-400",
    backgroundColor: "bg-indigo-500/10",
  },
  {
    icon: "lucide:layers",
    title: "Architecture",
    description: "SaaS, Microservices, REST API",
    iconColor: "text-purple-400",
    backgroundColor: "bg-purple-500/10",
  },
  {
    icon: "lucide:smartphone",
    title: "Multi-device",
    description: "Responsive, Tactile, Desktop",
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

function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="section-sep mb-32" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 reveal-left">
            <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
              À propos
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tighter gradient-text-static leading-tight">
              Qui suis-je
              <span className="text-indigo-400">.</span>
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              {contactInformation.map((information) => {
                const content = (
                  <>
                    <Icon
                      icon={information.icon}
                      width={16}
                      className="text-indigo-400 flex-shrink-0"
                    />

                    <span>{information.label}</span>
                  </>
                );

                if (information.href) {
                  return (
                    <a
                      key={information.label}
                      href={information.href}
                      className="flex items-center gap-3 text-sm text-neutral-400 font-light hover:text-white transition-colors"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={information.label}
                    className="flex items-center gap-3 text-sm text-neutral-400 font-light"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {languages.map((language) => (
                <div
                  key={language.code}
                  className="glass px-4 py-2 rounded-xl text-center"
                >
                  <div className="text-sm font-medium text-white">
                    {language.code}
                  </div>

                  <div className="text-[10px] text-indigo-300 mt-0.5">
                    {language.level}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 reveal-right">
            <div className="glass rounded-2xl p-8 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none" />

              <p className="relative z-10 text-neutral-300 font-light leading-[1.8] text-[15px]">
                Développeur FullStack JS passionné, avec plus de{" "}
                <span className="text-white font-medium">
                  7 ans d&apos;expérience
                </span>{" "}
                dans la conception de solutions web modernes, performantes et
                maintenables. Spécialisé en{" "}
                <span className="text-indigo-400 font-medium">Node.js</span> et{" "}
                <span className="text-indigo-400 font-medium">React.js</span>,
                j&apos;utilise l&apos;IA générative — GitHub Copilot, ChatGPT,
                Claude — pour accélérer le développement, améliorer la qualité
                du code et renforcer la productivité des équipes.
              </p>

              <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertiseItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg ${item.backgroundColor} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Icon
                        icon={item.icon}
                        width={16}
                        className={item.iconColor}
                      />
                    </div>

                    <div>
                      <div className="text-sm font-medium text-white">
                        {item.title}
                      </div>

                      <div className="text-xs text-neutral-500 font-light mt-0.5">
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
