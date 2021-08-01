import Image from "next/image";
import { useState } from "react";

import NavbarMenu from "../NavbarMenu";
import NavbarAuth from "../NavbarAuth";
import styles from "../Navbar.module.scss";

const NavbarMobileMenu = () => {
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
                <NavbarMenu type="mobile" />
                <NavbarAuth type="mobile" />
                <div className={styles["nav-mob-menu-ornament"]}>
                    <Image src="/img/ornament-yellow.png" alt="#" width="233" height="209" />
                </div>
            </div>
        </div>
    );
}

export default NavbarMobileMenu;