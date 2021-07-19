import {useTranslation} from "next-i18next";

const ContactsSchedule = () => {
    const { t } = useTranslation("contacts-schedule");
    return (
        <section className="contacts-schedule">
            <div className="container">
                <h2 className="title">{t("title")}</h2>
                <div className="contacts-schedule-content">
                    <div className="contacts-schedule-item">
                        <img src="/img/Services/icon-1.png" className="contacts-schedule-img" alt="" />
                        <div>
                            <p className="contacts-schedule-name">{t("item-1-name")}</p>
                            <p className="contacts-schedule-text">{t("item-1-text-1")}</p>
                            <p className="contacts-schedule-text">{t("item-1-text-2")}</p>
                        </div>
                    </div>
                    <div className="contacts-schedule-item">
                        <img src="/img/Services/icon-2.png" className="contacts-schedule-img" alt="" />
                        <div>
                            <p className="contacts-schedule-name">{t("item-2-name")}</p>
                            <p className="contacts-schedule-text">{t("item-2-text-1")}</p>
                            <p className="contacts-schedule-text">{t("item-2-text-2")}</p>
                        </div>
                    </div>
                    <div className="contacts-schedule-item">
                        <img src="/img/Services/icon-3.png" className="contacts-schedule-img" alt="" />
                        <div>
                            <p className="contacts-schedule-name">{t("item-3-name")}</p>
                            <p className="contacts-schedule-text">{t("item-3-text-1")}</p>
                            <p className="contacts-schedule-text">{t("item-3-text-2")}</p>
                            <p className="contacts-schedule-text">{t("item-3-text-3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactsSchedule;