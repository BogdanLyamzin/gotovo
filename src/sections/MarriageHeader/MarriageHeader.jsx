import {useTranslation} from "next-i18next";

const MarriageHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <h2 className="header-text-big">Шлюб за добу</h2>
                <p className="header-text-small">Державна реєстрація в самому центрі столиці.</p>
                <div className="header-buttons">
                    <a href="#" className="btn _dark _shadow _long">Запис до електронної черги</a>
                    <div className="contacts-item">
                        <span className="contacts-icon">
                            <img src="/img/Contacts/item-4.png" alt="contact icon" />
                        </span>
                        <p className="contacts-name">Телефон гарячої лінії</p>
                        <a href="tel:0800300803" className="contacts-link">0 800 300 803</a>
                    </div>
                </div>
            </div>
            <img className="header-img _mr-80" src="/img/marriage-header.png" alt="" />
        </header>
    )
};

export default MarriageHeader;