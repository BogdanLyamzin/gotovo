import Logo from "../../components/Logo";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarMenu from "./NavbarMenu";
import NavbarLanguage from "./NavbarLanguage";
import NavbarAuth from "./NavbarAuth";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles["nav-container"]}>
                <NavbarMobileMenu />
                <Logo type="main" />
                <NavbarMenu />
                <NavbarLanguage />
                <NavbarAuth />
            </div>
        </nav>
    );
};

export default Navbar;