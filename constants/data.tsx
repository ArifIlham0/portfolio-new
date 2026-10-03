import { DiDjango, DiFirebase, DiMysql, DiPostgresql } from "react-icons/di";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiLaravel, SiTypescript, SiDart, SiDocker } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Data = {
    experiences: {
        icon: "/assets/badge.svg",
        title: "Work Experience",
        description: "Over the past 2+ years, I have engineered scalable mobile applications and backend services, successfully shipping multiple apps to the App Store and Google Play Store.",
        items: [
            {
                company: "Caliana Indonesia",
                position: "Mobile Apps Developer",
                duration: "May 2025 - Sep 2026",
                description: "Architected and delivered production-grade cross-platform applications using, successfully operationalizing AI-driven workflows into client-facing features.",
                highlights: [
                    "Engineered robust, real-time data streaming architectures by implementing secure RESTful APIs and encrypted WebSockets (Socket.IO), guaranteeing end-to-end data privacy for latency-sensitive AI interactions.",
                    "Spearheaded release engineering and deployment lifecycles, managing seamless submissions across Google Play Store and Apple App Store while ensuring strict platform guideline compliance and high crash-free rates.",
                    "Optimized client-side application performance and memory footprints, bridging native bridges and Flutter modules to ensure smooth 60 FPS UI rendering during heavy background computations."
                ],
                technologies: ["Flutter", "Firebase", "REST APIs"]
            },
            {
                company: "Maritim Muda Nusantara",
                position: "Mobile Apps Developer",
                duration: "Sep 2024 - Jan 2025",
                description: 'Led the end-to-end development of "Maritim Muda Connect" from scratch, designing a scalable, modular architecture in Flutter powered by reactive GetX state management.',
                highlights: [
                    "Designed and integrated mission-critical API layers, collaborating closely with the backend team to establish fault-tolerant data pipelines and robust caching strategies for real-time synchronization.",
                    "Engineered intuitive, responsive UI/UX systems, translating product requirements into high-fidelity design implementations optimized for accessibility and device responsiveness.",
                    "Championed code quality and engineering standards, enforcing clean architecture separation (presentation, domain, and data layers) to facilitate modularity and future scalability."
                ],
                technologies: ["Flutter", "Laravel", "MySQL", "REST APIs"]
            },
            {
                company: "Vocasia",
                position: "Mobile App Developer",
                duration: "Feb 2024 - June 2024",
                description: "Spearheaded core mobile feature implementations for an enterprise Learning Management System (LMS) using Flutter and Provider, improving overall app responsiveness and user retention.",
                highlights: [
                    "Streamlined complex backend integration pipelines, orchestrating multi-endpoint RESTful API consumption, pagination mechanisms, and persistent local storage for offline-first learning experiences.",
                    "Refactored UI component libraries and navigation structures, resulting in enhanced user journeys, lower rendering latency, and a consistent multi-platform design system.",
                    "Collaborated actively in Scrum ceremonies and peer code reviews, identifying performance bottlenecks and minimizing regression bugs prior to staging deployments."
                ],
                technologies: ["Flutter", "Next.js", "CodeIgniter 4", "MySQL", "Firebase"]
            },
        ]
    },
    about: {
        title: "About Me",
        headline: "Mobile AI Engineer focused on craftsmanship, performance, and user impact.",
        description: "I am a Mobile AI Engineer with 2+ years of production experience building high-performance iOS and Android applications with Flutter and React Native. With a solid backend foundation across Fastify, Django, and Laravel, I bridge the gap between complex server architectures and intuitive mobile interfaces. I have successfully published and maintained apps on both the Apple App Store and Google Play Store, and I actively leverage modern AI APIs to build smarter user experiences.",
        info: [
            {
                field_name: "Name",
                field_value: "Arif Ilham",
            },
            {
                field_name: "Role",
                field_value: "Mobile AI Engineer",
            },
            {
                field_name: "Experience",
                field_value: "2+ Years",
            },
            {
                field_name: "Email",
                field_value: "marifilham999@gmail.com",
            },
            {
                field_name: "Phone / WA",
                field_value: "(+62) 878-7568-6342",
            },
            {
                field_name: "Location",
                field_value: "Jakarta, Indonesia (Open to Remote / On-site)",
            },
            {
                field_name: "Languages",
                field_value: "Indonesian (Native), English (Professional)",
            },
        ]
    },
    educations: {
        icon: "/assets/cap.svg",
        title: "Education",
        description: "My academic background in Informatics provided me with deep foundations in data structures, algorithms, software engineering principles, and mobile system design.",
        items: [
            {
                institution: "Gunadarma University",
                degree: "Bachelor of Informatics (S.Kom)",
                duration: "2021 - 2025",
            },
        ]
    },
    skills: {
        title: "Technical Skills",
        description: "A comprehensive toolkit built through real-world production development across mobile, backend, database, and cloud systems.",
        categories: [
            {
                name: "Mobile Engineering",
                skills: [
                    { name: "Flutter", icon: <FaFlutter /> },
                    { name: "React Native", icon: <TbBrandReactNative /> },
                    { name: "Dart", icon: <SiDart /> },
                    { name: "TypeScript", icon: <SiTypescript /> },
                ]
            },
            {
                name: "Backend & APIs",
                skills: [
                    { name: "Django", icon: <DiDjango /> },
                    { name: "Laravel", icon: <SiLaravel /> },
                    { name: "Express.js", icon: <SiExpress /> },
                ]
            },
            {
                name: "Database & Cloud",
                skills: [
                    { name: "PostgreSQL", icon: <DiPostgresql /> },
                    { name: "MySQL", icon: <DiMysql /> },
                    { name: "Firebase", icon: <DiFirebase /> },
                    { name: "Docker", icon: <SiDocker /> },
                ]
            },
            {
                name: "Web & AI",
                skills: [
                    { name: "Next.js", icon: <RiNextjsFill /> },
                    { name: "REST APIs", icon: <SiTypescript /> },
                    { name: "AI Integration", icon: <FaFlutter /> },
                ]
            }
        ],
        skillLists: [
            {
                icon: <FaFlutter />,
                name: "Flutter",
            },
            {
                icon: <TbBrandReactNative />,
                name: "React Native",
            },
            {
                icon: <SiDart />,
                name: "Dart",
            },
            {
                icon: <SiTypescript />,
                name: "TypeScript",
            },
            {
                icon: <DiDjango />,
                name: "Django",
            },
            {
                icon: <SiLaravel />,
                name: "Laravel",
            },
            {
                icon: <DiPostgresql />,
                name: "PostgreSQL",
            },
            {
                icon: <DiMysql />,
                name: "MySQL",
            },
            {
                icon: <RiNextjsFill />,
                name: "Next.js",
            },
            {
                icon: <SiExpress />,
                name: "Express.js",
            },
            {
                icon: <DiFirebase />,
                name: "Firebase",
            },
        ]
    },
    info: [
        {
            icon: <FaPhoneAlt />,
            title: "Phone / WhatsApp",
            description: "(+62) 878-7568-6342",
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            description: "marifilham999@gmail.com",
        },
    ],
    services: [
        {
            num: "01",
            href: "",
            title: "Mobile App Development",
            description: "High-performance iOS and Android applications using Flutter and React Native with clean architecture and store deployment."
        },
        {
            num: "02",
            href: "",
            title: "Fullstack & API Engineering",
            description: "Scalable backend services and RESTful APIs with Fastify, Django, Laravel, and modern database solutions."
        },
    ],
}

export { Data };