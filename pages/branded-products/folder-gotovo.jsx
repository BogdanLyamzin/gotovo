import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Layout from "../../src/components/Layout";
import BrandedProductPage from "../../src/sections/BrandedProductPage";

const ProductPage = () => {
    return (
        <Layout fileName="branded-product-page">
            <BrandedProductPage page='0'/>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['navbar', 'product-list', 'footer', 'main', 'branded-product-page']),
    },
})

export default ProductPage;