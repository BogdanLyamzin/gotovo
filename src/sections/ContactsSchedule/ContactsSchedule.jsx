import {useTranslation} from "next-i18next";

import CustomLink from "../../components/Link";

const ContactsSchedule = () => {
    const { t } = useTranslation("contacts-schedule");
    const contactsItems = t('schedule', {returnObjects: true});
    const contactsElements = contactsItems.map(({id, name, img, href, target, scheduleList}) => {
        const scheduleListElements = scheduleList.map(({id, day, time}) => {
            return (
                <div key={id} className="contacts-schedule-list">
                    <span className="contacts-schedule-text">{day}</span>
                    <span className="contacts-schedule-text">{time}</span>
                </div>
            );
        });
        return (
            <CustomLink href={href} target={target} key={id} className="contacts-schedule-item">
                <img src={img} className="contacts-schedule-img" alt="icon" />
                <p className="contacts-schedule-name">{name}</p>
                <div>
                    {scheduleListElements}
                </div>
            </CustomLink>
        )
    });
    return (
        <section className="contacts-schedule">
            <div className="container">
                <h2 className="title">{t("title")}</h2>
                <div className="contacts-schedule-content">
                    {contactsElements}
                </div>
                <iframe className="contacts-schedule-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua" allowFullScreen="" loading="lazy" />
            </div>
        </section>
    )
};

export default ContactsSchedule;