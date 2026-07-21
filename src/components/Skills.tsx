import { Icon } from "@iconify/react";

import { useTranslation } from "@/i18n";

interface Skill {
  name: string;
  colorClass: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  iconBackground: string;
  skills: Skill[];
  delay: string;
}

interface Strength {
  label: string;
}

interface SkillPillProps {
  skill: Skill;
}

interface CategoryHeaderProps {
  icon: string;
  iconColor: string;
  iconBackground: string;
  title: string;
  subtitle: string;
}

function SkillPill({ skill }: SkillPillProps) {
  return (
    <span
      className={`skill-pill rounded-lg px-3 py-1.5 text-xs font-light ${skill.colorClass}`}
    >
      {skill.name}
    </span>
  );
}

function CategoryHeader({
  icon,
  iconColor,
  iconBackground,
  title,
  subtitle,
}: CategoryHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBackground}`}
      >
        <Icon icon={icon} width={20} className={iconColor} aria-hidden="true" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">{title}</h3>

        <p className="text-[10px] uppercase tracking-wider text-neutral-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function Skills() {
  const { language, t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      title:
        language === "fr" ? "Langages & Frameworks" : "Languages & Frameworks",
      subtitle: language === "fr" ? "Front & Back" : "Frontend & Backend",
      icon: "lucide:code-2",
      iconColor: "text-indigo-400",
      iconBackground: "bg-indigo-500/15",
      delay: "0.1s",
      skills: [
        {
          name: "ReactJS",
          colorClass: "text-indigo-300",
        },
        {
          name: "Next.js",
          colorClass: "text-indigo-300",
        },
        {
          name: "Vite",
          colorClass: "text-indigo-300",
        },
        {
          name: "JavaScript",
          colorClass: "text-indigo-300",
        },
        {
          name: "TypeScript",
          colorClass: "text-indigo-300",
        },
        {
          name: "Context API",
          colorClass: "text-indigo-300",
        },
        {
          name: "Redux",
          colorClass: "text-indigo-300",
        },
        {
          name: "Zustand",
          colorClass: "text-indigo-300",
        },
        {
          name: "React Query",
          colorClass: "text-indigo-300",
        },
        {
          name: "Jest",
          colorClass: "text-indigo-300",
        },
        {
          name: "Node.js",
          colorClass: "text-purple-300",
        },
        {
          name: "Express",
          colorClass: "text-purple-300",
        },
        {
          name: "Tailwind CSS",
          colorClass: "text-cyan-300",
        },
        {
          name: "Styled Components",
          colorClass: "text-cyan-300",
        },
        {
          name: "CSS / Media Queries",
          colorClass: "text-cyan-300",
        },
        {
          name: "Three.js",
          colorClass: "text-emerald-300",
        },
        {
          name: "GSAP",
          colorClass: "text-emerald-300",
        },
        {
          name: "Spline 3D",
          colorClass: "text-emerald-300",
        },
      ],
    },
    {
      title: language === "fr" ? "Bases de données" : "Databases",
      subtitle: "SQL & NoSQL",
      icon: "lucide:database",
      iconColor: "text-emerald-400",
      iconBackground: "bg-emerald-500/15",
      delay: "0.2s",
      skills: [
        {
          name: "MySQL",
          colorClass: "text-emerald-300",
        },
        {
          name: "MongoDB",
          colorClass: "text-emerald-300",
        },
        {
          name: "PostgreSQL",
          colorClass: "text-emerald-300",
        },
        {
          name: "Supabase",
          colorClass: "text-emerald-300",
        },
      ],
    },
    {
      title: language === "fr" ? "Outils" : "Tools",
      subtitle:
        language === "fr"
          ? "Développement & Collaboration"
          : "Development & Collaboration",
      icon: "lucide:wrench",
      iconColor: "text-amber-400",
      iconBackground: "bg-amber-500/15",
      delay: "0.3s",
      skills: [
        {
          name: "Git",
          colorClass: "text-amber-300",
        },
        {
          name: "GitHub",
          colorClass: "text-amber-300",
        },
        {
          name: "GitLab",
          colorClass: "text-amber-300",
        },
        {
          name: "GitHub Copilot",
          colorClass: "text-amber-300",
        },
        {
          name: "Copilot Studio",
          colorClass: "text-amber-300",
        },
      ],
    },
  ];

  const databaseCloudSkills: Skill[] = [
    {
      name: "Azure",
      colorClass: "text-cyan-300",
    },
    {
      name: "Vercel",
      colorClass: "text-cyan-300",
    },
  ];

  const methodologySkills: Skill[] = [
    {
      name: "Agile Scrum",
      colorClass: "text-rose-300",
    },
    {
      name: "JIRA",
      colorClass: "text-rose-300",
    },
    {
      name: "Kanban",
      colorClass: "text-rose-300",
    },
    {
      name: "Sprint",
      colorClass: "text-rose-300",
    },
  ];

  const strengths: Strength[] =
    language === "fr"
      ? [
          {
            label: "Analyse et estimation précises des tâches",
          },
          {
            label: "Maîtrise des outils de gestion d’état modernes",
          },
          {
            label: "Intégration d’API REST avec React Query",
          },
          {
            label: "Expertise en responsive design multi-device",
          },
          {
            label: "Travail collaboratif en environnement Agile",
          },
          {
            label: "Utilisation avancée de Git pour le versionnage",
          },
        ]
      : [
          {
            label: "Accurate task analysis and estimation",
          },
          {
            label: "Strong command of modern state management tools",
          },
          {
            label: "REST API integration with React Query",
          },
          {
            label: "Expertise in responsive multi-device design",
          },
          {
            label: "Collaborative work in Agile environments",
          },
          {
            label: "Advanced use of Git for version control",
          },
        ];

  const frameworksCategory = skillCategories[0];
  const databasesCategory = skillCategories[1];
  const toolsCategory = skillCategories[2];

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="section-sep mb-32" />

      <div className="mx-auto max-w-6xl">
        <div id="skills-title" className="reveal mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            {t.skills.eyebrow}
          </span>

          <h2 className="gradient-text-static mt-4 text-3xl font-medium tracking-tighter md:text-4xl">
            {language === "fr" ? "Stack Technique" : "Technical Stack"}

            <span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Langages et frameworks */}
          <div
            className="glass card-hover reveal rounded-2xl p-8"
            style={{
              transitionDelay: frameworksCategory.delay,
            }}
          >
            <CategoryHeader
              icon={frameworksCategory.icon}
              iconColor={frameworksCategory.iconColor}
              iconBackground={frameworksCategory.iconBackground}
              title={frameworksCategory.title}
              subtitle={frameworksCategory.subtitle}
            />

            <div className="flex flex-wrap gap-2">
              {frameworksCategory.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Bases de données et cloud */}
          <div
            className="glass card-hover reveal rounded-2xl p-8"
            style={{
              transitionDelay: databasesCategory.delay,
            }}
          >
            <CategoryHeader
              icon={databasesCategory.icon}
              iconColor={databasesCategory.iconColor}
              iconBackground={databasesCategory.iconBackground}
              title={databasesCategory.title}
              subtitle={databasesCategory.subtitle}
            />

            <div className="flex flex-wrap gap-2">
              {databasesCategory.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>

            <div className="mt-8">
              <CategoryHeader
                icon="lucide:cloud"
                iconColor="text-cyan-400"
                iconBackground="bg-cyan-500/15"
                title="Cloud"
                subtitle={
                  language === "fr"
                    ? "Hébergement & Déploiement"
                    : "Hosting & Deployment"
                }
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {databaseCloudSkills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Outils et méthodologies */}
          <div
            className="glass card-hover reveal rounded-2xl p-8"
            style={{
              transitionDelay: toolsCategory.delay,
            }}
          >
            <CategoryHeader
              icon={toolsCategory.icon}
              iconColor={toolsCategory.iconColor}
              iconBackground={toolsCategory.iconBackground}
              title={toolsCategory.title}
              subtitle={toolsCategory.subtitle}
            />

            <div className="flex flex-wrap gap-2">
              {toolsCategory.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>

            <div className="mt-8">
              <CategoryHeader
                icon="lucide:target"
                iconColor="text-rose-400"
                iconBackground="bg-rose-500/15"
                title={language === "fr" ? "Méthodologies" : "Methodologies"}
                subtitle="Workflow"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {methodologySkills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Points forts */}
          <div
            className="glass card-hover reveal rounded-2xl p-8"
            style={{
              transitionDelay: "0.4s",
            }}
          >
            <CategoryHeader
              icon="lucide:star"
              iconColor="text-indigo-400"
              iconBackground="bg-indigo-500/15"
              title={language === "fr" ? "Points forts" : "Key Strengths"}
              subtitle={
                language === "fr"
                  ? "Soft skills & Expertise"
                  : "Soft Skills & Expertise"
              }
            />

            <ul className="space-y-3">
              {strengths.map((strength) => (
                <li
                  key={strength.label}
                  className="flex items-start gap-3 text-sm font-light text-neutral-300"
                >
                  <Icon
                    icon="lucide:check-circle-2"
                    width={16}
                    className="mt-0.5 flex-shrink-0 text-indigo-400"
                    aria-hidden="true"
                  />

                  <span>{strength.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
