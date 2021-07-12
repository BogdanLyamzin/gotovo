import React from "react";
import LoginForm from "../old/LoginForm";
import Layout from "../src/components/Layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import useAuth from "../auth/hooks/use-auth";
import {useRouter} from "next/router";
import RegisterForm from "../old/RegisterForm";

const Login = () => {
    const isAuth = useAuth();
    const router = useRouter();
    if (isAuth) {
        router.push('/profile')
    }
    return (
        <Layout title="login">
            <section className="register-form-main">
                <div className="container">
                    <div className="register-form-container">
                        <h2 className="title">Увійти</h2>
                        <LoginForm />
                    </div>
                </div>
                <img className="header-img login-form-img" src="/img/passport.png" alt="" />
            </section>

        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})


export default Login;