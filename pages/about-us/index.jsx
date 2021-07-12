import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import AboutUsPage from "../../old/AboutUsPage/AboutUsPage";

const AboutPage = () => {
  return (
    <Layout>
      <AboutUsPage />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
  },
});

export default AboutPage;