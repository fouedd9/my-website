export type ProjectAccent =
    | "violet"
    | "blue"
    | "green"
    | "orange"
    | "amber";

export interface Project {
    id: string;
    category: string;
    title: string;
    headline: string;
    description: string;
    highlight: string;
    technologies: string[];
    image: string;
    url: string;
    year: string;
    accent: ProjectAccent;
}

export const projectsFR: Project[] = [
    {
        id: "colocpilote",
        category: "SAAS PERSONNEL",
        title: "ColocPilote",
        headline:
            "Une gestion moderne des logements, chambres, locataires et loyers.",
        description:
            "J’ai conçu et développé un SaaS permettant aux propriétaires de centraliser la gestion de leurs logements, chambres, locataires et loyers dans une plateforme simple et moderne.",
        highlight: "Projet SaaS personnel conçu de bout en bout",
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Supabase",
        ],
        image: "/projects/colocpilote.png",
        url: "https://coloc-pilote.vercel.app/logements",
        year: "2026",
        accent: "violet",
    },
    {
        id: "yeetch",
        category: "SAAS ENTREPRISE",
        title: "Yeetch SIRH",
        headline:
            "Une plateforme RH complète pour digitaliser les processus internes.",
        description:
            "J’ai participé au développement d’une solution SIRH couvrant l’onboarding, les congés, le suivi du temps, les notes de frais, l’annuaire et les workflows de validation.",
        highlight:
            "Application métier utilisée quotidiennement en entreprise",
        technologies: [
            "React",
            "TypeScript",
            "React Query",
            "React Hook Form",
            "Node.js",
            "REST API",
        ],
        image: "/projects/yeetch.png",
        url: "https://yeetch.co/fr",
        year: "2025",
        accent: "blue",
    },
    {
        id: "ai-appointment-agent",
        category: "AUTOMATISATION IA",
        title: "Agent IA de prise de rendez-vous",
        headline:
            "Un assistant conversationnel connecté à Google Calendar.",
        description:
            "J’ai développé un agent IA capable de comprendre une demande en langage naturel, de vérifier les disponibilités et de créer automatiquement un rendez-vous dans Google Calendar.",
        highlight:
            "Automatisation complète d’un véritable workflow métier",
        technologies: [
            "TypeScript",
            "Node.js",
            "OpenAI",
            "Mistral AI",
            "Google Calendar API",
            "OAuth 2.0",
        ],
        image: "/projects/ai-agent.png",
        url: "#",
        year: "2026",
        accent: "green",
    },
    {
        id: "my-cocoon",
        category: "EXPÉRIENCE WEB",
        title: "My Cocoon",
        headline:
            "Une expérience digitale élégante pour un restaurant-café.",
        description:
            "J’ai conçu une version web moderne du menu My Cocoon, optimisée pour mobile, accessible par QR code et pensée pour améliorer l’expérience des clients sur place.",
        highlight:
            "Refonte UI/UX, multilingue et développement web",
        technologies: [
            "React",
            "JavaScript",
            "Responsive Design",
            "UI/UX",
            "SEO",
            "QR Code",
        ],
        image: "/projects/my-cocoon.png",
        url: "https://my-cocoon.vercel.app/",
        year: "2026",
        accent: "orange",
    },
    {
        id: "lumina-fr",
        category: "E-COMMERCE",
        title: "Lumina FR",
        headline:
            "Une marque digitale autour d’une lampe LED sans fil.",
        description:
            "J’ai développé l’identité digitale, la landing page et les campagnes d’acquisition de Lumina FR afin de présenter le produit, générer des prospects et soutenir sa commercialisation.",
        highlight:
            "Un véritable produit commercialisé sur le marché",
        technologies: [
            "React",
            "Landing Page",
            "Meta Ads",
            "Google Analytics",
            "Google Tag Manager",
            "WhatsApp",
        ],
        image: "/projects/lumina-fr.png",
        url: "https://lumina-fr.vercel.app/",
        year: "2026",
        accent: "amber",
    },
];

export const projectsEN: Project[] = [
    {
        id: "colocpilote",
        category: "PERSONAL SAAS",
        title: "ColocPilote",
        headline:
            "A modern platform for managing properties, rooms, tenants and rent.",
        description:
            "I designed and developed a SaaS platform enabling landlords to centralize the management of their properties, rooms, tenants and rent payments within one simple and modern interface.",
        highlight:
            "A personal SaaS product designed from end to end",
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Supabase",
        ],
        image: "/projects/colocpilote.png",
        url: "https://coloc-pilote.vercel.app/logements",
        year: "2026",
        accent: "violet",
    },
    {
        id: "yeetch",
        category: "ENTERPRISE SAAS",
        title: "Yeetch HRIS",
        headline:
            "A complete HR platform designed to digitize internal processes.",
        description:
            "I contributed to the development of an HRIS platform covering onboarding, leave management, time tracking, expense reports, employee directories and approval workflows.",
        highlight:
            "A business application used daily within companies",
        technologies: [
            "React",
            "TypeScript",
            "React Query",
            "React Hook Form",
            "Node.js",
            "REST API",
        ],
        image: "/projects/yeetch.png",
        url: "https://yeetch.co/fr",
        year: "2025",
        accent: "blue",
    },
    {
        id: "ai-appointment-agent",
        category: "AI AUTOMATION",
        title: "AI Appointment Scheduling Agent",
        headline:
            "A conversational assistant connected to Google Calendar.",
        description:
            "I developed an AI agent capable of understanding natural-language requests, checking availability and automatically creating appointments in Google Calendar.",
        highlight:
            "End-to-end automation of a real business workflow",
        technologies: [
            "TypeScript",
            "Node.js",
            "OpenAI",
            "Mistral AI",
            "Google Calendar API",
            "OAuth 2.0",
        ],
        image: "/projects/ai-agent.png",
        url: "#",
        year: "2026",
        accent: "green",
    },
    {
        id: "my-cocoon",
        category: "WEB EXPERIENCE",
        title: "My Cocoon",
        headline:
            "An elegant digital experience for a restaurant and café.",
        description:
            "I designed a modern web version of the My Cocoon menu, optimized for mobile devices, accessible through a QR code and created to improve the on-site customer experience.",
        highlight:
            "UI/UX redesign, multilingual support and web development",
        technologies: [
            "React",
            "JavaScript",
            "Responsive Design",
            "UI/UX",
            "SEO",
            "QR Code",
        ],
        image: "/projects/my-cocoon.png",
        url: "https://my-cocoon.vercel.app/",
        year: "2026",
        accent: "orange",
    },
    {
        id: "lumina-fr",
        category: "E-COMMERCE",
        title: "Lumina FR",
        headline:
            "A digital brand built around a wireless LED lamp.",
        description:
            "I developed the digital identity, landing page and acquisition campaigns for Lumina FR to showcase the product, generate leads and support its commercial launch.",
        highlight:
            "A real product successfully launched on the market",
        technologies: [
            "React",
            "Landing Page",
            "Meta Ads",
            "Google Analytics",
            "Google Tag Manager",
            "WhatsApp",
        ],
        image: "/projects/lumina-fr.png",
        url: "https://lumina-fr.vercel.app/",
        year: "2026",
        accent: "amber",
    },
];

/**
 * Export temporaire pour conserver la compatibilité avec
 * les composants qui importent encore `projects`.
 *
 * Il pourra être supprimé après la mise à jour de ProjectsSection.tsx.
 */
export const projects = projectsFR;