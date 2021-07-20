import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import MarriageHeader from "../src/sections/MarriageHeader";
import MarriageRegistration from "../src/sections/MarriageRegistration";
import MarriageGallery from "../src/sections/MarriageGallery";
import MarriageDocuments from "../src/sections/MarriageDocuments";
import ServiceCost from "../src/sections/ServiceCost";
import MarriageContacts from "../src/sections/MarriageContacts";
import WriteAboutUs from "../src/sections/WriteAboutUs";

const WeddingForDay = () => {
    return (
        <Layout>
            <MarriageHeader />
            <MarriageRegistration />
            <MarriageGallery />
            <MarriageDocuments />
            <ServiceCost />
            <MarriageContacts />
            <WriteAboutUs />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'marriage-header', 'marriage-registration', 'marriage-gallery', 'marriage-documents', 'service-cost', 'marriage-contacts', 'write-about-us', 'footer', 'main']),
    },
})

export default WeddingForDay;