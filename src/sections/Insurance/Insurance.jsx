import {useTranslation} from "next-i18next";

const Insurance = () => {
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>Повернутись</a>
                    <img className="service-page-logo" src="../img/Services/icon-2.png" alt="" />
                    <h2 className="service-page-title">Страхування</h2>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Медичне страхування подорожуючих за кордон</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Перелік документів:</li>
                        <li className="dropdown-item">Паспорт громадянина України для виїзду за кордон;</li>
                        <li className="dropdown-item">Ідентифікаційний код платника податків;</li>
                        <li className="dropdown-item">Для дитини надаються закордонний паспорт дитини та закордонний паспорт того з батьків, з ким виїжджає дитина.</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Автомобільне страхування "Зелена карта"</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Перелік документів:</li>
                        <li className="dropdown-item">Паспорт громадянина України для виїзду за кордон;</li>
                        <li className="dropdown-item">Ідентифікаційний код платника податків;</li>
                        <li className="dropdown-item">Водійське посвідчення;</li>
                        <li className="dropdown-item">Технічний паспорт на автомобіль.</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Автоцивілка</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Перелік документів:</li>
                        <li className="dropdown-item">Паспорт громадянина України або посвідчення водія;</li>
                        <li className="dropdown-item">Ідентифікаційний код платника податків;</li>
                        <li className="dropdown-item">Технічний паспорт на автомобіль.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Insurance;