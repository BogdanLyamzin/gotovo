import {useTranslation} from "next-i18next";

import styles from "./Header.module.scss";

const Header = () => {
    const { t } = useTranslation("header");
    return (
        <header className={styles["header"]}>
            <div className="container">
                <h2 className={styles["header-text-big"]}>{t("title")}</h2>
                <p className={styles["header-text-small"]}>{t("subtitle")}</p>
                <div className={styles["header-buttons"]}>
                    <a href="#services" className={`btn _dark _shadow anchor ${styles["header-buttons-btn"]}`}>{t("service-btn-text")}</a>
                    <a href="#contacts" className="btn _light _shadow anchor">{t("contacts-btn-text")}</a>
                </div>
            </div>
            <img className={styles["header-img"]} src="/img/passport.png" alt="" />
        </header>
    )
};

export default Header;