"use client";

import React from "react";
import { motion } from "motion/react";
import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandGithub,
    IconBrandFramer,
    IconBrandVscode,
    IconBrandJavascript,
    IconBrandMongodb,
    IconServer,
} from "@tabler/icons-react";
import { LampContainer } from "./ui/lamp";

const techStacks = [
    {
        name: "React",
        icon: <IconBrandReact className="w-10 h-10" />,
        description: "UI Library",
    },
    {
        name: "Next.js",
        icon: <IconBrandNextjs className="w-10 h-10" />,
        description: "React Framework",
    },
    {
        name: "Tailwind CSS",
        icon: <IconBrandTailwind className="w-10 h-10" />,
        description: "Utility-first CSS",
    },
    {
        name: "TypeScript",
        icon: <IconBrandTypescript className="w-10 h-10" />,
        description: "Typed JavaScript",
    },
    {
        name: "Node.js",
        icon: <IconBrandNodejs className="w-10 h-10" />,
        description: "Runtime Environment",
    },
    {
        name: "GitHub",
        icon: <IconBrandGithub className="w-10 h-10" />,
        description: "Version Control",
    },
    {
        name: "JavaScript",
        icon: <IconBrandJavascript className="w-10 h-10" />,
        description: "Typed JavaScript",
    },
    {
        name: "VS Code",
        icon: <IconBrandVscode className="w-10 h-10" />,
        description: "Code Editor",
    },
];

export default function TechStacks() {
    return (
        <LampContainer id="about" className="min-h-screen bg-black w-full">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Tech Stacks
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-neutral-300 max-w-lg mx-auto text-sm md:text-base text-center"
            >
                Technologies and tools I use to build robust and scalable web applications.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto mt-12">
                {techStacks.map((tech, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            duration: 0.2,
                            delay: idx * 0.05 + 0.5,
                        }}
                        className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                    >
                        <div className="text-neutral-200 group-hover:text-white transition-colors mb-3">
                            {tech.icon}
                        </div>
                        <h3 className="text-white font-medium text-lg">{tech.name}</h3>
                        <p className="text-neutral-400 text-xs mt-1 text-center">{tech.description}</p>
                    </motion.div>
                ))}
            </div>
        </LampContainer>
    );
}
