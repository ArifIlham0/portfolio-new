"use client";

import { useEffect, useRef, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import ProjectSliderButton from "@/components/projects/ProjectSliderButton";
import "swiper/css";
import ProjectLink from "@/components/projects/ProjectLink";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { ProjectLists } from "@/constants/project";

const Projects = () => {
  const [project, setProject] = useState(ProjectLists.data[0]);
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;
    setProject(ProjectLists.data[currentIndex]);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (swiperRef.current) {
        swiperRef.current.autoplay.stop();
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.autoplay.start();
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
  
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="py-3"></div>
      <div className="container mx-auto xl:my-0 -my-25">
        <div className="flex flex-col xl:flex-row xl:gap-7.5">
          <div className="w-full xl:w-[50%] xl:h-115 flex flex-col xl:justify-between order-2 xl:order-0 xl:px-0 px-4">
            <div className="flex flex-col gap-7.5 h-[50%] -my-30 xl:my-0">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.website && (
                  <ProjectLink
                    href={project.website}
                    icon={<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />}
                    tooltip="Live"
                  />
                )}
                {project.play_store && (
                  <ProjectLink
                    href={project.play_store}
                    icon={<BiLogoPlayStore className="text-white text-3xl group-hover:text-accent" />}
                    tooltip="Play Store"
                  />
                )}
                {project.app_store && (
                  <ProjectLink
                    href={project.app_store}
                    icon={<FaAppStore className="text-white text-3xl group-hover:text-accent" />}
                    tooltip="App Store"
                  />
                )}
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    icon={<BsGithub className="text-white text-3xl group-hover:text-accent" />}
                    tooltip="GitHub Repository"
                  />
                )}
              </div>
              <div className="py-2"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Autoplay]}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="xl:h-130 mb-12"
            >
              {ProjectLists.data.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full"
                  >
                    <div className="h-115 relative group flex justify-center items-center">
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          fill
                          src={item.image}
                          alt="Project Thumbnail"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <ProjectSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects