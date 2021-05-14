import React from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import Link from "next/link";

import Logo from "../../common/Logo";

import styles from "./Footer.module.scss";

const Footer = props => {
    const router = useRouter()
    const {t} = useTranslation('footer');
    const aboutMenuItems = t('about-menu', {returnObjects: true});
    const aboutMenuElements = aboutMenuItems.map(({href, text}) => {
        return (
            <li className={styles["footer-menu-item"]}>
                <Link href={href}>
                <a className={styles["footer-menu-link"]}>{text}</a>
                </Link>
            </li>
        )
    });

    const contactsMenuItems = t('contacts-menu', {returnObjects: true});
    const contactsMenuElements = contactsMenuItems.map(({href, text}) => {
        return (
            <li className={styles["footer-menu-item"]}>
                <Link href={href}>
                    <a className={styles["footer-menu-link"]}>{text}</a>
                </Link>
            </li>
        )
    });
    return (
        <footer className={styles["footer"]}>
            <div className={`${styles["footer-ornament"]} ${styles._left}`}>
                <img src="/img/ornament-full.png" alt="" />
                    <img src="/img/ornament-full.png" alt="" />
            </div>
            <div className={`${styles["footer-ornament"]} ${styles._right}`}>
                <img src="/img/ornament-full.png" alt="" />
                    <img src="/img/ornament-full.png" alt="" />
            </div>
            <div className={`container ${styles["footer-content"]}`}>
                <div className={styles["footer-info"]}>
                    <div>
                        <Logo type="lightName" />
                        <div className={styles["footer-schedule"]}>
                            <p className={styles["footer-schedule-text"]}>Пн-Пт 9:00-20:00</p>
                            <p className={styles["footer-schedule-text"]}>Сб-Нд 9:00-18:00</p>
                        </div>
                    </div>
                    <div className={styles["footer-socials"]}>
                        <a href="#" className={styles["footer-socials-item"]}>
                            <img src="/img/instagram.png" alt="ig" />
                        </a>
                        <a href="#" className={styles["footer-socials-item"]}>
                            <img src="/img/facebook.png" alt="fb" />
                        </a>
                    </div>
                </div>
                <div className={styles["footer-menu"]}>
                    <div className={styles["footer-menu-col"]}>
                        <p className={styles["footer-menu-heading"]}>{t('about-title')}</p>
                        <ul className={styles["footer-menu-list"]}>
                            {aboutMenuElements}
                        </ul>
                    </div>
                    {/*<div className="footer-menu-col">*/}
                    {/*    <p className="footer-menu-heading">Послуги</p>*/}
                    {/*    <ul className="footer-menu-list">*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Шлюб за добу</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Страхування</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Паспортний сервiс</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Апостилювання</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Юридичнi послуги у сферi реєстрування*/}
                    {/*                нерухомого майна</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Нова пошта</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">UPS - Україна</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">“Дiя”</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <div className={styles["footer-menu-col"]} style={{width: "130px"}}>
                        <p className={["footer-menu-heading"]}>{t('contacts-title')}</p>
                        <ul className={styles["footer-menu-list"]} >
                            {contactsMenuElements}
                            {/*<li className="footer-menu-item">*/}
                            {/*    <a href="#" className="footer-menu-link">Контакти</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    {/*<div className="footer-menu-col">*/}
                    {/*    <p className="footer-menu-heading">Блог</p>*/}
                    {/*    <ul className="footer-menu-list">*/}
                    {/*        <li className="footer-menu-item">*/}
                    {/*            <a href="#" className="footer-menu-link">Останнi новини</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;