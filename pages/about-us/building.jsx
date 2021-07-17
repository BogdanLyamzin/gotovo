import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutBuilding from "../../src/sections/AboutBuilding";

const AboutPage = () => {
  return (
    <Layout>
      <AboutBuilding />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
  },
});

export default AboutPage;