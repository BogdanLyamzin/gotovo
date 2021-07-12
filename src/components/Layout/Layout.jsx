import { useTranslation } from 'next-i18next'
import Head from "next/head";

import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";

const Layout = ({ fileName, children }) => {
    const { t } = useTranslation(fileName);
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;