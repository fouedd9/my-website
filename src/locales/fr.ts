import type { Translations } from "@/i18n/types";

export const fr: Translations = {
    common: {
        language: "Langue",
        french: "Français",
        english: "Anglais",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        scrollToTop: "Revenir en haut",
        discoverMore: "Découvrir davantage",
    },

    navigation: {
        about: "À propos",
        skills: "Compétences",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact",
    },

    hero: {
        role: "Développeur FullStack React & Node.js",
        firstName: "Foued",
        lastName: "Saidane",
        description:
            "Je conçois des applications web modernes, performantes et pensées pour offrir une expérience utilisateur fluide, de l’interface jusqu’à l’architecture backend.",
        contactButton: "Me contacter",
        journeyButton: "Découvrir mon parcours",
        availability: "Disponible pour de nouvelles opportunités",
    },

    about: {
        eyebrow: "À propos",
        title: "Je transforme des idées en produits digitaux utiles.",
        description: [
            "Développeur FullStack spécialisé en React, TypeScript et Node.js, je conçois des interfaces modernes et des applications web robustes, avec une attention particulière portée à l’expérience utilisateur.",
            "J’aime intervenir sur l’ensemble du cycle produit : compréhension du besoin, conception de l’interface, développement, optimisation des performances et mise en production.",
        ],
        stats: {
            experience: {
                value: 7,
                suffix: "+",
                label: "années d’expérience",
            },
            projects: {
                value: 50,
                suffix: "+",
                label: "projets réalisés",
            },
            performance: {
                value: 35,
                suffix: "%",
                label: "de gain de performance",
            },
        },
    },

    skills: {
        eyebrow: "Expertise",
        title: "Une stack moderne orientée produit.",
        description:
            "Des technologies choisies pour construire des applications maintenables, performantes et évolutives.",
        groups: [
            {
                title: "Frontend",
                description:
                    "Conception d’interfaces modernes, responsives et accessibles.",
                skills: [
                    { name: "React" },
                    { name: "Next.js" },
                    { name: "TypeScript" },
                    { name: "JavaScript" },
                    { name: "Tailwind CSS" },
                    { name: "Styled Components" },
                    { name: "Material UI" },
                    { name: "Storybook" },
                ],
            },
            {
                title: "Backend",
                description:
                    "Création d’API et de services fiables pour connecter les produits.",
                skills: [
                    { name: "Node.js" },
                    { name: "Express" },
                    { name: "REST API" },
                    { name: "PostgreSQL" },
                    { name: "Supabase" },
                    { name: "Authentication" },
                ],
            },
            {
                title: "Outils & qualité",
                description:
                    "Des workflows propres pour développer, tester et livrer efficacement.",
                skills: [
                    { name: "Git" },
                    { name: "GitHub" },
                    { name: "Docker" },
                    { name: "Vite" },
                    { name: "React Query" },
                    { name: "React Hook Form" },
                    { name: "Figma" },
                    { name: "CI/CD" },
                ],
            },
        ],
    },

    experience: {
        eyebrow: "Parcours",
        title: "Des expériences centrées sur le produit et l’utilisateur.",
        description:
            "Une expérience construite autour du développement d’applications métiers, de plateformes SaaS et d’interfaces à forte valeur ajoutée.",
        items: [
            {
                id: "asendit",
                company: "Asendit",
                role: "Développeur Frontend React",
                location: "Chambéry, France",
                period: "2021 — 2025",
                description:
                    "Développement et évolution de Yeetch, une plateforme SIRH complète destinée à simplifier la gestion quotidienne des équipes RH et des collaborateurs.",
                achievements: [
                    "Conception de modules d’onboarding et d’offboarding.",
                    "Développement des fonctionnalités de congés, temps, notes de frais et annuaire.",
                    "Optimisation des performances et amélioration de l’expérience utilisateur.",
                    "Participation aux choix techniques et à l’architecture frontend.",
                ],
                technologies: [
                    "React",
                    "TypeScript",
                    "React Query",
                    "React Hook Form",
                    "Styled Components",
                ],
            },
            {
                id: "freelance",
                company: "Freelance",
                role: "Développeur FullStack & Designer 3D",
                location: "France",
                period: "2019 — Aujourd’hui",
                description:
                    "Accompagnement de clients sur des projets web, SaaS, e-commerce et visualisation 3D, depuis l’idée initiale jusqu’à la livraison.",
                achievements: [
                    "Création d’applications web et de sites vitrines sur mesure.",
                    "Conception de rendus 3D photoréalistes pour des appels d’offres.",
                    "Collaboration directe avec des dirigeants et responsables commerciaux.",
                    "Transformation de croquis et besoins métiers en supports visuels impactants.",
                ],
                technologies: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "PostgreSQL",
                    "Blender",
                    "Figma",
                ],
            },
        ],
    },

    education: {
        eyebrow: "Formation",
        title: "Une double culture technique et business.",
        description:
            "Un parcours qui combine ingénierie, développement digital et compréhension des enjeux produit.",
        items: [
            {
                id: "hetic",
                school: "HETIC",
                degree: "MBA E-Business & E-Commerce",
                location: "Paris, France",
                period: "2018 — 2019",
                description:
                    "Formation orientée stratégie digitale, acquisition, produit et gestion de projets web.",
            },
            {
                id: "eniso",
                school: "ENISO",
                degree: "Diplôme d’ingénieur",
                location: "Sousse, Tunisie",
                period: "2012 — 2017",
                description:
                    "Formation d’ingénieur avec une forte base technique, analytique et méthodologique.",
            },
        ],
    },

    projects: {
        eyebrow: "Réalisations",
        title: "Projets sélectionnés",
        description:
            "Des produits conçus pour résoudre de vrais problèmes, de la conception à la mise en production.",
        items: [
            {
                id: "colocpilote",
                category: "SaaS personnel",
                title: "ColocPilote",
                headline:
                    "Une plateforme moderne pour simplifier la gestion locative.",
                description:
                    "Application FullStack permettant aux propriétaires de gérer leurs logements, chambres, locataires, documents et loyers depuis une interface unique.",
                highlight: "Produit SaaS conçu de bout en bout",
                technologies: [
                    "React",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Supabase",
                ],
                year: "2026",
                buttonLabel: "Explorer le projet",
            },
            {
                id: "yeetch",
                category: "Plateforme SIRH",
                title: "Yeetch",
                headline:
                    "Digitaliser et simplifier l’expérience RH au quotidien.",
                description:
                    "Participation au développement d’une plateforme SIRH complète intégrant onboarding, congés, suivi du temps, notes de frais et annuaire d’entreprise.",
                highlight: "Application métier utilisée au quotidien",
                technologies: [
                    "React",
                    "TypeScript",
                    "React Query",
                    "Styled Components",
                    "REST API",
                ],
                year: "2025",
                buttonLabel: "Explorer le projet",
            },
            {
                id: "agent-ai",
                category: "Intelligence artificielle",
                title: "Agent IA de prise de rendez-vous",
                headline:
                    "Un assistant conversationnel connecté à Google Calendar.",
                description:
                    "Agent capable de comprendre une demande, vérifier les disponibilités et planifier automatiquement un rendez-vous dans le calendrier.",
                highlight: "Automatisation réelle d’un workflow métier",
                technologies: [
                    "Node.js",
                    "TypeScript",
                    "OpenAI",
                    "Mistral AI",
                    "Google Calendar API",
                ],
                year: "2026",
                buttonLabel: "Explorer le projet",
            },
            {
                id: "my-cocoon",
                category: "Expérience digitale",
                title: "My Cocoon",
                headline:
                    "Transformer un menu traditionnel en expérience digitale multilingue.",
                description:
                    "Refonte complète d’un menu de restaurant, création d’une version web responsive, multilingue et accessible via QR code.",
                highlight: "Design, développement et mise en production",
                technologies: [
                    "React",
                    "JavaScript",
                    "i18n",
                    "Responsive Design",
                    "Vercel",
                ],
                year: "2026",
                buttonLabel: "Explorer le projet",
            },
            {
                id: "lumina",
                category: "Produit & acquisition",
                title: "Lumina FR",
                headline:
                    "Créer une marque digitale autour d’une lampe LED sans fil.",
                description:
                    "Conception du site, des campagnes publicitaires, des visuels et du parcours de conversion pour un produit destiné aux restaurants, hôtels et particuliers.",
                highlight: "Projet mêlant produit, design et marketing",
                technologies: [
                    "React",
                    "Meta Ads",
                    "Google Analytics",
                    "GTM",
                    "Conversion Tracking",
                ],
                year: "2026",
                buttonLabel: "Explorer le projet",
            },
        ],
    },

    contact: {
        eyebrow: "Contact",
        title: "Construisons quelque chose d’utile ensemble.",
        description:
            "Vous avez un projet, une opportunité ou simplement envie d’échanger ? Je serais ravi d’en discuter.",
        emailLabel: "M’envoyer un email",
        whatsappLabel: "Me contacter sur WhatsApp",
        linkedinLabel: "Voir mon profil LinkedIn",
        availability: "Disponible pour de nouvelles collaborations",
    },

    footer: {
        title: "Vous avez un projet en tête ?",
        description:
            "Transformons votre idée en une expérience digitale moderne, claire et performante.",
        contactButton: "Discutons-en",
        copyright: "Tous droits réservés.",
    },
};