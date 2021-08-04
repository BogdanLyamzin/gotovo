import {useTranslation} from "next-i18next";

const NotarizedTranslation = () => {
    const { t } = useTranslation("notarized-translation");
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>{t("btn")}</a>
                    <a href="./" className="service-page-mob-btn"></a>
                    <img className="service-page-logo" src="/img/Services/notary3.png" alt="" />
                    <h2 className="service-page-title">{t("title")}</h2>
                </div>
                <div className="service-article">
                    <p className="service-article-text">{t("text-1")}</p>
                    <ul>
                        <li className="service-article-list-item">{t("list-item-1")}</li>
                        <li className="service-article-list-item">{t("list-item-2")}</li>
                        <li className="service-article-list-item">{t("list-item-3")}</li>
                        <li className="service-article-list-item">{t("list-item-4")}</li>
                        <li className="service-article-list-item">{t("list-item-5")}</li>
                        <li className="service-article-list-item">{t("list-item-6")}</li>
                        <li className="service-article-list-item">{t("list-item-7")}</li>
                        <li className="service-article-list-item">{t("list-item-8")}</li>
                    </ul>
                    <p className="service-article-text">{t("text-2")}</p>
                </div>
            </div>
        </section>
    )
};

export default NotarizedTranslation;