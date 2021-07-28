import { useTranslation } from "next-i18next";

import CustomLink from "../../../components/Link";
import styles from "../Navbar.module.scss";

const NavbarMenu = () => {
    const { t } = useTranslation("navbar");
    const menuItems = t("menu", { returnObjects: true });

    const menuElements = menuItems.map(({ id, href, text }) => {
        return (
            <li className={styles.menuItem} key={id}>
                <CustomLink href={href} className={styles.menuLink}>
                    {text}
                </CustomLink>
            </li>
        );
    });

    return(
        <ul className={styles.menu}>
            {menuElements}
        </ul>
    )
}

export default NavbarMenu;