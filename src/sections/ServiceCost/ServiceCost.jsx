import {useTranslation} from "next-i18next";

const ServiceCost = () => {
    return (
        <section className="service-cost">
            <div className="container">
                <h3 className="title">Вартість послуг</h3>
                <div className="service-cost-list">
                    <div className="service-cost-item">
                        <div>
                            <p className="service-cost-item-text">“Базовий”</p>
                            <p className="service-cost-item-text underline">6 777 грн</p>
                        </div>
                        <a href="#" className="btn _light">Детальнiше</a>
                    </div>
                    <div className="service-cost-item">
                        <div>
                            <p className="service-cost-item-text">“Стандарт”</p>
                            <p className="service-cost-item-text underline">9 189 грн</p>
                        </div>
                        <a href="#" className="btn _light">Детальнiше</a>
                    </div>
                    <div className="service-cost-item">
                        <div>
                            <p className="service-cost-item-text">Паспортний сервiс</p>
                            <p className="service-cost-item-text underline">13 141 грн</p>
                        </div>
                        <a href="#" className="btn _light">Детальнiше</a>
                    </div>
                    <div className="service-cost-item">
                        <div>
                            <p className="service-cost-item-text">“Базовий”</p>
                            <p className="service-cost-item-text underline">6 777 грн</p>
                        </div>
                        <a href="#" className="btn _light">Детальнiше</a>
                    </div>
                    <div className="service-cost-item">
                        <div>
                            <p className="service-cost-item-text">“Стандарт”</p>
                            <p className="service-cost-item-text underline">9 189 грн</p>
                        </div>
                        <a href="#" className="btn _light">Детальнiше</a>
                    </div>
                    <div className="service-cost-item">
                        <div>
                            <p className="service-cost-item-text">Паспортний сервiс</p>
                            <p className="service-cost-item-text underline">13 141 грн</p>
                        </div>
                        <a href="#" className="btn _light">Детальнiше</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ServiceCost;