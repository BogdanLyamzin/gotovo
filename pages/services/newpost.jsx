import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import Newpost from "../../src/sections/Newpost";

const ServicesPage = () => {
  return (
    <Layout>
        <Newpost />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
  },
});

export default ServicesPage;