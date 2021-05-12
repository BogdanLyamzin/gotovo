import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import Preview from "../components/common/Preview";
import Layout from "../components/common/Layout";

function Home() {
  const router = useRouter()
  const { t } = useTranslation('main')

  return (
      <Layout title={t('title')}>

      </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'main']),
  },
})

export default Home