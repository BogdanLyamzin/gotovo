import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../src/components/Layout";
import Wedding from "../old/WeddingPage";

const WeddingForDay = () => {
    return (
        <Layout>
            <Wedding />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})

export default WeddingForDay;