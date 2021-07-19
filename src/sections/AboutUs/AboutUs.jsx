import {useTranslation} from "next-i18next";

const AboutUs = () => {
    const { t } = useTranslation("about-us");
    return (
        <section className="about-us">
            <div className="container">
                <div className="article">
                    <h3 className="article-heading">{t("title")}</h3>
                    <p className="article-text">{t("text-1")}</p>
                    <p className="article-text">{t("text-2")}</p>
                    <p className="article-text">{t("text-3")}</p>
                </div>
                <div className="about-us-gallery">
                    <div className="about-us-gallery-img _1"></div>
                    <div className="about-us-gallery-img _2"></div>
                    <div className="about-us-gallery-img _3"></div>
                    <div className="about-us-gallery-img _4"></div>
                </div>
            </div>
            <img className="about-us-img _1" src="/img/dots.png" alt="" />
            <img className="about-us-img _2" src="/img/dots.png" alt="" />
        </section>
    )
};

export default AboutUs;