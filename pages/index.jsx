import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from "../src/components/Layout";
import Header from "../src/sections/Header";
import OurTarget from "../src/sections/OurTarget";
import Services from "../src/sections/Services";
import Navigate from "../src/sections/Navigate";
import Partners from "../src/sections/Partners";
import Contacts from "../src/sections/Contacts";

function Home() {

  return (
      <Layout fileName="index">
        <Header />
        <OurTarget />
        <Services />
        <Navigate />
        <Partners />
        <Contacts />
      </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['navbar', 'footer', 'header', 'our-target', 'index']),
  },
})

export default Home