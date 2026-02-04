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

const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contactsection" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavbarWrapper className="top-0">
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="relative z-20 flex items-center space-x-2">
                    <NavbarButton href="#contact" variant="dark" className="p-1 bg-linear-to-r bg-blue-500">
                        <div className="p-2 rounded-l-lg">
                            Get in touch
                        </div>
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
                        Get in touch
                    </NavbarButton>
                </MobileNavMenu>
            </MobileNav>
        </NavbarWrapper>
    );
}
