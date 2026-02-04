"use client";

import React from "react";
import Cards from "./Cards";

export default function ProjectsSection() {
    return (
        <div
            id="projects"
            className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-5xl mx-auto px-6 py-20"
        >
            <Cards
                imageSrc="/assets/project1.png"
                title="StyleRush"
                description="Modern fashion e-commerce platform with smooth UX, filters, and secure checkout built with Next.js."
                githubUrl="https://github.com/Tushar8466/stylerush"
                previewUrl="https://stylerush.vercel.app/"
            />
            <Cards
                imageSrc="/assets/project2.png"
                title="Dashboard Analytics"
                description="Interactive admin dashboard with real-time charts, dark mode, and responsive layout."
                githubUrl="https://github.com/Tushar8466/music"
                previewUrl="https://music-seven-neon.vercel.app/"
            />
            <Cards
                imageSrc="/assets/project3.png"
                title="Portfolio Site"
                description="Personal portfolio showcasing projects, skills, and animated sections built with modern UI."
                githubUrl="https://github.com/Tushar8466/pokemonExplorer"
                previewUrl="https://pokemon-explorer-theta-three.vercel.app/"
            />
            <Cards
                imageSrc="/assets/project4.png"
                title="Landing Page"
                description="High-converting marketing landing page with hero animations and responsive design."
                githubUrl="https://github.com/Tushar8466/Architecture-Info"
                previewUrl="/404-preview"
            />
            <Cards
                imageSrc="/assets/project5.png"
                title="SaaS Platform"
                description="UI for a SaaS product with pricing sections, onboarding flow, and clean dashboard."
                githubUrl="https://github.com/Tushar8466/Nasa"
                previewUrl="https://nasa-ivory-ten.vercel.app/"
            />
            <Cards
                imageSrc="/assets/project6.png"
                title="Blog Platform"
                description="Blog interface with featured posts, tags, and smooth reading experience."
                githubUrl="https://github.com/Tushar8466/sundown"
                previewUrl="https://sundown-pied-delta.vercel.app/"
            />
        </div>
    );
}
