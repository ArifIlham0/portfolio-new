"use client";

import { Route } from "@/constants/route";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
            {Route.links.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={`${item.path == pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default NavBar