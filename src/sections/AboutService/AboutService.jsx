import {useTranslation} from "next-i18next";

const AboutService = () => {
    const { t } = useTranslation("about-service");
    return (
        <section className="about-us">
            <div className="container">
                <div className="article">
                    <h3 className="article-heading">{t("title")}</h3>
                    <p className="article-text">{t("text-1")}</p>
                    <ul>
                        <li className="article-list-item">{t("list-1-item-1")}</li>
                        <li className="article-list-item">{t("list-1-item-2")}</li>
                        <li className="article-list-item">{t("list-1-item-3")}</li>
                        <li className="article-list-item">{t("list-1-item-4")}</li>
                    </ul>
                    <p className="article-text">{t("text-2")}</p>
                    <ul>
                        <li className="article-list-item">{t("list-2-item-1")}</li>
                        <li className="article-list-item">{t("list-2-item-2")}</li>
                        <li className="article-list-item">{t("list-2-item-3")}</li>
                    </ul>
                    <p className="article-text">{t("text-3")}</p>
                    <p className="article-text">{t("text-4")}</p>
                </div>
                <img className="about-us-picture" src="/img/About-us/about-service.png" alt="" />
            </div>
            <img className="about-us-img _1" src="/img/dots.png" alt="" />
            <img className="about-us-img _2" src="/img/dots.png" alt="" />
        </section>
    )
};

export default AboutService;