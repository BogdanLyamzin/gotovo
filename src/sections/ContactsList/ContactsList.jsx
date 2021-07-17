import {useTranslation} from "next-i18next";

const ContactsList = () => {
    return (
        <section className="contacts-2">
            <div className="container">
                <h2 className="title contacts-2-title">Контакти</h2>
                <div className="contacts-2-content">
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-1.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Адреса</p>
                        <p className="contacts-text">01010, м Київ, вулиця Генерала Алмазова, 11</p>
                    </div>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-2.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Електронна пошта</p>
                        <a href="mailto:gotovo.ds@gmail.com" className="contacts-link">gotovo.ds@gmail.com</a>
                    </div>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-3.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Генеральний директор</p>
                        <p className="contacts-text">Кузмицька Анастасія Ігорівна</p>
                    </div>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Телефон гарячої лінії</p>
                        <a href="tel:0800300803" className="contacts-link">0 800 300 803</a>
                    </div>
                </div>
            </div>
            <img className="contacts-2-img" src="/img/square.png" alt="" />
        </section>
    )
};

export default ContactsList;