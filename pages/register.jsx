import React from 'react';
import RegisterForm from "../old/RegisterForm/RegisterForm";
import Layout from "../src/components/Layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import useAuth from "../auth/hooks/use-auth";
import {useRouter} from "next/router";

const Register = () => {
    const isAuth = useAuth();
    const router = useRouter();
    if (isAuth) {
        router.push('/')
    }
    return (
        <Layout title="reg">
            <section className="register-form-main">
                <div className="container">
                    <div className="register-form-container">
                        <h2 className="title">Створити Акаунт</h2>
                        <RegisterForm/>
                    </div>
                </div>
                <img className="header-img register-form-img" src="/img/passport.png" alt="" />
            </section>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})


export default Register;