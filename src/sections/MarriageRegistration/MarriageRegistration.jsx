import {useTranslation} from "next-i18next";

const MarriageRegistration = () => {
    const { t } = useTranslation("marriage-registration");
    return (
        <section className="marriage-registration">
            <div className="container marriage-registration-container">
                <div className="marriage-registration-item">
                    <h2 className="marriage-registration-title">{t("item-1-title")}</h2>
                    <p className="marriage-registration-text">{t("item-1-text-1")}</p>
                    <p className="marriage-registration-text">{t("item-1-text-2")}</p>
                </div>
                <div className="marriage-registration-item">
                    <h2 className="marriage-registration-title">{t("item-2-title")}</h2>
                    <p className="marriage-registration-text">{t("item-2-text-1")}</p>
                    <p className="marriage-registration-text">{t("item-2-text-2")}</p>
                </div>
                <div className="marriage-registration-item">
                    <h2 className="marriage-registration-title">{t("item-3-title")}</h2>
                    <p className="marriage-registration-text">{t("item-3-text-1")}</p>
                    <p className="marriage-registration-text">{t("item-3-text-2")}</p>
                </div>
                <div className="marriage-registration-item">
                    <h2 className="marriage-registration-title">{t("item-4-title")}</h2>
                    <p className="marriage-registration-text">{t("item-4-text-1")}</p>
                    <p className="marriage-registration-text">{t("item-4-text-2")}</p>
                </div>
            </div>
        </section>
    )
};

export default MarriageRegistration;