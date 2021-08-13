import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import AboutAdvantages from "../../src/client/AboutAdvantages";

const AboutPage = () => {
    return (
        <Layout fileName="advantages-page">
            <AboutAdvantages />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "advantages", "footer", "main", "advantages-page"])),
    },
});

export default AboutPage;