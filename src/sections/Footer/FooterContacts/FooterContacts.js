import {useTranslation} from "next-i18next";

import CustomLink from "../../../components/Link";
import styles from "../Footer.module.scss";

const FooterContacts = ()=>{
    const {t} = useTranslation('footer');
    const contactsMenuItems = t('contacts-menu', {returnObjects: true});
    const contactsMenuElements = contactsMenuItems.map(({id, href, text}) => {
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
            <p className={styles["footer-menu-heading"]}>{t('contacts-title')}</p>
            <ul className={styles["footer-menu-list"]} >
                {contactsMenuElements}
            </ul>
        </div>
    )
}

export default FooterContacts;