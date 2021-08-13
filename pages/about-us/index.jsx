import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import AboutUs from "../../src/client/AboutUs";

const AboutPage = () => {
    return (
        <Layout fileName="about-us-page">
            <AboutUs />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-us", "main", "about-us-page"])),
    },
});

export default AboutPage;