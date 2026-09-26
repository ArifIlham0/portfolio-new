import { CustomLink } from "@/constants/custom_link";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  { icon: <FaGithub className="w-4 h-4" />, path: CustomLink.github, name: "GitHub" },
  { icon: <FaLinkedin className="w-4 h-4" />, path: CustomLink.linkedin, name: "LinkedIn" },
  { icon: <FaWhatsapp className="w-4 h-4" />, path: "https://wa.me/6287875686342", name: "WhatsApp" },
  { icon: <HiOutlineMail className="w-4 h-4" />, path: "mailto:marifilham999@gmail.com", name: "Email" },
];

const Socials = (props: Props) => {
  return (
    <div className={props.containerStyles || "flex items-center gap-3"}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={item.name}
          className={
            props.iconStyles ||
            "w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
          }
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;