import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../../src/shared/components/Layout";
import MarriageApplication from "../../src/client/MarriageApplication";

const ServicesPage = () => {
    return (
        <Layout fileName="marriage-application-page">
            <MarriageApplication />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "marriage-application", "footer", "main", "marriage-application-page"])),
    },
});

export default ServicesPage;