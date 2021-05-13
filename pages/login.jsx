import React from "react";
import LoginForm from "../components/LoginForm";
import Layout from "../components/common/Layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import useAuth from "../auth/hooks/use-auth";
import {useRouter} from "next/router";

const Login = () => {
    const isAuth = useAuth();
    const router = useRouter();
    if (isAuth) {
        router.push('/profile')
    }
    return (
        <Layout title="login">
            <LoginForm/>
        </Layout>
    );
};

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'main']),
    },
})


export default Login;