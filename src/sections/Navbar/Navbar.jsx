import Logo from "../../components/Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarButtons from "./NavbarButtons";
import NavbarAuth from "./NavbarAuth";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles["nav-container"]}`}>
        <Logo type="main" />
        <NavbarMenu />
        <NavbarButtons />
        <NavbarAuth />
      </div>
    </nav>
  );
};

export default Navbar;