"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 font-semibold text-center text-white ${
        isActive
          ? " decoration-[#327DCD] underline underline-offset-4 decoration-2"
          : "hover:bg-[#32CD82]"
      } rounded-2xl`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
