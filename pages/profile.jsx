import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/common/Layout";
import ProfileForm from "../components/ProfileForm";


const Profile = () => {
  return (
    <Layout title="Profile">
      <section className="register-form-main">
        <div className="container">
          <div className="register-form-container">
            <h2 className="title">Створити заяву на заключення шлюбу</h2>
            <ProfileForm />
          </div>
        </div>
        <img
          className="header-img register-form-img"
          src="/img/passport.png"
          alt=""
        />
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["navbar", "footer", "main"])),
  },
});

export default Profile;
