import {useRouter} from "next/router";
import { useTranslation } from 'next-i18next'

import Logo from "../Logo";

import styles from "./Navbar.module.scss";

const Navbar = props => {

    const router = useRouter()
    const { t } = useTranslation('common');

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.content}`}>
                <Logo type="main" />
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <a href="#" className={styles.menuLink}>Про центр</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="./marriage.html" className="nav-menu-link">Послуги</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link">Контакти</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link">Блог</a>
                    </li>
                </ul>
                <div className="nav-buttons">
                    <a href="tel:0800300803" className="nav-tel">0 800 300 803</a>
                    <div className="nav-lang">
                        <div className="nav-lang-btn">УКР</div>
                        <ul className="nav-lang-list">
                            <li className="nav-lang-item">РУС</li>
                            <li className="nav-lang-item">ENG</li>
                        </ul>
                    </div>
                    <div className="nav-search">
                        <img className="nav-search-btn" src="../img/search.png" alt="search" />
                        <input className="nav-search-input" type="text" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;