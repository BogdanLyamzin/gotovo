import { useTranslation } from "next-i18next";
import { useState, useRef } from "react";

import CustomLink from "../../../components/Link";
import styles from "../Navbar.module.scss";

const NavbarMenu = ({ type }) => {
    const { t } = useTranslation("navbar");
    const menuItems = t("menu", { returnObjects: true });

    const [openMenuIdx, setOpenMenuIdx] = useState(false);
    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const menuElements = menuItems.map(({ id, href, text, list = null }, index) => {
        if (list) {
            const contentRef = useRef(null);
            const deskRef = useRef(null);

            const isActive = (index === openMenuIdx) ? "active" : "";
            const menuElementList = list.map(({ id, href, text, target = "_self" }) => {
                return (
                    <li className={styles["nav-menu-dropdown-item"]} key={id}>
                        <CustomLink href={href} target={target} className={styles["nav-menu-dropdown-link"]}>
                            {text}
                        </CustomLink>
                    </li>
                )
            });

            let elementStyle = {};
            if(contentRef.current && (index === openMenuIdx)) {
                const {style, scrollHeight} = contentRef.current;
                elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
            }

            return (
                <li className={styles["nav-menu-item"]} key={id} >
                    {(type === "mobile") ? (
                        <span className={`${styles["nav-menu-link"]} ${styles[isActive]}`} onClick={() => toggle(index)} >
                            {text}
                        </span>
                    ) : (
                        <CustomLink href={href} className={styles["nav-menu-link"]}>
                            {text}
                        </CustomLink>
                    )}
                    <div className={`${styles["nav-menu-dropdown"]} ${styles[isActive]} ${styles[type]}`} ref={type === "mobile" ? contentRef : deskRef} style={elementStyle}>
                        <ul className={`${styles["nav-menu-dropdown-list"]}`}>
                            {menuElementList}
                        </ul>
                    </div>
                </li>
            );
        } else {
            return (
                <li className={styles["nav-menu-item"]} key={id}>
                    <CustomLink href={href} className={styles["nav-menu-link"]}>
                        {text}
                    </CustomLink>
                </li>
            );
        }
    });

    return(
        <ul className={`${styles["nav-menu"]} ${styles[type]}`}>
            {menuElements}
        </ul>
    )
}

export default NavbarMenu;