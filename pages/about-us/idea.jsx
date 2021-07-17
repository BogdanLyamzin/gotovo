import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutIdea from "../../src/sections/AboutIdea";

const AboutPage = () => {
  return (
    <Layout>
      <AboutIdea />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
  },
});

export default AboutPage;