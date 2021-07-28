import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../../src/components/Layout";
import BrandedProductsList from "../../src/sections/BrandedProductsList";

const BrandedProducts = () => {
    return (
        <Layout fileName="branded-product-page">
            <BrandedProductsList />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'branded-product', 'footer', 'main', 'branded-product-page']),
    },
})

export default BrandedProducts;