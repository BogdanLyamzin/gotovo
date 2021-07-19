import {useTranslation} from "next-i18next";

const MarriageContacts = () => {
    const { t } = useTranslation("marriage-contacts");
    return (
        <section className="marriage-contacts">
            <div className="container marriage-contacts-content">
                <div className="marriage-contacts-form">
                    <h2 className="title marriage-contacts-label">{t("label")}</h2>
                    <input placeholder={t("input-name")} type="text" className="marriage-contacts-input" />
                    <input placeholder={t("input-email")} type="text" className="marriage-contacts-input" />
                    <input placeholder={t("input-tel")} type="text" className="marriage-contacts-input" />
                    <textarea placeholder={t("input-text")} name="" id="" cols="30" rows="10"className="marriage-contacts-input" />
                    <a href="#" className="btn _dark _long marriage-contacts-btn">{t("btn")}</a>
                </div>
                <div>
                    <div className="contacts-item marriage-contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("tel-name")}</p>
                        <a href="tel:0800300803" className="contacts-link">{t("tel-text")}</a>
                    </div>
                    <div className="contacts-item marriage-contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-5.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("schedule-name")}</p>
                        <p className="contacts-text marriage-contacts-schedule">
                            <span>{t("schedule-text-1")}</span>
                            <span>{t("schedule-text-2")}</span>
                            <span>{t("schedule-text-3")}</span>
                            <span>{t("schedule-text-4")}</span>
                        </p>
                    </div>
                    <div className="contacts-item marriage-contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-1.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("address-name")}</p>
                        <p className="contacts-text">{t("address-text")}</p>
                    </div>

                    <iframe className="marriage-contacts-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua" allowfullscreen="" loading="lazy" />
                </div>
            </div>
        </section>
    )
};

export default MarriageContacts;