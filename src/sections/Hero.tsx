"use client";
import foundersImage from "@/assets/a-founders.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#A2762B,#E3B53B_100%)] overflow-x-clip">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-[450px]">
            <h1
              className="text-5xl lg:text-7xl font-bold tracking-tighter text-black bg-clip-text mt-6"
            >
              Alpha Phi Alpha Fraternity Inc.
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              First of All, Servants of All, We Shall Transcend All.
            </p>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Rho Zeta Lambda Chapter - The 661st House.
            </p>
          </div>
          <div className="mt-20 lg:mt-0 lg:h-[648px] lg:w-[648px] lg:flex-1 relative">
            <motion.img
              src={foundersImage.src}
              alt="Founders Image"
              width={650}
              height={650}
              className="lg:absolute lg:h-full lg:w-auto lg:max-w-[680px] md:px-2"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
};
