"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLink = ({ href, title }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`py-2 px-4 font-medium text-center text-white list-none no-underline ${
        isActive ? "text-[#6FDFEA]" : "hover:text-blue-200"
      }`}
    >
      {title}
    </Link>
  );
};

export default FooterLink;
