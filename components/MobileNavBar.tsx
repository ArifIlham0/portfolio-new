"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { Route } from "@/constants/route";

const MobileNavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet
            key={pathname}
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <SheetTrigger className="flex justify-center items-center mx-3">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-10 text-center text-2xl">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <h1 className="text-4xl font-semibold">
                            Arif Ilham<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {Route.links.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.path}
                                className={`
                                    ${item.path === pathname && "text-accent border-b-2 border-accent"}
                                    text-xl capitalize hover:text-accent transition-all
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavBar