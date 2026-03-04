import { DiDjango, DiFirebase, DiMysql, DiPostgresql } from "react-icons/di";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Data = {
    experiences: {
        icon: "/assets/badge.svg",
        title: "Experiences",
        description: "Over the past 2 years, I have contributed to various fast-paced environments on digital agencies, focusing on delivering scalable and user-centric mobile solutions.",
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
        description: "My academic journey in Informatics has provided me with a strong logical foundation, enabling me to tackle complex software engineering challenges and adapt to the evolving tech landscape.",
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
        description: "Equipped with a diverse technical stack, I build robust mobile interfaces and efficient backend systems, ensuring seamless data flow and high application performance.",
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
    info: [
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
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
            description: "I specialize in creating high-quality mobile applications for both iOS and Android platforms, with AI integrations if needed."
        },
        {
            num: "02",
            href: "",
            title: "Web Development",
            description: "I create responsive and dynamic websites using modern web technologies, with AI integrations if needed."
        },
    ],
}

export { Data };