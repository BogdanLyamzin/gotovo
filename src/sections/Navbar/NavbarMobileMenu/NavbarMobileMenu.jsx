import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";

import CustomLink from "../../../components/Link";
import styles from "../Navbar.module.scss";

const NavbarMobileMenu = () => {
    const { t } = useTranslation("navbar");
    const menuItems = t("menu", { returnObjects: true });

    const menuElements = menuItems.map(({ id, href, text }) => {
        return (
            <li className={styles["nav-mob-menu-item"]} key={id}>
                <CustomLink href={href} className={styles["nav-mob-menu-link"]}>
                    {text}
                </CustomLink>
            </li>
        );
    });

    const [state, setState] = useState(false);
    const toggle = () => {
        setState(prevState => !prevState);
    };
    const isActive = state ? "active" : "";

    return(
        <div className={styles["nav-mob-menu"]}>
            <div className={`${styles["nav-mob-menu-btn"]} ${styles[isActive]}`} onClick={toggle}>
                <span className={`${styles["nav-mob-menu-btn-item"]} ${styles["_1"]}`}></span>
                <span className={`${styles["nav-mob-menu-btn-item"]} ${styles["_2"]}`}></span>
                <span className={`${styles["nav-mob-menu-btn-item"]} ${styles["_3"]}`}></span>
            </div>
            <div className={`${styles["nav-mob-menu-content"]} ${styles[isActive]}`}>
                <ul className={styles["nav-mob-menu-list"]}>
                    {menuElements}
                </ul>
                <div className={styles["nav-mob-menu-ornament"]}>
                    <Image src="/img/ornament-yellow.png" alt="#" width="233" height="209" />
                </div>
            </div>
        </div>
    )
    
}

export default NavbarMobileMenu;