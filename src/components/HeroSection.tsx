"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";


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

  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0],
  );

  useEffect(() => {
    const checkIntersection = () => {
      if (!cardsRef.current) return;

      const cardsRect = cardsRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if cards are in the top portion of viewport where Gemini effect is visible
      // Gemini effect is sticky at top, so we check if cards are in top 80% of viewport
      const isInGeminiArea =
        cardsRect.top < viewportHeight * 0.8 && cardsRect.bottom > 0;

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
      id="home"
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
      {/* <LampContainer>
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
      </LampContainer> */}
    </div>
  );
}
