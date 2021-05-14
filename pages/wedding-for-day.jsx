import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";
import Wedding from "../components/WeddingPage";

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