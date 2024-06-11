"use client";

import Link from "next/link";
import styles from "./footerLinks.module.css";
import { usePathname } from "next/navigation";

const FooterLink = ({ href, title }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`${styles.container} ${isActive ? styles.active : ""}`}
    >
      {title}
    </Link>
  );
};

export default FooterLink;
