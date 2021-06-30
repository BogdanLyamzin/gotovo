import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from "../components/common/Layout";

function Home() {
  const { t } = useTranslation('main')
  return (
      <Layout title={t('title')}>
        {/*<MainPage />*/}
      </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['navbar', 'footer', 'main']),
  },
})

export default Home