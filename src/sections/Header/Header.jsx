import {useTranslation} from "next-i18next";

import styles from "./Header.module.scss";

const Header = () => {
    const { t } = useTranslation("header");
    return (
        <header className={styles["header"]}>
            <div className={`container ${styles["header-container"]}`}>
                <h2 className={styles["header-text-big"]}>{t("title")}</h2>
                <p className={styles["header-text-small"]}>{t("subtitle")}</p>
                <div className={styles["header-buttons"]}>
                    <a href="#services" className={`btn _dark _shadow anchor ${styles["header-buttons-btn"]}`}>{t("service-btn-text")}</a>
                    <a href="#contacts" className={`btn _light _shadow anchor ${styles["header-buttons-btn"]}`}>{t("contacts-btn-text")}</a>
                </div>
            </div>
            <img className={styles["header-img"]} src="/img/passport.png" alt="Passport" />
            <img className={styles["header-img-mob"]} src="/img/passport-mob.png" alt="Passport" />
        </header>
    )
};

export default Header;