import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";

const Contacts = () => {
    return (
        <Layout>

        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})

export default Contacts;