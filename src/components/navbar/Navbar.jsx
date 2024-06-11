"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import NavLink from "./navLink/NavLink";
import styles from "./navbar.module.css";
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
    title: "How it Work",
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
    <nav>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          The Diabets Project
        </Link>
        <div className={styles.menu}>
          <ul className={styles.links}>
            {navLinks.map((link, index) => (
              <li className={styles.linkItem} key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className={styles.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {open ? (
          <Image
            className={styles.menuButton}
            src="/menuClose.png"
            alt=""
            width={30}
            height={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        ) : (
          <Image
            className={styles.menuButton}
            src="/menu.png"
            alt=""
            width={30}
            height={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        )}

        {open && (
          <div className={styles.mobilelinks}>
            {navLinks.map((link, index) => (
              <li className={styles.link} key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
