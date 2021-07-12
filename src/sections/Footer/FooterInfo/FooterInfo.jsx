import {useTranslation} from "next-i18next";

import Logo from "../../../components/Logo";
import Image from "next/image";

import styles from "../Footer.module.scss";

const FooterInfo = () => {
    const {t} = useTranslation('footer');
    const {workDays, weekend} = t("working-time", { returnObjects: true });

    return (
        <div className={styles["footer-info"]}>
            <div>
                <Logo type="light" />
                <div className={styles["footer-schedule"]}>
                    <p className={styles["footer-schedule-text"]}>{workDays} 9:00-20:00</p>
                    <p className={styles["footer-schedule-text"]}>{weekend} 9:00-18:00</p>
                </div>
            </div>
            <div className={styles["footer-socials"]}>
                <a href="#" target="_blank" className={styles["footer-socials-item"]}>
                    <Image src="/img/instagram.png" alt="ig" width="14" height="14" />
                </a>
                <a href="#" target="_blank" className={styles["footer-socials-item"]}>
                    <Image src="/img/facebook.png" alt="ig" width="16" height="16" />
                </a>
            </div>
        </div>
    )
};

export default FooterInfo;