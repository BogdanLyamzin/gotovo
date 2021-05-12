import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";

const Profile = () => {
    return (
        <Layout title="Profile">

        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'main']),
    },
})

export default Profile;