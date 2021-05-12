import React from 'react';
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Layout from "../components/common/Layout";
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
            <RegisterForm/>
        </Layout>
    );
};

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'main']),
    },
})


export default Register;