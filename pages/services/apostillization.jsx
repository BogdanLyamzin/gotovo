import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import Apostille from "../../src/sections/Apostille";

const ServicesPage = () => {
  return (
    <Layout fileName="apostillization-page">
        <Apostille />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "apostillization", "footer", "main", "apostillization-page"])),
  },
});

export default ServicesPage;