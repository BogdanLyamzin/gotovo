import {useTranslation} from "next-i18next";

const MarriageHeader = () => {
    const { t } = useTranslation("marriage-header");
    return (
        <header className="header">
            <div className="container">
                <h2 className="header-text-big">{t("title")}</h2>
                <p className="header-text-small">{t("text")}</p>
                <div className="header-buttons">
                    <a href="http://dpdoc.cherg.net/?type=gotovo" target="_blank" className="btn _dark _shadow _long">{t("btn")}</a>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("tel-name")}</p>
                        <a href="tel:0800300803" className="contacts-link">{t("tel-text")}</a>
                    </div>
                </div>
            </div>
            <img className="header-img _mr-80" src="/img/marriage-header.png" alt="Letter" />
            <img className="header-img-mob" src="/img/marriage-header-mob.png" alt="Letter" />
        </header>
    )
};

export default MarriageHeader;