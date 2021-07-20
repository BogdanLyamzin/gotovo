import {useTranslation} from "next-i18next";

import Dropdown from "../../components/Dropdown";

const Apostille = () => {
    const { t } = useTranslation("apostillization");
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>{t("btn")}</a>
                    <img className="service-page-logo" src="/img/Services/icon-4.png" alt="" />
                    <h2 className="service-page-title">{t("title")}</h2>
                </div>
                <div className="service-article">
                    <p className="service-article-text">{t("text-1")}</p>
                    <ul>
                        <li className="service-article-list-item">{t("price-1-1")}</li>
                        <li className="service-article-list-item">{t("price-1-2")}</li>
                    </ul>
                    <p className="service-article-text indent">{t("cost")}</p>
                    <p className="service-article-text">{t("text-2")}</p>
                    <ul>
                        <li className="service-article-list-item">{t("price-2-1")}</li>
                        <li className="service-article-list-item">{t("price-2-2")}</li>
                    </ul>
                    <p className="service-article-text indent">{t("cost")}</p>
                    <p className="service-article-text">{t("text-3")}</p>
                    <ul>
                        <li className="service-article-list-item">{t("price-3-1")}</li>
                        <li className="service-article-list-item">{t("price-3-2")}</li>
                    </ul>
                    <p className="service-article-text indent">{t("cost")}</p>
                    <p className="service-article-text">{t("text-4")}</p>
                    <ul>
                        <li className="service-article-list-item">{t("price-4-1")}</li>
                        <li className="service-article-list-item">{t("price-4-2")}</li>
                    </ul>
                    <p className="service-article-text">{t("cost")}</p>
                </div>
            </div>
        </section>
    )
};

export default Apostille;