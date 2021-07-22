import {useTranslation} from "next-i18next";

const Events = () => {
    const { t } = useTranslation("events");
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>{t("btn")}</a>
                    <img className="service-page-logo" src="/img/Services/icon-5.png" alt="" />
                    <h2 className="service-page-title">{t("title")}</h2>
                </div>
                <div className="service-article">
                    <p className="service-article-text">{t("text-1")}</p>
                    <p className="service-article-text">{t("text-2")}</p>
                    <p className="service-article-text">{t("text-3")}</p>
                    <p className="service-article-text">{t("text-4")}</p>
                </div>
            </div>
        </section>
    )
};

export default Events;