import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from "../src/components/Layout";
import Header from "../src/sections/Header";

function Home() {

  return (
      <Layout fileName="index">
        <Header />
      </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['navbar', 'footer', 'header', 'index']),
  },
})

export default Home