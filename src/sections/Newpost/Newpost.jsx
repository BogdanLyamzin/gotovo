import {useTranslation} from "next-i18next";

const Newpost = () => {
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>Повернутись</a>
                    <img className="service-page-logo" src="/img/Services/icon-6.png" alt="" />
                    <h2 className="service-page-title">Нова пошта вiддiлення № 400</h2>
                </div>
            </div>
        </section>
    )
};

export default Newpost;