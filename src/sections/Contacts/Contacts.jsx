import {useTranslation} from "next-i18next";

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <div className="container">
                <h3 className="contacts-heading">Ми радi вам допомогти</h3>
                <ul className="contacts-list">
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-1.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Адреса</p>
                        <p className="contacts-text">01010, м Київ, вулиця Генерала Алмазова, 11</p>
                    </li>
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-2.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Електронна пошта</p>
                        <a href="mailto:gotovo.ds@gmail.com" className="contacts-link">gotovo.ds@gmail.com</a>
                    </li>
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-3.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Генеральний директор</p>
                        <p className="contacts-text">Кузмицька Анастасія Ігорівна</p>
                    </li>
                    <li className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Телефон гарячої лінії</p>
                        <a href="tel:0800300803" className="contacts-link">0 800 300 803</a>
                    </li>
                </ul>
            </div>
            <img className="contacts-img" src="/img/contacts.png" alt="Консультант" />
        </section>
    )
};

export default Contacts;