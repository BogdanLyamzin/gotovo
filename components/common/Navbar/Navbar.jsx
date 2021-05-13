import {useRouter} from "next/router";
import {useTranslation} from 'next-i18next'
import Link from "next/link";

import Logo from "../Logo";

import {allLangs} from "./allLangs"

import styles from "./Navbar.module.scss";
import useAuth from "../../../auth/hooks/use-auth";
import useLogout from "../../../auth/hooks/use-logout";

const Navbar = props => {
    const router = useRouter();
    const isAuth = useAuth()
    const logout = useLogout();
    const {t} = useTranslation('common');
    const menuItems = t('menu', {returnObjects: true});
    const menuElements = menuItems?.map(({href, text}) => {
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
                    {/*<li className={styles.menuItem}>*/}
                    {/*    <a href="#" className={styles.menuLink}>Про центр</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-menu-item">*/}
                    {/*    <a href="./marriage.html" className="nav-menu-link">Послуги</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-menu-item">*/}
                    {/*    <a href="#" className="nav-menu-link">Контакти</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-menu-item">*/}
                    {/*    <a href="#" className="nav-menu-link">Блог</a>*/}
                    {/*</li>*/}
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
                    {isAuth ? (
                        <button onClick={logout}>
                            <a className={styles.authLink}>Выйти</a>
                        </button>
                    ) : (
                        <>
                            <Link href="/register">
                                <a className={styles.authLink}>зареєструватися</a>
                            </Link>
                            <br/>
                            <Link href="/login">
                                <a className={styles.authLink}>Войти</a>
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;