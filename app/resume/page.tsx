"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Data } from "@/constants/data";
import TabResumeContent from "@/components/resume/TabResumeContent";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="xl:py-5"></div>
        <Tabs
          defaultValue="experiences"
          className="flex flex-col xl:flex-row gap-15"
        >
          <TabsList className="flex flex-col w-full max-w-90 xl:max-w-95 mx-auto xl:mx-0">
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="educations">Educations</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experiences" className="w-full">
              <TabResumeContent
                title={Data.experiences.title}
                description={Data.experiences.description}
                items={Data.experiences.items}
                type="experiences"
              />
            </TabsContent>
            <TabsContent value="educations" className="w-full">
              <TabResumeContent
                title={Data.educations.title}
                description={Data.educations.description}
                items={Data.educations.items}
                type="educations"
              />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-7.5 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {Data.skills.title}
                  </h3>
                  <p className="max-w-180 text-white/60 mx-4 xl:mx-0 text-justify">
                    {Data.skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7.5 xl:mx-0 mx-4">
                  {Data.skills.skillLists.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-37.5 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">
                                {item.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {item.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-7.5">
                <h3 className="text-4xl font-bold">
                  {Data.about.title}
                </h3>
                <p className="max-w-180 text-white/60 mx-4 xl:mx-0 text-justify">
                  {Data.about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-180 mx-auto xl:mx-0">
                  {Data.about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.field_name}
                        </span>
                        <span className="text-xl">
                          {item.field_value}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <div className="xl:py-5"></div>
      </div>
    </div>
  )
}

export default Resume