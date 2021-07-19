import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutUs from "../../src/sections/AboutUs";

const AboutPage = () => {
  return (
    <Layout>
      <AboutUs />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "about-us", "main"])),
  },
});

export default AboutPage;