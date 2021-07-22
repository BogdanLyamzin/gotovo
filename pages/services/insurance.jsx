import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import Insurance from "../../src/sections/Insurance";

const ServicesPage = () => {
    return (
      <Layout fileName="insurance-page">
        <Insurance />
      </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "insurance", "footer", "main", "insurance-page"])),
  },
});

export default ServicesPage;