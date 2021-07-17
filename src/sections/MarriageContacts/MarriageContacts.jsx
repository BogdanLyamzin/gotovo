import {useTranslation} from "next-i18next";

const MarriageContacts = () => {
    return (
        <section className="marriage-contacts">
            <div className="container marriage-contacts-content">
                <div>
                    <h2 className="title marriage-contacts-label">Залиште заявку і отримаєте безкоштовну консультацію</h2>
                    <input placeholder="Ваше Ім'я" type="text" className="marriage-contacts-input" />
                    <input placeholder="Ваш Email" type="text" className="marriage-contacts-input" />
                    <input placeholder="Ваш Телефон" type="text" className="marriage-contacts-input" />
                    <textarea placeholder="Ваше Повідомлення" name="" id="" cols="30" rows="10"className="marriage-contacts-input" />
                    <a href="#" className="btn _dark _long marriage-contacts-btn">Отримати консультацiю</a>
                </div>
                <div>
                    <div className="contacts-item marriage-contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Телефон</p>
                        <a href="tel:0800300803" className="contacts-link">0 800 300 803</a>
                    </div>
                    <div className="contacts-item marriage-contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-5.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name marriage-contacts-item">Робочий час</p>
                        <p className="contacts-text marriage-contacts-schedule">
                            <span>Пн — Пт</span>
                            <span>9:00 — 20:00</span>
                            <span>Сб— Нд</span>
                            <span>9:00 — 18:00</span>
                        </p>
                    </div>
                    <div className="contacts-item marriage-contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-1.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Адреса</p>
                        <p className="contacts-text">01010, м Київ, вулиця Генерала Алмазова, 11</p>
                    </div>

                    <iframe className="marriage-contacts-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua" allowfullscreen="" loading="lazy" />
                </div>
            </div>
        </section>
    )
};

export default MarriageContacts;