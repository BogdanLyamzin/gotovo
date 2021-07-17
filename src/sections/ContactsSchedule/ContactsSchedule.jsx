import {useTranslation} from "next-i18next";

const ContactsSchedule = () => {
    return (
        <section className="contacts-schedule">
            <div className="container">
                <h2 className="title">Графiк роботи</h2>
                <div className="contacts-schedule-content">
                    <div className="contacts-schedule-item">
                        <img src="/img/Services/icon-1.png" className="contacts-schedule-img" alt="" />
                        <div>
                            <p className="contacts-schedule-name">Шлюб за добу</p>
                            <p className="contacts-schedule-text">Пн-Пт 9:00-20:00</p>
                            <p className="contacts-schedule-text">Сб-Нд 9:00-18:00</p>
                        </div>
                    </div>
                    <div className="contacts-schedule-item">
                        <img src="/img/Services/icon-2.png" className="contacts-schedule-img" alt="" />
                        <div>
                            <p className="contacts-schedule-name">Страхування</p>
                            <p className="contacts-schedule-text">Пн-Сб 9:00-18:00</p>
                            <p className="contacts-schedule-text">Нд - вихiдний</p>
                        </div>
                    </div>
                    <div className="contacts-schedule-item">
                        <img src="/img/Services/icon-3.png" className="contacts-schedule-img" alt="" />
                        <div>
                            <p className="contacts-schedule-name">Паспортний сервiс</p>
                            <p className="contacts-schedule-text">Пн-Пт 9:00-20:00</p>
                            <p className="contacts-schedule-text">Сб-Нд 9:00-18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactsSchedule;