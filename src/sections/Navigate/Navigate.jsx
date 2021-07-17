import {useTranslation} from "next-i18next";

const Navigate = () => {
    return (
        <section className="navigate">
            <div className="navigate-content">
                <img className="ornament _left" src="/img/ornament.svg" alt="Орнамент" />
                <img className="ornament _right" src="/img/ornament.svg" alt="Орнамент" />
                <div className="container navigate-container">
                    <div className="article _half">
                        <h3 className="article-heading">Орієнтуватися у документ-сервісі дуже просто.</h3>
                        <p className="article-text">
                            Відвідувача, який зайшов до примiщення, зустрiчають адміністратори на ресепшен, якi проiнформують його по всiх питаннях та нададуть покрокову інструкцію дiй
                        </p>
                    </div>
                    <a href="#" className="btn _dark">Дiзнатись бiльше</a>
                </div>
            </div>
        </section>
    )
};

export default Navigate;