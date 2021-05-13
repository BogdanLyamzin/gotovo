import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";
import ProfileForm from "../components/ProfileForm";

const Profile = () => {
    return (
        <Layout title="Profile">
            <ProfileForm/>
        </Layout>
    );
};

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'main']),
    },
})

export default Profile;