import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from "../src/components/Layout";

function Home() {

  return (
      <Layout fileName="index">

      </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['navbar', 'footer', 'index']),
  },
})

export default Home