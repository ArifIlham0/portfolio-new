import { DiDjango, DiFirebase, DiMysql, DiPostgresql } from "react-icons/di";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiFastify, SiLaravel, SiTypescript, SiDart, SiDocker } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Data = {
    experiences: {
        icon: "/assets/badge.svg",
        title: "Work Experience",
        description: "Over the past 2+ years, I have engineered scalable mobile applications and backend services, successfully shipping multiple apps to the App Store and Google Play Store.",
        items: [
            {
                company: "PT Data Nusantara Adhikarya",
                position: "Mobile Apps Developer",
                duration: "May 2025 - Sep 2026",
                description: "Lead mobile development for public sector and ISP monitoring platforms, ensuring high availability, offline resilience, and smooth native device performance.",
                highlights: [
                    "Engineered Banggai Digital Service, a citizen services super-app published on App Store & Google Play with multi-service integration.",
                    "Built MyZetta internet service monitoring mobile app with live analytics, bill payment, and network status tracking.",
                    "Integrated real-time RESTful APIs with Fastify and optimized state management using Flutter BLoC/Provider."
                ],
                technologies: ["Flutter", "Fastify", "MySQL", "Firebase", "REST APIs", "BLoC"]
            },
            {
                company: "Maritim Muda Nusantara",
                position: "Mobile Apps Developer",
                duration: "Sep 2024 - Jan 2025",
                description: "Developed collaborative platform connecting young professionals and organizations in Indonesia's maritime sector.",
                highlights: [
                    "Built Maritim Muda Connect mobile application published on Google Play Store.",
                    "Integrated secure authentication, event registration, and real-time community networking features.",
                    "Collaborated closely with backend engineers using Laravel to ensure responsive API response times."
                ],
                technologies: ["Flutter", "Laravel", "MySQL", "Git", "REST APIs"]
            },
            {
                company: "Vocasia",
                position: "Mobile App Developer",
                duration: "Feb 2024 - June 2024",
                description: "Contributed to edtech marketplace and learning management system platform serving thousands of learners across Indonesia.",
                highlights: [
                    "Enhanced mobile user experience for online courses, video streaming, and quiz evaluation modules.",
                    "Implemented responsive UI components and reduced load times through asset caching and state optimization.",
                    "Collaborated in a cross-functional team utilizing Agile sprint cycles and CodeIgniter / Next.js backends."
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
                    { name: "Fastify", icon: <SiFastify /> },
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
                icon: <SiFastify />,
                name: "Fastify",
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