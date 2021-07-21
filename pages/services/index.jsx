import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/Layout";
import ServicesList from "../../src/components/ServicesList";

const ServicesPage = () => {
  return (
    <Layout fileName="services-page">
        <div className="services-page">
            <div className="container">
                <ServicesList />
            </div>
        </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "services-list", "main", "services-page"])),
  },
});

export default ServicesPage;