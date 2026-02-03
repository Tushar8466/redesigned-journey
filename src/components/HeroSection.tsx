"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={containerRef}
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
    >
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        className="sticky top-0 h-screen w-full"
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