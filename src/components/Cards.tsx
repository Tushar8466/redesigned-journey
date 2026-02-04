import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const projectInfo = {
  title: "E-Commerce Platform",
  description:
    "A full-stack e-commerce application with secure payment integration, user authentication, and real-time inventory management. Features include shopping cart, order tracking, and admin dashboard.",
  techStacks: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Stripe",
  ],
};

function Cards() {
  return (
    // <div className="flex flex-col gap-4 p-4">
    //   <BackgroundGradient className="rounded-3xl">
    //     <img
    //       src="/assets/project1.png"
    //       height={600}
    //       width={400}
    //       className="rounded-3xl"
    //     />
    //   </BackgroundGradient>
    <BackgroundGradient >
      <img
        src="/assets/project1.png"
        alt=""
        height={600}
        width={400}
      />
    </BackgroundGradient>

  );
}

export default Cards;
