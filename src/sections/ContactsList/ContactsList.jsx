import {useTranslation} from "next-i18next";

const ContactsList = () => {
    const { t } = useTranslation("contacts");
    return (
        <section className="contacts-2">
            <div className="container">
                <h2 className="title contacts-2-title">{t("heading-2")}</h2>
                <div className="contacts-2-content">
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-1.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("address-name")}</p>
                        <p className="contacts-text">{t("address-text")}</p>
                    </div>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-2.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("email-name")}</p>
                        <a href="mailto:gotovo.ds@gmail.com" className="contacts-link">{t("email-text")}</a>
                    </div>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-3.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("director-name")}</p>
                        <p className="contacts-text">{t("director-text")}</p>
                    </div>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("tel-name")}</p>
                        <a href="tel:0800300803" className="contacts-link">{t("tel-text")}</a>
                    </div>
                </div>
            </div>
            <img className="contacts-2-img" src="/img/square.png" alt="" />
        </section>
    )
};

export default ContactsList;