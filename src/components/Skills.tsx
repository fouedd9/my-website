import { Icon } from "@iconify/react";

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

const skillCategories: SkillCategory[] = [
  {
    title: "Langages & Frameworks",
    subtitle: "Front & Back",
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
    title: "Bases de données",
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
    title: "Outils",
    subtitle: "Dev & Collaboration",
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

const strengths: Strength[] = [
  {
    label: "Analyse et estimation précises des tâches",
  },
  {
    label: "Maîtrise des outils de gestion d'état modernes",
  },
  {
    label: "Intégration API REST avec React Query",
  },
  {
    label: "Expert en responsive design multi-device",
  },
  {
    label: "Travail collaboratif en environnement Agile",
  },
  {
    label: "Utilisation avancée de Git pour le versionning",
  },
];

interface SkillPillProps {
  skill: Skill;
}

function SkillPill({ skill }: SkillPillProps) {
  return (
    <span
      className={`skill-pill px-3 py-1.5 rounded-lg text-xs font-light ${skill.colorClass}`}
    >
      {skill.name}
    </span>
  );
}

interface CategoryHeaderProps {
  icon: string;
  iconColor: string;
  iconBackground: string;
  title: string;
  subtitle: string;
}

function CategoryHeader({
  icon,
  iconColor,
  iconBackground,
  title,
  subtitle,
}: CategoryHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className={`w-10 h-10 rounded-xl ${iconBackground} flex items-center justify-center`}
      >
        <Icon icon={icon} width={20} className={iconColor} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">{title}</h3>

        <p className="text-[10px] text-neutral-500 uppercase tracking-wider">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function Skills() {
  const frameworksCategory = skillCategories[0];
  const databasesCategory = skillCategories[1];
  const toolsCategory = skillCategories[2];

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="section-sep mb-32" />

      <div className="max-w-6xl mx-auto">
        <div id="skills-title" className="text-center mb-16 reveal">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Compétences
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tighter gradient-text-static">
            Stack Technique
            <span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="glass rounded-2xl p-8 card-hover reveal"
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

          <div
            className="glass rounded-2xl p-8 card-hover reveal"
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
                subtitle="Hébergement & Déploiement"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {databaseCloudSkills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div
            className="glass rounded-2xl p-8 card-hover reveal"
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
                title="Méthodologies"
                subtitle="Workflow"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {methodologySkills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div
            className="glass rounded-2xl p-8 card-hover reveal"
            style={{
              transitionDelay: "0.4s",
            }}
          >
            <CategoryHeader
              icon="lucide:star"
              iconColor="text-indigo-400"
              iconBackground="bg-indigo-500/15"
              title="Points forts"
              subtitle="Soft skills & Expertise"
            />

            <ul className="space-y-3">
              {strengths.map((strength) => (
                <li
                  key={strength.label}
                  className="flex items-start gap-3 text-sm text-neutral-300 font-light"
                >
                  <Icon
                    icon="lucide:check-circle-2"
                    width={16}
                    className="text-indigo-400 flex-shrink-0 mt-0.5"
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
