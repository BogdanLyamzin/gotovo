import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "../../components/common/Layout";
import AboutUsPage from "../../components/AboutUsPage/AboutUsPage";

const AboutUs = () => {
    return (
        <Layout>
            <AboutUsPage />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})

export default AboutUs;