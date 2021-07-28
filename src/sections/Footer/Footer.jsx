import Image from "next/image";

import AboutCenter from "./AboutCenter/AboutCenter";
import FooterInfo from "./FooterInfo";
import FooterContacts from "./FooterContacts";
import FooterServiceMenu from "./FooterServiceMenu";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={`${styles["footer-ornament"]} ${styles._left}`}>
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
            </div>
            <div className={`${styles["footer-ornament"]} ${styles._right}`}>
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
                <Image src="/img/ornament-full.png" alt="#" width="152" height="136" />
            </div>
            <div className={`container ${styles["footer-content"]}`}>
                <FooterInfo />
                <div className={styles["footer-menu"]}>
                    <AboutCenter />
                    <FooterServiceMenu />
                    <FooterContacts />
                </div>
            </div>
        </footer>
    );
};

export default Footer;