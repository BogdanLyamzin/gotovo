import {useTranslation} from "next-i18next";

const AboutAdvantages = () => {
    const { t } = useTranslation("advantages");
    return (
        <section className="about-us">
            <div className="container">
                <div className="article">
                    <h3 className="article-heading">{t("title")}</h3>
                    <p className="article-text">{t("text-1")}</p>
                    <p className="article-text">{t("text-2")}</p>
                    <p className="article-text">{t("text-3")}</p>
                    <p className="article-text">{t("text-4")}</p>
                    <p className="article-text">{t("text-5")}</p>
                    <p className="article-text">{t("text-6")}</p>
                </div>
                <img className="about-us-picture" src="/img/About-us/about-advantages.jpg" alt="Advantages image" />
            </div>
            <img className="about-us-img _1" src="/img/dots.png" alt="" />
            <img className="about-us-img _2" src="/img/dots.png" alt="" />
        </section>
    )
};

export default AboutAdvantages;