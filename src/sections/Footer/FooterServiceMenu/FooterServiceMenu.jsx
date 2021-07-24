import {useTranslation} from "next-i18next";

import CustomLink from "../../../components/Link";

import styles from "../Footer.module.scss";

const FooterServiceMenu = () => {
    const {t} = useTranslation('footer');
    const menuItems = t('service-menu', {returnObjects: true});
    const menuElements = menuItems.map(({id, href, text}) => {
        return (
            <li key={id} className={styles["footer-menu-item"]}>
                <CustomLink href={href} className={styles["footer-menu-link"]}>
                    {text}
                </CustomLink>
            </li>
        )
    });

    return (
        <div className={styles["footer-menu-col"]}>
            <p className={styles["footer-menu-heading"]}>{t('service-title')}</p>
            <ul className={styles["footer-menu-list"]}>
                {menuElements}
            </ul>
        </div>
    )
}

export default FooterServiceMenu;