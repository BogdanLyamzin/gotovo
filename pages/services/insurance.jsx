import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import Insurance from "../../src/sections/Insurance";

const ServicesPage = () => {
    return (
      <Layout>
        <Insurance />
      </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "insurance", "footer", "main"])),
  },
});

export default ServicesPage;