import {useTranslation} from "next-i18next";

const OurTarget = () => {
    const { t } = useTranslation("our-target");
    return (
        <section className="our-target">
            <div className="our-target-content">
                <img className="ornament _left" src="/img/ornament.svg" alt="Орнамент" />
                <div className="container">
                    <div className="article _half">
                        <h3 className="article-heading">{t("title")}</h3>
                        <p className="article-text">{t("text")}</p>
                    </div>
                </div>
            </div>
            <div className="our-target-map">
                <div className="our-target-map-text">
                    <span className="our-target-map-text-bold">1</span>
                    <span className="our-target-map-text-bold">/</span>
                    <span className="our-target-map-text-bold">128,650,000</span>
                    <span className="our-target-map-text-thin">{t("center")}</span>
                    <span className="our-target-map-text-thin"></span>
                    <span className="our-target-map-text-thin">{t("visitors")}</span>
                </div>
                <img src="/img/map.svg" alt="Карта" />
            </div>
        </section>
    )
};

export default OurTarget;