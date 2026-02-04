import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <HeroSection />
      <TechStacks />
    </div>
  );
}
