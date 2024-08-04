"use client";
import React from "react";
import Image from "next/image";
import hacallis from "@/assets/callis3.png";
import chchapman from "@/assets/chapman.png";
import ekjones from "@/assets/jones.png";
import gbkelly from "@/assets/kelly.png";
import namurray from "@/assets/murray.png";
import rhogle from "@/assets/ogle.png";
import vwtandy from "@/assets/tandy.png";
import { motion } from "framer-motion";

const LogoMaker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={chchapman} alt="Charles Henry Chapman" className="logo-ticker-image" />
            <Image src={ekjones} alt="Eugene Kinkle Jones" className="logo-ticker-image" />
            <Image src={gbkelly} alt="George Biddle Kelly" className="logo-ticker-image" />
            <Image src={namurray} alt="Nathaniel Allison Murray" className="logo-ticker-image" />
            <Image src={rhogle} alt="Robert Harold Ogle" className="logo-ticker-image" />
            <Image src={vwtandy} alt="Vertner Woodson Tandy" className="logo-ticker-image" />

            {/* Second set of logos for animation */}
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={chchapman} alt="Charles Henry Chapman" className="logo-ticker-image" />
            <Image src={ekjones} alt="Eugene Kinkle Jones" className="logo-ticker-image" />
            <Image src={gbkelly} alt="George Biddle Kelly" className="logo-ticker-image" />
            <Image src={namurray} alt="Nathaniel Allison Murray" className="logo-ticker-image" />
            <Image src={rhogle} alt="Robert Harold Ogle" className="logo-ticker-image" />
            <Image src={vwtandy} alt="Vertner Woodson Tandy" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoMaker