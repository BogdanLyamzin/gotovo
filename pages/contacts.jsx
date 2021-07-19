import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import ContactsList from "../src/sections/ContactsList";
import ContactsSchedule from "../src/sections/ContactsSchedule";

const Contacts = () => {
    return (
        <Layout>
            <ContactsList />
            <ContactsSchedule />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'contacts', 'contacts-schedule', 'main']),
    },
})

export default Contacts;