import {useTranslation} from "next-i18next";

const Contacts = () => {
    const { t } = useTranslation("contacts");
    return (
        <section id="contacts" className="contacts">
            <div className="container">
                <h3 className="contacts-heading">{t("heading-1")}</h3>
                <ul className="contacts-list">
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-1.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("address-name")}</p>
                        <p className="contacts-text">{t("address-text")}</p>
                    </li>
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-2.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("email-name")}</p>
                        <a href="mailto:gotovo.ds@gmail.com" className="contacts-link">{t("email-text")}</a>
                    </li>
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-3.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("director-name")}</p>
                        <p className="contacts-text">{t("director-text")}</p>
                    </li>
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">{t("tel-name")}</p>
                        <a href="tel:0800300803" className="contacts-link">{t("tel-text")}</a>
                    </li>
                </ul>
            </div>
            <img className="contacts-img" src="/img/contacts.png" alt="Консультант" />
        </section>
    )
};

export default Contacts;