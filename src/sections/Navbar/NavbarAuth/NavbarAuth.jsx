import {useTranslation} from "next-i18next";

import useAuth from "../../../../auth/hooks/use-auth";
import useLogout from "../../../../auth/hooks/use-logout";

import CustomLink from "../../../components/Link";

import styles from "../Navbar.module.scss";

const NavbarAuth = () => {
    const isAuth = useAuth();
    const logout = useLogout();
    const { t } = useTranslation("navbar");

    const auth = t("auth", { returnObjects: true });
    return (
        <div className={styles.authLinks}>
            {isAuth ? (
                <button onClick={logout}>
                    <a className={styles.authLink}>{auth.logout}</a>
                </button>
            ) : (
                <>
                    <CustomLink href="/register" className={styles.authLink}>
                        {auth.register}
                    </CustomLink>
                    <CustomLink href="/login" className={styles.authLink}>
                        {auth.login}
                    </CustomLink>
                </>
            )}
        </div>
    )
};

export default NavbarAuth;