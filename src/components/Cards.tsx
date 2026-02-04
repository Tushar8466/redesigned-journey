import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardsProps {
  imageSrc: string;
  title: string;
  description: string;
  githubUrl: string;
  previewUrl: string;
}

function Cards({
  imageSrc,
  title,
  description,
  githubUrl,
  previewUrl,
}: CardsProps) {
  return (
    <BackgroundGradient className="max-w-xs rounded-3xl">
      <div className="overflow-hidden rounded-3xl bg-black/80 border border-white/5">
        <img
          src={imageSrc}
          alt={title}
          height={500}
          width={400}
          className="h-52 w-full object-cover p-4"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
}

export default Cards;
