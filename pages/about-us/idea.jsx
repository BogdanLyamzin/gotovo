import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutIdea from "../../src/sections/AboutIdea";

const AboutPage = () => {
  return (
    <Layout fileName="idea-page">
      <AboutIdea />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "about-idea", "main", "idea-page"])),
  },
});

export default AboutPage;