import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import WrittenTranslation from "../../src/sections/WrittenTranslation";

const ServicesPage = () => {
    return (
      <Layout>
        <WrittenTranslation />
      </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "written-translation", "footer", "main"])),
  },
});

export default ServicesPage;