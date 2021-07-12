import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";

const WeddingForDay = () => {
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

export default WeddingForDay;