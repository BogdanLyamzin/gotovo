import {useTranslation} from "next-i18next";

const ServiceCost = () => {
    const { t } = useTranslation("service-cost");
    return (
        <section className="service-cost">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <div className="service-cost-list">
                    <div className="service-cost-item">
                        <div className="service-cost-item-heading">
                            <p className="service-cost-item-text">{t("name-1")}</p>
                            <p className="service-cost-item-text underline">{t("price-1")}</p>
                        </div>
                        <ul>
                            <li className="service-cost-list-item">{t("list-1-item-1")}</li>
                            <li className="service-cost-list-item">{t("list-1-item-2")}</li>
                            <li className="service-cost-list-item">{t("list-1-item-3")}</li>
                            <li className="service-cost-list-item">{t("list-1-item-4")}</li>
                            <li className="service-cost-list-item">{t("list-1-item-5")}</li>
                        </ul>
                    </div>
                    <div className="service-cost-item">
                        <div className="service-cost-item-heading">
                            <p className="service-cost-item-text">{t("name-2")}</p>
                            <p className="service-cost-item-text underline">{t("price-2")}</p>
                        </div>
                        <ul>
                            <li className="service-cost-list-item">{t("list-2-item-1")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-2")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-3")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-4")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-5")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-6")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-7")}</li>
                            <li className="service-cost-list-item">{t("list-2-item-8")}</li>
                        </ul>
                    </div>
                    <div className="service-cost-item">
                        <div className="service-cost-item-heading">
                            <p className="service-cost-item-text">{t("name-3")}</p>
                            <p className="service-cost-item-text underline">{t("price-3")}</p>
                        </div>
                        <ul>
                            <li className="service-cost-list-item">{t("list-3-item-1")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-2")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-3")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-4")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-5")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-6")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-7")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-8")}</li>
                            <li className="service-cost-list-item">{t("list-3-item-9")}</li>
                        </ul>
                    </div>
                    <div className="service-cost-item">
                        <div className="service-cost-item-heading">
                            <p className="service-cost-item-text">{t("name-4-1")}</p>
                            <p className="service-cost-item-small-text">{t("name-4-2")}</p>
                            <p className="service-cost-item-text underline">{t("price-4")}</p>
                        </div>
                        <ul>
                            <li className="service-cost-list-item">{t("list-4-item-1")}</li>
                            <li className="service-cost-list-item">{t("list-4-item-2")}</li>
                            <li className="service-cost-list-item">{t("list-4-item-3")}</li>
                            <li className="service-cost-list-item">{t("list-4-item-4")}</li>
                            <li className="service-cost-list-item">{t("list-4-item-5")}</li>
                        </ul>
                    </div>
                    <div className="service-cost-item">
                        <div className="service-cost-item-heading">
                            <p className="service-cost-item-text">{t("name-5")}</p>
                        </div>
                        <ul>
                            <li className="service-cost-list-item">{t("list-5-item-1")}</li>
                            <li className="service-cost-list-item">{t("list-5-item-2")}</li>
                            <li className="service-cost-list-item">{t("list-5-item-3")}</li>
                        </ul>
                    </div>
                    <div className="service-cost-item">
                        <div className="service-cost-item-heading">
                            <p className="service-cost-item-text">{t("name-6")}</p>
                        </div>
                        <ul>
                            <li className="service-cost-list-item">{t("list-6-item-1")}</li>
                            <li className="service-cost-list-item">{t("list-6-item-2")}</li>
                            <li className="service-cost-list-item">{t("list-6-item-3")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ServiceCost;