import { Icon } from "@iconify/react";

import { useTranslation } from "@/i18n";

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

interface EducationCardProps {
  education: EducationItem;
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <article
      className="glass card-hover reveal-scale rounded-2xl p-8 text-center"
      style={{
        transitionDelay: education.delay,
      }}
    >
      <div
        className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${education.iconBackground}`}
      >
        <Icon
          icon={education.icon}
          width={28}
          className={education.iconColor}
        />
      </div>

      <span
        className={`text-[10px] font-medium uppercase tracking-widest ${education.periodColor}`}
      >
        {education.period}
      </span>

      <h3 className="mt-3 whitespace-pre-line text-base font-medium leading-tight text-white">
        {education.title}
      </h3>

      <p className="mt-2 text-xs font-light text-neutral-500">
        {education.school}
      </p>
    </article>
  );
}

function Education() {
  const { language, t } = useTranslation();

  const educationItems: EducationItem[] =
    language === "fr"
      ? [
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
        ]
      : [
          {
            id: 1,
            period: "2020 — 2021",
            title: "MBA in E-Business\n& E-Commerce",
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
            title: "Master's Degree\nWeb Development",
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
            title: "Computer Engineering\nDegree",
            school: "ENISO Sousse, Tunisia",
            icon: "lucide:cpu",
            iconColor: "text-cyan-400",
            iconBackground: "bg-cyan-500/10",
            periodColor: "text-cyan-400",
            delay: "0.4s",
          },
        ];

  return (
    <section id="education" className="relative px-6 py-32">
      <div className="section-sep mb-32" />

      <div className="mx-auto max-w-6xl">
        <div id="education-title" className="reveal mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            {t.education.eyebrow}
          </span>

          <h2 className="gradient-text-static mt-4 text-3xl font-medium tracking-tighter md:text-4xl">
            {language === "fr" ? "Parcours Académique" : "Academic Background"}

            <span className="text-indigo-400">.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {educationItems.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
