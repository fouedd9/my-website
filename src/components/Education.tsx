import { Icon } from "@iconify/react";

interface EducationItem {
  id: number;
  period: string;
  title: string;
  school: string;
  icon: string;
  iconColor: string;
  iconBackground: string;
  periodColor: string;
  delay: string;
}

const educationItems: EducationItem[] = [
  {
    id: 1,
    period: "2020 — 2021",
    title: "MBA E-Business\n& E-Commerce",
    school: "HETIC Paris, France",
    icon: "lucide:graduation-cap",
    iconColor: "text-indigo-400",
    iconBackground: "bg-indigo-500/10",
    periodColor: "text-indigo-400",
    delay: "0.1s",
  },
  {
    id: 2,
    period: "2017 — 2019",
    title: "Mastère Développement\nWeb",
    school: "Digital School of Paris, France",
    icon: "lucide:book-open",
    iconColor: "text-purple-400",
    iconBackground: "bg-purple-500/10",
    periodColor: "text-purple-400",
    delay: "0.25s",
  },
  {
    id: 3,
    period: "2015",
    title: "Diplôme Ingénieur\nInformatique",
    school: "ENISO Sousse, Tunisie",
    icon: "lucide:cpu",
    iconColor: "text-cyan-400",
    iconBackground: "bg-cyan-500/10",
    periodColor: "text-cyan-400",
    delay: "0.4s",
  },
];

function EducationCard({ education }: { education: EducationItem }) {
  return (
    <article
      className="glass rounded-2xl p-8 card-hover reveal-scale text-center"
      style={{
        transitionDelay: education.delay,
      }}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${education.iconBackground} flex items-center justify-center mx-auto mb-5`}
      >
        <Icon
          icon={education.icon}
          width={28}
          className={education.iconColor}
        />
      </div>

      <span
        className={`text-[10px] uppercase tracking-widest ${education.periodColor} font-medium`}
      >
        {education.period}
      </span>

      <h3 className="mt-3 text-base font-medium text-white leading-tight whitespace-pre-line">
        {education.title}
      </h3>

      <p className="mt-2 text-xs text-neutral-500 font-light">
        {education.school}
      </p>
    </article>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="section-sep mb-32" />

      <div className="max-w-6xl mx-auto">
        <div id="education-title" className="text-center mb-16 reveal">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Formation
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tighter gradient-text-static">
            Parcours Académique
            <span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {educationItems.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
