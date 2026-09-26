"use client";

import { Route } from "@/constants/route";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex items-center gap-1 lg:gap-2">
      {Route.links.map((item, index) => {
        const sectionId = item.path.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <a
            key={index}
            href={item.path}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? "text-white bg-zinc-800/80 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }
            `}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;