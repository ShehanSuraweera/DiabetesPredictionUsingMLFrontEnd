"use client";

import Link from "next/link";
import styles from './navLinks.module.css'
import {usePathname} from 'next/navigation'

const NavLink = ({href, title}) => {

    const pathName = usePathname();
    const isActive = pathName === href;

    return(
        <Link
            href={href}
            className={`${styles.container} ${isActive ? styles.active : ""}`}
        >
            {title}
        </Link>
    );
};

export default NavLink;