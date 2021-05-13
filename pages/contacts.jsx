import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ContactsPage from "../components/ContactsPage";
import Layout from "../components/common/Layout";
const Contacts = () => {
    return (
        <Layout>
            <ContactsPage />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
    },
})

export default Contacts;