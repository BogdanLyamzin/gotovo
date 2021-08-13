import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/shared/components/Layout";
import ContactsList from "../src/client/ContactsList";
import Schedule from "../src/client/Schedule";

const Contacts = () => {
    return (
        <Layout fileName="contacts-page">
            <ContactsList />
            <Schedule />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'contacts', 'schedule', 'main', 'contacts-page']),
    },
})

export default Contacts;