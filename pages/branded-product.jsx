import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../src/components/Layout";
import BrandedProduct from "../src/sections/BrandedProduct";

const WeddingForDay = () => {
    return (
        <Layout fileName="branded-product-page">
            <BrandedProduct />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'branded-product', 'footer', 'main', 'branded-product-page']),
    },
})

export default WeddingForDay;