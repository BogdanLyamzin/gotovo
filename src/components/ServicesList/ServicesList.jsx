import {useTranslation} from "next-i18next";

const ServicesList = () => {
    const { t } = useTranslation("services-list");
    return (
        <div className="services-list">
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-1.png" alt="services-icon" />
                <p className="services-item-text">{t("marriage")}</p>
                <a href="./wedding-for-day" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-2.png" alt="services-icon" />
                <p className="services-item-text">{t("insurance")}</p>
                <a href="./services/insurance" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-3.png" alt="services-icon" />
                <p className="services-item-text">{t("passport")}</p>
                <a href="./services/passport" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-4.png" alt="services-icon" />
                <p className="services-item-text">{t("apostille")}</p>
                <a href="./services/apostille" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-5.png" alt="services-icon" />
                <p className="services-item-text">{t("immovables")}</p>
                <a href="./services/immovables" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-6.png" alt="services-icon" />
                <p className="services-item-text">{t("newpost")}</p>
                <a href="./services/newpost" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-7.png" alt="services-icon" />
                <p className="services-item-text">{t("ups")}</p>
                <a href="./services/ups" className="btn _light">{t("btn")}</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/diya-logo.png" alt="services-icon" />
                <p className="services-item-text">{t("diya")}</p>
                <a href="./services/diya" className="btn _light">{t("btn")}</a>
            </div>
        </div>
    )
};

export default ServicesList;