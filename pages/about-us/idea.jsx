import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import AboutIdea from "../../src/client/AboutIdea";

const AboutPage = () => {
    return (
        <Layout fileName="idea-page">
            <AboutIdea />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "footer", "about-idea", "main", "idea-page"])),
    },
});

export default AboutPage;