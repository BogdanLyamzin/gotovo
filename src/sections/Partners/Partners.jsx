import {useTranslation} from "next-i18next";

const Partners = () => {
    const { t } = useTranslation("partners");
    return (
        <section className="partners">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <div className="partners-content">
                    <div className="partners-item">
                        <img className="partners-img" src="/img/Partners/item-1.png" alt="partner-logo" />
                    </div>
                    <div className="partners-item">
                        <img className="partners-img" src="/img/Partners/item-2.png" alt="partner-logo" />
                    </div>
                    <div className="partners-item">
                        <img className="partners-img" src="/img/Partners/item-3.png" alt="partner-logo" />
                    </div>
                    <div className="partners-item">
                        <img className="partners-img" src="/img/Partners/item-4.png" alt="partner-logo" />
                    </div>
                    <div className="partners-item">
                        <img className="partners-img" src="/img/Partners/item-5.png" alt="partner-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Partners;