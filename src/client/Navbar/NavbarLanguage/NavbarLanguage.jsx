import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../Navbar.module.scss";

import { allLangs } from "./allLangs";

const NavbarLanguage = () => {
    const router = useRouter();

    const langs = [...allLangs];

    const idx = langs.findIndex(({ locale }) => locale === router.locale);

    const [currentLang] = langs.splice(idx, 1);

    const otherLangs = langs.map(({ id, text, locale }) => (
        <Link href={router.route} locale={locale} key={id}>
            <li className={styles["nav-lang-item"]}>{text}</li>
        </Link>
    ));

    return (
        <div className={styles["nav-lang"]}>
            <div className={styles["nav-lang-btn"]}>{currentLang.text}</div>
            <ul className={styles["nav-lang-list"]}>
                {otherLangs}
            </ul>
        </div>
    )
}

export default NavbarLanguage;