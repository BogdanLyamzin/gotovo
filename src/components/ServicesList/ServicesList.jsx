import {useTranslation} from "next-i18next";

const ServicesList = () => {
    return (
        <div className="services-list">
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-1.png" alt="services-icon" />
                <p className="services-item-text">Шлюб за добу</p>
                <a href="./wedding-for-day" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-2.png" alt="services-icon" />
                <p className="services-item-text">Страхування</p>
                <a href="./services/insurance" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-3.png" alt="services-icon" />
                <p className="services-item-text">Паспортний сервiс</p>
                <a href="./services/passport" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-4.png" alt="services-icon" />
                <p className="services-item-text">Апостилювання</p>
                <a href="./services/apostille" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-5.png" alt="services-icon" />
                <p className="services-item-text">Юридичнi послуги у сферi реєстрування нерухомого майна</p>
                <a href="./services/immovables" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-6.png" alt="services-icon" />
                <p className="services-item-text">Нова пошта вiддiлення № 400</p>
                <a href="./services/newpost" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-7.png" alt="services-icon" />
                <p className="services-item-text">UPS - Україна: Мiжнароднi перевезення</p>
                <a href="./services/ups" className="btn _light">Детальнiше</a>
            </div>
            <div className="services-item">
                <img className="services-item-img" src="/img/Services/icon-8.png" alt="services-icon" />
                <p className="services-item-text">“Дiя” квалiфiкований електронний пiдпис</p>
                <a href="./services/diya" className="btn _light">Детальнiше</a>
            </div>
        </div>
    )
};

export default ServicesList;