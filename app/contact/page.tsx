
"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Data } from "@/constants/data";
import { useState } from "react";
import Image from "next/image";
import { CustomLink } from "@/constants/custom_link";

const Contact = () => {
  type LogoKey = "fastwork" | "sribu" | "fiverr";
  const [selected, setSelected] = useState<LogoKey>("fastwork");
  const logoMap: Record<LogoKey, { src: string; alt: string; link: string }> = {
    fastwork: {
      src: "/assets/fastwork.png",
      alt: "Fastwork Logo",
      link: CustomLink.fastwork,
    },
    sribu: {
      src: "/assets/sribu.png",
      alt: "Sribu Logo",
      link: CustomLink.sribu
    },
    fiverr: {
      src: "/assets/fiverr.jpg",
      alt: "Fiverr Logo",
      link: CustomLink.fiverr
    }
  };
  return (
    <section className="py-15 px-4 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:grow gap-7.5">
          <div className="xl:w-[54%] order-2 xl:order-0">
            <form className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl">
              <h3 className="text-4xl text-accent">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/60">
                Hit me up to talk about mobile app or web project ideas, Programming. You can find me through any of the platforms listed here.
              </p>
              <Select value={selected} onValueChange={v => setSelected(v as LogoKey)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Platform</SelectLabel>
                    <SelectItem value="fastwork">Fastwork</SelectItem>
                    <SelectItem value="sribu">Sribu</SelectItem>
                    <SelectItem value="fiverr">Fiverr</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex justify-center mt-6">
                <a
                  href={logoMap[selected].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                  title={`Visit my profile at ${selected.charAt(0).toUpperCase() + selected.slice(1)}`}
                >
                  <Image
                    src={logoMap[selected].src}
                    alt={logoMap[selected].alt}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain rounded-lg border border-gray-700 transition-transform duration-200 hover:scale-110 hover:shadow-lg cursor-pointer"
                  />
                  <span className="block mt-2 text-center text-white text-base font-semibold">
                    {"Open"} {selected.charAt(0).toUpperCase() + selected.slice(1)}
                  </span>
                  <span className="block text-center text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Click to open profile
                  </span>
                </a>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {Data.info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-13 h-13 xl:w-18 xl:h-18 bg-[#27272C] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-xl">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact