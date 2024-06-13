"use client";

import React from "react";
import FooterLink from "./footerLink/FooterLink";
import Image from "next/image";
import footerImage from "../../images/footer/footer.svg";
import navLinks from "@/data/navLinks";

const Footer = () => {
  return (
    <div className="relative bg-[#327DCD] pt-10 sm:pb-5 md:pb-20 mt-20 flex flex-col items-center">
      <div className="flex items-center justify-center w-full mb-1 sm:pl-5 md:pl-20 lg:pl-60 2xl:pl-0 sm:justify-start 2xl:justify-center">
        <ul className="grid grid-cols-2 gap-4 text-white">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:underline">
              <FooterLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-80 h-64 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] sm:hidden block">
        <Image
          src={footerImage}
          alt="Footer Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute bottom-0 right-5 lg:right-28 w-80 h-80  sm:h-64 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[300px] xl:h-[400px] xl:w-[500px] hidden sm:block">
        <Image
          src={footerImage}
          alt="Footer Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Footer;
