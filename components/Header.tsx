import Link from "next/link"
import NavBar from "./NavBar"
import { Button } from "./ui/button"
import MobileNavBar from "./MobileNavBar"
import { CustomLink } from "@/constants/custom_link"

const Header = () => {
  return (
    <header>
        <div className="py-5"></div>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold pl-4 xl:pl-0">
                    Arif Ilham<span className="text-accent">.</span>
                </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
                <NavBar />
                <Link
                    target="_blank"
                    href={CustomLink.fastwork}
                >
                    <Button>Hire Me</Button>
                </Link>
            </div>

            <div className="xl:hidden">
                <MobileNavBar />
            </div>
        </div>
    </header>
  )
}

export default Header