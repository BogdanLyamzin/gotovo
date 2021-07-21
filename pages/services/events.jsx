import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import Events from "../../src/sections/Events";

const ServicesPage = () => {
  return (
    <Layout fileName="events-page">
        <Events />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "events", "footer", "main", "events-page"])),
  },
});

export default ServicesPage;