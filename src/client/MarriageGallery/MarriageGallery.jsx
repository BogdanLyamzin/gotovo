import {useTranslation} from "next-i18next";

const MarriageGallery = () => {
    const { t } = useTranslation("marriage-gallery");
    return (
        <section className="marriage-gallery">
            <div className="container">
                <h2 className="title">{t("title")}</h2>
                <div className="marriage-gallery-content">
                    <div className="marriage-gallery-item _1"></div>
                    <div className="marriage-gallery-item _2"></div>
                    <div className="marriage-gallery-item _3"></div>
                    <div className="marriage-gallery-item _4"></div>
                    <div className="marriage-gallery-item _5"></div>
                    <div className="marriage-gallery-item _6"></div>
                </div>
            </div>
        </section>
    )
};

export default MarriageGallery;