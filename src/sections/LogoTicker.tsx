import React from "react";
import Image from "next/image";
import hacallis from "@/assets/callis3.png";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
            <Image src={hacallis} alt="Henry Arthur Callis" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};