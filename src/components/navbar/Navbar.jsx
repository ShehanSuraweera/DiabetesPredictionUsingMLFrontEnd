"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "How it Works",
    path: "/how-it-work",
  },
  {
    title: "Demo",
    path: "/demo",
  },
  {
    title: "Results",
    path: "/results",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  //for mobile navbar
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#32CACD]">
      <div className="container mx-auto flex items-center justify-between px-4 h-20">
        <Link href={"/"} className="text-white text-lg font-semibold">
          The Diabetes Project
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            {navLinks.map((link, index) => (
              <li className="text-white" key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
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
          <div className="absolute top-16 right-0 w-full h-screen bg-blue-600 flex flex-col items-center justify-center">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li className="text-white" key={index}>
                  <NavLink href={link.path} title={link.title} />
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
