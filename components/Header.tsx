import Link from "next/link"
import NavBar from "./NavBar"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Arif Ilham<span className="text-accent">.</span>
                </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
                <NavBar />
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
            </div>

            <div className="xl:hidden">Mobile NavBar</div>
        </div>
    </header>
  )
}

export default Header