"use client";
import React, { forwardRef, useState } from "react";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { motion, AnimatePresence } from "motion/react";

interface CardsProps {
  title?: string;
  description?: string;
  href?: string;
  imageSrc?: string;
  details?: {
    technologies?: string[];
    features?: string[];
    about?: string;
  };
}

const Cards = forwardRef<HTMLDivElement, CardsProps>(
  ({ 
    title = "My Project", 
    description, 
    href = "https://github.com", 
    imageSrc = "/assets/project1.png",
    details 
  }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div ref={ref} className="flex gap-6">
        <PinContainer title={title} href={href}>
          <div 
            className="w-64 rounded-xl bg-black text-white relative overflow-hidden cursor-pointer transition-all duration-300"
            style={{ height: isExpanded ? 'auto' : '160px' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded && (
              <div className="h-40 relative">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={256}
                  height={160}
                  className="rounded-xl object-cover absolute inset-0 opacity-50"
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  {description && (
                    <p className="text-sm text-gray-300">{description}</p>
                  )}
                </div>
              </div>
            )}
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {description && (
                    <p className="text-sm text-gray-300 mb-4">{description}</p>
                  )}
                  
                  {details?.about && (
                    <p className="text-sm text-gray-400 mb-4">{details.about}</p>
                  )}
                  
                  {details?.technologies && details.technologies.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {details.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {details?.features && details.features.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Features:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                        {details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PinContainer>
      </div>
    );
  }
);

Cards.displayName = "Cards";

export default Cards;
