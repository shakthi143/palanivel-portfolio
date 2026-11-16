import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkProcess from "@/components/sections/WorkProcess";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <Projects />
      <Services />
      <WorkProcess />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </>
  );
}
