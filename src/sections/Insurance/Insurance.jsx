import {useTranslation} from "next-i18next";

import Dropdown from "../../components/Dropdown";

const Insurance = () => {
    const { t } = useTranslation("insurance");
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>{t("btn")}</a>
                    <img className="service-page-logo" src="../img/Services/icon-2.png" alt="" />
                    <h2 className="service-page-title">{t("title")}</h2>
                </div>
                <div className="dropdown">
                    <Dropdown btnText={t("name-1")}>
                        <li className="dropdown-item _title">{t("item-title")}</li>
                        <li className="dropdown-item">{t("item-1-text-1")}</li>
                        <li className="dropdown-item">{t("item-1-text-2")}</li>
                        <li className="dropdown-item">{t("item-1-text-3")}</li>
                    </Dropdown>
                </div>
                <div className="dropdown">
                    <Dropdown btnText={t("name-2")}>
                        <li className="dropdown-item _title">{t("item-title")}</li>
                        <li className="dropdown-item">{t("item-2-text-1")}</li>
                        <li className="dropdown-item">{t("item-2-text-2")}</li>
                        <li className="dropdown-item">{t("item-2-text-3")}</li>
                        <li className="dropdown-item">{t("item-2-text-4")}</li>
                    </Dropdown>
                </div>
                <div className="dropdown">
                    <Dropdown btnText={t("name-3")}>
                        <li className="dropdown-item _title">{t("item-title")}</li>
                        <li className="dropdown-item">{t("item-3-text-1")}</li>
                        <li className="dropdown-item">{t("item-3-text-2")}</li>
                        <li className="dropdown-item">{t("item-3-text-3")}</li>
                    </Dropdown>
                </div>
            </div>
        </section>
    )
};

export default Insurance;