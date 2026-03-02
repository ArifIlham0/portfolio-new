import Photo from "@/components/home/Photo"
import Socials from "@/components/home/Socials"
import Stats from "@/components/home/Stats"
import { Button } from "@/components/ui/button"
import { FiExternalLink } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span>Mobile Developer (AI-Forward)</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Arif Ilham</span>
            </h1>
            <p className="max-w-125 mb-9 text-white/80">
              I&apos;m very passionate about leveraging the latest AI frameworks to create smarter, more engaging applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                size="lg"
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <span>Resume</span>
                <FiExternalLink className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="flex justify-center items-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home