import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import NotarizedTranslation from "../../src/sections/NotarizedTranslation";

const ServicesPage = () => {
    return (
      <Layout fileName="notarized-translation-page">
        <NotarizedTranslation />
      </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "notarized-translation", "footer", "main", "notarized-translation-page"])),
  },
});

export default ServicesPage;