import {useTranslation} from "next-i18next";

const AboutService = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="article">
                    <h3 className="article-heading">Як обслуговують клієнтів</h3>
                    <p className="article-text">
                        Швидкість надання послуг – завдяки електронному документообігу, зонуванню процесів оформлення документів та отримання рішень, а також наявності відокремлених фронт-офісу та бек-офісу. Час подачі документів не перевищує 20 хвилин, отримання рішень - до 2-х хвилин.
                    </p>
                    <p className="article-text">
                        Більшість документів можна отримати всього за 30 хвилин!
                    </p>
                    <p className="article-text">
                        Екстериторіальність – можливість оформлення більшості документів без прив’язки до місця проживання або місця знаходження об’єкту нерухомості.
                    </p>
                    <p className="article-text">
                        Можливість отримання послуг в зручний час. «ГОТОВО» працює без вихідних та перерви на обід.
                    </p>
                    <p className="article-text">
                        У «ГОТОВО» співробітники центру допомагають заповнити заяву клієнта, що дає можливість уникнути зайвих помилок.
                    </p>
                    <p className="article-text">
                        Безкоштовні консультації надаються безпосередньо у центрі, в онлайн-режимі та по номеру телефону: 0 800 300 803. Дзвінки на території України безкоштовні.
                    </p>
                </div>
                <img className="about-us-picture" src="/img/About-us/about-service.png" alt="" />
            </div>
            <img className="about-us-img _1" src="/img/dots.png" alt="" />
            <img className="about-us-img _2" src="/img/dots.png" alt="" />
        </section>
    )
};

export default AboutService;