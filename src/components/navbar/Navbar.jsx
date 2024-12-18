"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import navLinks from "@/data/navLinks";

const Navbar = () => {
  //for mobile navbar
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#32CACD]">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        <Link href={"/"} className="font-sans text-xl font-medium text-white">
          The Diabetes Predictor
        </Link>
        <div className="items-center hidden gap-4 lg:flex">
          <ul className="flex gap-4">
            {navLinks.map((link, index) => (
              <li className="text-white" key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          {open ? (
            <Image
              className="cursor-pointer"
              src="/menuClose.png"
              alt=""
              width={30}
              height={30}
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <Image
              className="cursor-pointer"
              src="/menu.png"
              alt=""
              width={30}
              height={30}
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>

        {open && (
          <div className="absolute z-50 right-0 flex flex-col items-center justify-center w-[90%] sm:w-[40%] md:w-1/2 h-screen bg-[#32CACD] top-16">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li className="text-white" key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    onClick={toggleMobileMenu}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
