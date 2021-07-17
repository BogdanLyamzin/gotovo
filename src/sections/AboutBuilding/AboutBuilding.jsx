import {useTranslation} from "next-i18next";

const AboutBuilding = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="article">
                    <h3 className="article-heading">Як будували «ГОТОВО»</h3>
                    <p className="article-text">
                        Проект нового центру надання адміністративних послуг було  презентовано у липнi 2015 року. Це була тiльки  iдея, навiть назви проекту ще не було – вона з’явилась згодом. Вже на початку серпня 2016-го документ-сервіс «ГОТОВО» відчинив двері для перших відвідувачів.
                    </p>
                    <p className="article-text">
                        Будівництво було розпочато у березні 2016 року і завершено у рекордні 4 місяці.
                    </p>
                    <p className="article-text">
                        Існувала принципова вимога до будівлі – вона мала бути прозорою. Адже за концепцією заходячи до закладу, вiдвiдувач має відчувати відкритість і прозорість. Саме тому стіни будівлі виконані зі скла. Всередині нема кабінетів та перегородок.
                    </p>
                    <p className="article-text">
                        Аби зробити перебування у центрі ще більш комфортним, було облаштовано кафе.
                    </p>
                </div>
                <img className="about-us-picture" src="/img/About-us/about-building.png" alt="" />
            </div>
            <img className="about-us-img _1" src="/img/dots.png" alt="" />
            <img className="about-us-img _2" src="/img/dots.png" alt="" />
        </section>
    )
};

export default AboutBuilding;