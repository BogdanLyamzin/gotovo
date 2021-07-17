import {useTranslation} from "next-i18next";

const Apostille = () => {
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>Повернутись</a>
                    <img className="service-page-logo" src="/img/Services/icon-4.png" alt="" />
                    <h2 className="service-page-title">Апостилювання</h2>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Апостилювання документів</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Перелік документів:</li>
                        <li className="dropdown-item">Свідоцво про шлюб, про народження, про смерть, про розірвання шлюбу</li>
                        <li className="dropdown-item">Довідки про зміну імені, прізвища</li>
                        <li className="dropdown-item">Витяг з ДРАЦС</li>
                        <li className="dropdown-item">Судові рішення, судові довідки</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Apostille;