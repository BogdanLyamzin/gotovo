import {useTranslation} from "next-i18next";

const Immovables = () => {
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>Повернутись</a>
                    <img className="service-page-logo" src="/img/Services/icon-5.png" alt="" />
                    <h2 className="service-page-title">Юридичнi послуги у сферi реєстрування нерухомого майна</h2>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Консультація</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Консультація щодо:</li>
                        <li className="dropdown-item">Переліку передбачених законодавством необхідних документів для державної реєстрації речових прав на нерухоме майно - 400 грн</li>
                        <li className="dropdown-item">Проблемних питань пов'язаних із захистом власності від протиправних посягань - 400 грн</li>
                        <li className="dropdown-item">особливостей державної реєстрації речових прав на земельні ділянки та нерухоме майно - 400 грн</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Юридичнi послуги</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item">Складання запитів, звернень, листування з державними органами, зокрема з Міністерством юстиції України тощо - 1000 грн</li>
                        <li className="dropdown-item">Підготовка скарг до Колегії з розгляду скарг у сфері державної реєстрації щодо протиправних дій державного реєстратора - 2500 грн</li>
                        <li className="dropdown-item">Позовні заяви в адміністративному судочинстві щодо питань пов'язаних з державною реєстрацією речових прав - 2500 грн</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Immovables;