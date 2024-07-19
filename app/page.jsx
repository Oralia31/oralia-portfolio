import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";

const Home = () => {
  return (
    <div className="h-full mt-32 xl:mt-24">
      <section id="home" className="container mx-auto h-full pt-28 xl:py-24">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-x-4">
          {/* text */}
          <div className="text-center md:text-left order-1 xl:order-none">
            <span className="text-xl">Front-end Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              
              <span className="text-accent">Oralia Rivera</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I bring creative ideas to life by building user-friendly and
              visually appealing digital experiences.
            </p>
            {/* button and social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                variant="outline"
                size="lg"
                className="btn-download border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary uppercase flex justify-center items-center gap-2 rounded-full"
                href="/assets/pdf/CV_Front-End_Developer-Oralia_Rivera_Vicente.pdf"
                download="CV-Front-end_Developer_Oralia_Rivera_Vicente.pdf"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="w-[45%] h-[60vh] order-2 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </section>

      <section id="resume" className="container mx-auto h-full pt-28">
        <ResumeSection />
      </section>

      <section id="skills" className="container mx-auto h-full pt-28 pb-10">
        <SkillsSection />
      </section>

      <section id="portfolio" className="container mx-auto h-full pt-28">
        <PortfolioSection />
      </section>

      <section id="contacto" className="container mx-auto h-full pt-28">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;