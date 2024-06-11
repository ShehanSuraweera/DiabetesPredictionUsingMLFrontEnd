"use client";

import styles from "./footer.module.css";
import React from "react";
import FooterLink from "./footerLink/FooterLink";
import Image from "next/image";
import footerImage from "../../images/footer/footer.svg";

const footerLinks = [
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

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul className={styles.links}>
          {footerLinks.map((link, index) => (
            <li className={styles.linkItem} key={index}>
              <FooterLink
                href={link.path}
                title={link.title}
                className={styles.link}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.image}>
        <Image
          src={footerImage}
          alt=""
          className={styles.footerImg}
          width={630}
          height={630}
        />
      </div>
    </div>
  );
};

export default Footer;
