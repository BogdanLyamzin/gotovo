import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import AboutBuilding from "../../src/client/AboutBuilding";

const AboutPage = () => {
    return (
        <Layout fileName="building-page">
            <AboutBuilding />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-building", "main", "building-page"])),
    },
});

export default AboutPage;