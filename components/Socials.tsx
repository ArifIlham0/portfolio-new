import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

type Props = {
    containerStyles?: string,
    iconStyles?: string,
}

const socials = [
    { icon: <FaGithub />, path: ""},
    { icon: <FaLinkedin />, path: ""},
]

const Socials = (props: Props) => {
  return (
    <div className={props.containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link
                    key={index}
                    href={item.path}
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