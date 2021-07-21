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
            <iframe className="contacts-schedule-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua" allowfullscreen="" loading="lazy" />
        </section>
    )
};

export default ContactsSchedule;