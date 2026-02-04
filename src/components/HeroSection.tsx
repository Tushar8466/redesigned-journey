"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";
import Cards from "./Cards";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [shouldBlur, setShouldBlur] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const pathLengths = [
    pathLengthFirst,
    pathLengthSecond,
    pathLengthThird,
    pathLengthFourth,
    pathLengthFifth,
  ];

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    const checkIntersection = () => {
      if (!cardsRef.current) return;

      const cardsRect = cardsRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if cards are in the top portion of viewport where Gemini effect is visible
      // Gemini effect is sticky at top, so we check if cards are in top 80% of viewport
      const isInGeminiArea = cardsRect.top < viewportHeight * 0.8 && cardsRect.bottom > 0;

      setShouldBlur(isInGeminiArea);
    };

    // Check on scroll and initial load
    const handleScroll = () => {
      requestAnimationFrame(checkIntersection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkIntersection();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
    >
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        className={`sticky top-0 h-screen w-full transition-all duration-500 ${shouldBlur ? "blur-md" : "blur-0"
          }`}
      />

      <div
        style={{ opacity: scrollIndicatorOpacity.get() }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 text-white/60 text-sm font-light tracking-widest pointer-events-none animate-pulse"
      >
        SCROLL DOWN
      </div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build products <br /> the right way
        </motion.h1>
      </LampContainer>
      <div
        ref={cardsRef}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-350 flex justify-center items-center"
      >
        <Cards
          imageSrc="/assets/project1.png"
          title="StyleRush"
          description="Modern fashion e-commerce platform with smooth UX, filters, and secure checkout built with Next.js."
          githubUrl="https://github.com/Tushar8466/stylerush"
          previewUrl="https://stylerush.vercel.app"
        />
        <Cards
          imageSrc="/assets/project2.png"
          title="Dashboard Analytics"
          description="Interactive admin dashboard with real-time charts, dark mode, and responsive layout."
          githubUrl="https://github.com"
          previewUrl="https://example.com"
        />
        <Cards
          imageSrc="/assets/project3.png"
          title="Portfolio Site"
          description="Personal portfolio showcasing projects, skills, and animated sections built with modern UI."
          githubUrl="https://github.com"
          previewUrl="https://example.com"
        />
        <Cards
          imageSrc="/assets/project4.png"
          title="Landing Page"
          description="High-converting marketing landing page with hero animations and responsive design."
          githubUrl="https://github.com"
          previewUrl="https://example.com"
        />
        <Cards
          imageSrc="/assets/project5.png"
          title="SaaS Platform"
          description="UI for a SaaS product with pricing sections, onboarding flow, and clean dashboard."
          githubUrl="https://github.com"
          previewUrl="https://example.com"
        />
        <Cards
          imageSrc="/assets/project6.png"
          title="Blog Platform"
          description="Blog interface with featured posts, tags, and smooth reading experience."
          githubUrl="https://github.com"
          previewUrl="https://example.com"
        />
      </div>


    </div>

  );
}