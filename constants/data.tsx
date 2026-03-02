import { DiDjango, DiFirebase, DiMysql, DiPostgresql } from "react-icons/di";
import { FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Data = {
    experiences: {
        icon: "/assets/badge.svg",
        title: "Experiences",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        items: [
            {
                company: "PT Data Nusantara Adhikarya",
                position: "Mobile Apps Developer",
                duration: "May 2025 - Present",
            },
            {
                company: "Maritim Muda Nusantara",
                position: "Mobile Apps Developer",
                duration: "Sep 2024 - Jan 2025",
            },
            {
                company: "Vocasia",
                position: "Mobile App Developer",
                duration: "Feb 2024 - June 2024",
            },
        ]
    },
    about: {
        title: "About Me",
        description: "I am a Mobile Developer (AI-Forward) with 2 years of experience specializing in building high-performance iOS and Android applications using React Native and Flutter. Now focusing on enhancing user experiences by integrating AI-driven features into mobile developments. With a solid backend foundation in Django and PostgreSQL, I bridge the gap between complex AI models, user-friendly mobile interfaces. Very passionate about leveraging the latest AI frameworks to create smarter, more engaging applications.",
        info: [
            {
                field_name: "Name",
                field_value: "Arif Ilham",
            },
            {
                field_name: "Languages",
                field_value: "Indonesian, English",
            },
            {
                field_name: "Phone",
                field_value: "(+62) 878-7568-6342",
            },
            {
                field_name: "Experience",
                field_value: "2+ Years",
            },
            {
                field_name: "Email",
                field_value: "marifilham999@gmail.com",
            },
            
        ]
    },
    educations: {
        icon: "/assets/cap.svg",
        title: "Educations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        items: [
            {
                institution: "Gunadarma University",
                degree: "Bachelor of Informatics",
                duration: "2021 - 2025",
            },
        ]
    },
    skills: {
        title: "Skills",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skillLists: [
            {
                icon: <TbBrandReactNative />,
                name: "React Native",
            },
            {
                icon: <FaFlutter />,
                name: "Flutter",
            },
            {
                icon: <DiDjango />,
                name: "Django",
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
    projects: [
        {
            num: "01",
            category: "Mobile App",
            title: "Banggai Digital Service",
            description: "One App for Multiple Solutions and Citizen Services in Banggai Regency",
            image: "/assets/banggai-digital-service.png",
            github: "https://github.com/ArifIlham0/banggai-digital-service-showcase",
            app_store: "https://apps.apple.com/id/app/banggai-digital-service/id6754150070",
            play_store: "https://play.google.com/store/apps/details?id=id.caliana.digitalServiceBanggai",
            website: null,
            stack: [
                {
                    name: "Flutter",
                },
                {
                    name: "Fastify",
                },
                {
                    name: "MySQL",
                },
                {
                    name: "Firebase",
                },
            ],
        },
        {
            num: "02",
            category: "Mobile App",
            title: "MyZetta",
            description: "application dedicated to making it easier for you to monitor your Zetta internet service more efficiently.",
            image: "/assets/myzetta.png",
            github: "https://github.com/ArifIlham0/myzetta-showcase",
            app_store: "https://apps.apple.com/id/app/myzetta/id6740265889",
            play_store: "https://play.google.com/store/apps/details?id=id.caliana.zetta",
            website: "https://zetta.net.id/",
            stack: [
                {
                    name: "Flutter",
                },
                {
                    name: "Fastify",
                },
                {
                    name: "MySQL",
                },
                {
                    name: "Firebase",
                },
            ],
        },
        {
            num: "03",
            category: "Mobile App & Web",
            title: "Spirit - Layanan Rumah Tangga",
            description: "Spirit is your one-stop solution for a wide range of home services. From rejuvenating massages to thorough home cleaning, we connect you with experienced and vetted partner.",
            image: "/assets/spirit.png",
            github: "https://github.com/ArifIlham0/spirit-showcase",
            app_store: "https://apps.apple.com/id/app/spirit-layanan-rumah-tangga/id6743387922",
            play_store: "https://play.google.com/store/apps/details?id=com.spirit.app",
            website: "https://spirithomeservice.com",
            stack: [
                {
                    name: "Flutter",
                },
                {
                    name: "Laravel",
                },
                {
                    name: "MySQL",
                },
                {
                    name: "Firebase",
                },
            ],
        },
    ]
}

export { Data };