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

export const projects: Project[] = [
    {
        id: "colocpilote",
        category: "PERSONAL SAAS",
        title: "ColocPilote",
        headline:
            "Une gestion moderne des logements, chambres, locataires et loyers.",
        description:
            "J’ai conçu et développé un SaaS permettant aux propriétaires de centraliser la gestion de leurs logements, chambres, locataires et loyers dans une seule plateforme simple et moderne.",
        highlight: "Projet SaaS personnel",
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
        title: "Yeetch SIRH",
        headline:
            "Une plateforme RH complète pour digitaliser les processus internes.",
        description:
            "J’ai participé au développement d’une solution SIRH couvrant l’onboarding, les congés, le suivi du temps, les notes de frais, l’annuaire et les workflows de validation.",
        highlight: "Application utilisée en entreprise par des milliers d’employés",
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
        title: "Agent IA de prise de rendez-vous",
        headline:
            "Un assistant conversationnel connecté à Google Calendar.",
        description:
            "J’ai développé un agent IA capable de comprendre une demande en langage naturel, vérifier les disponibilités et créer automatiquement un rendez-vous dans Google Calendar.",
        highlight: "OpenAI, Mistral et Google Calendar",
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
            "Une expérience digitale élégante pour un restaurant-café.",
        description:
            "J’ai conçu une version web moderne du menu My Cocoon, optimisée pour mobile, accessible par QR code et pensée pour améliorer l’expérience des clients sur place.",
        highlight: "Refonte UI/UX et développement web",
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
        highlight: "Produit réellement commercialisé",
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