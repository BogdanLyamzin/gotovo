import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import WrittenTranslation from "../../src/sections/WrittenTranslation";

const ServicesPage = () => {
    return (
      <Layout fileName="written-translation-page">
        <WrittenTranslation />
      </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "written-translation", "footer", "main", "written-translation-page"])),
  },
});

export default ServicesPage;