import type { Translations } from "@/i18n/types";

export const en: Translations = {
    common: {
        language: "Language",
        french: "French",
        english: "English",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        scrollToTop: "Back to top",
        discoverMore: "Discover more",
    },

    navigation: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
    },

    hero: {
        role: "FullStack React & Node.js Developer",
        firstName: "Foued",
        lastName: "Saidane",
        description:
            "I build modern, high-performance web applications designed to deliver smooth user experiences, from frontend interfaces to backend architecture.",
        contactButton: "Contact me",
        journeyButton: "Discover my journey",
        availability: "Open to new opportunities",
    },

    about: {
        eyebrow: "About",
        title: "I turn ideas into useful digital products.",
        description: [
            "As a FullStack developer specializing in React, TypeScript and Node.js, I build modern interfaces and robust web applications with a strong focus on user experience.",
            "I enjoy working across the entire product lifecycle: understanding business needs, designing interfaces, developing features, optimizing performance and deploying to production.",
        ],
        stats: {
            experience: {
                value: 7,
                suffix: "+",
                label: "years of experience",
            },
            projects: {
                value: 50,
                suffix: "+",
                label: "projects delivered",
            },
            performance: {
                value: 35,
                suffix: "%",
                label: "performance improvement",
            },
        },
    },

    skills: {
        eyebrow: "Expertise",
        title: "A modern, product-oriented tech stack.",
        description:
            "Technologies selected to build maintainable, high-performance and scalable applications.",
        groups: [
            {
                title: "Frontend",
                description:
                    "Building modern, responsive and accessible user interfaces.",
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
                    "Developing reliable APIs and services that connect digital products.",
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
                title: "Tools & quality",
                description:
                    "Clean workflows for building, testing and shipping efficiently.",
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
        eyebrow: "Experience",
        title: "Product-focused experiences built around real user needs.",
        description:
            "Experience developed through business applications, SaaS platforms and interfaces designed to deliver measurable value.",
        items: [
            {
                id: "asendit",
                company: "Asendit",
                role: "Frontend React Developer",
                location: "Chambéry, France",
                period: "2021 — 2025",
                description:
                    "Contributed to the development and evolution of Yeetch, a complete HR management platform designed to simplify everyday workflows for HR teams and employees.",
                achievements: [
                    "Built employee onboarding and offboarding modules.",
                    "Developed leave management, time tracking, expense management and employee directory features.",
                    "Improved frontend performance and overall user experience.",
                    "Contributed to technical decisions and frontend architecture.",
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
                role: "FullStack Developer & 3D Designer",
                location: "France",
                period: "2019 — Present",
                description:
                    "Supporting clients across web development, SaaS, e-commerce and 3D visualization projects, from the initial idea through to final delivery.",
                achievements: [
                    "Built custom web applications and corporate websites.",
                    "Created photorealistic 3D visuals for tenders and commercial presentations.",
                    "Worked directly with company founders and business leaders.",
                    "Turned sketches and business requirements into impactful visual assets.",
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
        eyebrow: "Education",
        title: "A background combining engineering and business.",
        description:
            "An academic path combining technical expertise, digital product knowledge and an understanding of business challenges.",
        items: [
            {
                id: "hetic",
                school: "HETIC",
                degree: "MBA in E-Business & E-Commerce",
                location: "Paris, France",
                period: "2018 — 2019",
                description:
                    "Focused on digital strategy, customer acquisition, product development and web project management.",
            },
            {
                id: "eniso",
                school: "ENISO",
                degree: "Engineering Degree",
                location: "Sousse, Tunisia",
                period: "2012 — 2017",
                description:
                    "Engineering education providing a strong technical, analytical and methodological foundation.",
            },
        ],
    },

    projects: {
        eyebrow: "Selected work",
        title: "Featured projects",
        description:
            "Products designed to solve real problems, from initial concept to production.",
        items: [
            {
                id: "colocpilote",
                category: "Personal SaaS",
                title: "ColocPilote",
                headline:
                    "A modern platform designed to simplify rental property management.",
                description:
                    "A FullStack application enabling landlords to manage properties, rooms, tenants, documents and rent payments from a single interface.",
                highlight: "A SaaS product designed end to end",
                technologies: [
                    "React",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Supabase",
                ],
                year: "2026",
                buttonLabel: "Explore the project",
            },
            {
                id: "yeetch",
                category: "HR platform",
                title: "Yeetch",
                headline:
                    "Digitizing and simplifying everyday HR experiences.",
                description:
                    "Contributed to the development of a complete HR platform including onboarding, leave management, time tracking, expense reports and employee directories.",
                highlight: "A business application used every day",
                technologies: [
                    "React",
                    "TypeScript",
                    "React Query",
                    "Styled Components",
                    "REST API",
                ],
                year: "2025",
                buttonLabel: "Explore the project",
            },
            {
                id: "agent-ai",
                category: "Artificial intelligence",
                title: "AI Appointment Scheduling Agent",
                headline:
                    "A conversational assistant connected to Google Calendar.",
                description:
                    "An AI agent capable of understanding requests, checking availability and automatically scheduling appointments in Google Calendar.",
                highlight: "Real automation of a business workflow",
                technologies: [
                    "Node.js",
                    "TypeScript",
                    "OpenAI",
                    "Mistral AI",
                    "Google Calendar API",
                ],
                year: "2026",
                buttonLabel: "Explore the project",
            },
            {
                id: "my-cocoon",
                category: "Digital experience",
                title: "My Cocoon",
                headline:
                    "Turning a traditional restaurant menu into a multilingual digital experience.",
                description:
                    "Complete menu redesign followed by the development of a responsive multilingual web version accessible through a QR code.",
                highlight: "Design, development and production deployment",
                technologies: [
                    "React",
                    "JavaScript",
                    "i18n",
                    "Responsive Design",
                    "Vercel",
                ],
                year: "2026",
                buttonLabel: "Explore the project",
            },
            {
                id: "lumina",
                category: "Product & growth",
                title: "Lumina FR",
                headline:
                    "Building a digital brand around a wireless LED lamp.",
                description:
                    "Designed the website, advertising campaigns, creative assets and conversion journey for a product targeting restaurants, hotels and consumers.",
                highlight: "A project combining product, design and marketing",
                technologies: [
                    "React",
                    "Meta Ads",
                    "Google Analytics",
                    "GTM",
                    "Conversion Tracking",
                ],
                year: "2026",
                buttonLabel: "Explore the project",
            },
        ],
    },

    contact: {
        eyebrow: "Contact",
        title: "Let’s build something useful together.",
        description:
            "Have a project, an opportunity or simply want to connect? I would be happy to discuss it with you.",
        emailLabel: "Send me an email",
        whatsappLabel: "Contact me on WhatsApp",
        linkedinLabel: "View my LinkedIn profile",
        availability: "Available for new collaborations",
    },

    footer: {
        title: "Have a project in mind?",
        description:
            "Let’s turn your idea into a modern, clear and high-performance digital experience.",
        contactButton: "Let’s talk",
        copyright: "All rights reserved.",
    },
};