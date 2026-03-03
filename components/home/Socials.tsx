import { CustomLink } from "@/constants/custom_link"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

type Props = {
    containerStyles?: string,
    iconStyles?: string,
}

const socials = [
    { icon: <FaGithub />, path: CustomLink.github},
    { icon: <FaLinkedin />, path: CustomLink.linkedin},
]

const Socials = (props: Props) => {
  return (
    <div className={props.containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link
                    key={index}
                    href={item.path}
                    target="_blank"
                    className={props.iconStyles}
                >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials