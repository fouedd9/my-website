export type Language = "fr" | "en";

export interface NavigationTranslations {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
}

export interface HeroTranslations {
    role: string;
    firstName: string;
    lastName: string;
    description: string;
    contactButton: string;
    journeyButton: string;
    availability: string;
}

export interface StatItemTranslation {
    value: number;
    suffix?: string;
    label: string;
}

export interface AboutTranslations {
    eyebrow: string;
    title: string;
    description: string[];
    stats: {
        experience: StatItemTranslation;
        projects: StatItemTranslation;
        performance: StatItemTranslation;
    };
}

export interface SkillItemTranslation {
    name: string;
    description?: string;
}

export interface SkillGroupTranslation {
    title: string;
    description: string;
    skills: SkillItemTranslation[];
}

export interface SkillsTranslations {
    eyebrow: string;
    title: string;
    description: string;
    groups: SkillGroupTranslation[];
}

export interface ExperienceItemTranslation {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export interface ExperienceTranslations {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItemTranslation[];
}

export interface EducationItemTranslation {
    id: string;
    school: string;
    degree: string;
    location: string;
    period: string;
    description: string;
}

export interface EducationTranslations {
    eyebrow: string;
    title: string;
    description: string;
    items: EducationItemTranslation[];
}

export interface ProjectTranslation {
    id: string;
    category: string;
    title: string;
    headline: string;
    description: string;
    highlight: string;
    technologies: string[];
    year: string;
    buttonLabel: string;
}

export interface ProjectsTranslations {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectTranslation[];
}

export interface ContactTranslations {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    whatsappLabel: string;
    linkedinLabel: string;
    availability: string;
}

export interface FooterTranslations {
    title: string;
    description: string;
    contactButton: string;
    copyright: string;
}

export interface CommonTranslations {
    language: string;
    french: string;
    english: string;
    openMenu: string;
    closeMenu: string;
    scrollToTop: string;
    discoverMore: string;
}

export interface Translations {
    common: CommonTranslations;
    navigation: NavigationTranslations;
    hero: HeroTranslations;
    about: AboutTranslations;
    skills: SkillsTranslations;
    experience: ExperienceTranslations;
    education: EducationTranslations;
    projects: ProjectsTranslations;
    contact: ContactTranslations;
    footer: FooterTranslations;
}