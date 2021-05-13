import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next'
import Link from "next/link";

import Logo from "../Logo";

import {allLangs} from "./allLangs"

import styles from "./Navbar.module.scss";

const Navbar = () => {
    const router = useRouter()

    const {t} = useTranslation('navbar');

    const menuItems = t('menu', {returnObjects: true});
    const menuElements = menuItems.map(({href, text}) => {
        return <li className={styles.menuItem}>
                    <Link href={href} locale={router.locale}>
                        <a className={styles.menuLink}>{text}</a>
                    </Link>
               </li>
    })
    const langs = allLangs[router.locale];

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.content}`}>
                <Logo type="main"/>
                <ul className={styles.menu}>
                    {menuElements}
                </ul>
                <div className={styles["nav-buttons"]}>
                    <a href="tel:0800300803" className={styles["nav-tel"]}>0 800 300 803</a>
                    <div className={styles["nav-lang"]}>
                        <div className={styles["nav-lang-btn"]}>{langs.current}</div>
                        <ul className={styles["nav-lang-list"]}>
                            <Link href={router.route} locale={langs.first.locale}>
                                <li className={styles["nav-lang-item"]}>{langs.first.text}</li>
                            </Link>
                            <Link href={router.route} locale={langs.second.locale}>
                                <li className={styles["nav-lang-item"]}>{langs.second.text}</li>
                            </Link>
                            {/*<li className={styles["nav-lang-item"]}>РУС</li>*/}
                            {/*<li className={styles["nav-lang-item"]}>ENG</li>*/}
                        </ul>
                    </div>
                </div>
                <div>
                    <Link href="/register">
                        <a className={styles.authLink}>зареєструватися</a>
                    </Link>
                    <br />
                    <Link href="/login">
                        <a className={styles.authLink}>Войти</a>
                    </Link>
                    <br />
                    <Link href="/logout" >
                        <a className={styles.authLink}>Выйти</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;