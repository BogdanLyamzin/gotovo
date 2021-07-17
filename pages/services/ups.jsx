import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import UPS from "../../src/sections/UPS";

const ServicesPage = () => {
  return (
    <Layout>
        <UPS />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
  },
});

export default ServicesPage;