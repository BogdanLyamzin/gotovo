import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/shared/components/Layout";
import MarriageHeader from "../src/client/MarriageHeader";
import MarriageRegistration from "../src/client/MarriageRegistration";
import MarriageGallery from "../src/client/MarriageGallery";
import MarriageDocuments from "../src/client/MarriageDocuments";
import ServiceCost from "../src/client/ServiceCost";
import MarriageQuestions from "../src/client/MarriageQuestions";
import MarriageContacts from "../src/client/MarriageContacts";
import WriteAboutUs from "../src/client/WriteAboutUs";

const WeddingForDay = () => {
    return (
        <Layout fileName="wedding-page">
            <MarriageHeader />
            <MarriageRegistration />
            <MarriageGallery />
            <MarriageDocuments />
            <ServiceCost />
            <MarriageQuestions />
            <MarriageContacts />
            <WriteAboutUs />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'marriage-header', 'marriage-registration', 'marriage-gallery', 'marriage-documents', 'service-cost', 'marriage-questions', 'marriage-contacts', 'write-about-us', 'footer', 'main', 'wedding-page']),
    },
})

export default WeddingForDay;