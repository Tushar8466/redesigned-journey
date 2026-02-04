import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import TechStacks from "@/components/TechStacks";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <HeroSection />
      <div className="relative z-10 bg-black">
        <TechStacks />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
