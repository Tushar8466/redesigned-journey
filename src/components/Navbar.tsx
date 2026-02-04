"use client";

import React, { useState } from "react";
import {
    Navbar as NavbarWrapper,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton,
} from "./ui/resizable-navbar";
import { NoiseBackground } from "@/components/ui/noise-background";

const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavbarWrapper className="top-0">
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="relative z-20 flex items-center space-x-2">
                    <NavbarButton href="#contact" variant="dark">
                        <NoiseBackground
                            gradientColors={["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"]}
                            noiseIntensity={0.2}
                            speed={0.1}
                            backdropBlur={false}
                            animating={true}
                        >
                            Get in Touch
                        </NoiseBackground>
                    </NavbarButton>
                </div>
            </NavBody>

            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-left text-neutral-600 dark:text-neutral-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <NavbarButton href="#contact" variant="dark" className="w-full">
                        <NoiseBackground
                            gradientColors={["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"]}
                            noiseIntensity={0.2}
                            speed={0.1}
                            className="w-full"
                            backdropBlur={false}
                            animating={true}
                        >
                            Get in Touch
                        </NoiseBackground>
                    </NavbarButton>
                </MobileNavMenu>
            </MobileNav>
        </NavbarWrapper>
    );
}
