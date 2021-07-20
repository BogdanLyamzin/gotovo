import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutAdvantages from "../../src/sections/AboutAdvantages";

const AboutPage = () => {
  return (
    <Layout>
      <AboutAdvantages />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "advantages", "footer", "main"])),
  },
});

export default AboutPage;