import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutService from "../../src/sections/AboutService";

const AboutPage = () => {
  return (
    <Layout>
      <AboutService />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "about-service", "main"])),
  },
});

export default AboutPage;