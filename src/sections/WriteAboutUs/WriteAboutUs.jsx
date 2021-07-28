import {useTranslation} from "next-i18next";

const WriteAboutUs = () => {
    const { t } = useTranslation("write-about-us");
    return (
        <section className="write-about-us">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <div className="write-about-us-content">
                    <div className="write-about-us-item _ictv">
                        <img className="write-about-us-img" src="../img/write-about-us/ictv.png" alt="partner-logo" />
                    </div>
                    <div className="write-about-us-item _tsn">
                        <img className="write-about-us-img" src="../img/write-about-us/tsn.png" alt="partner-logo" />
                    </div>
                    <div className="write-about-us-item _trk">
                        <img className="write-about-us-img" src="../img/write-about-us/trk_ukraine.png" alt="partner-logo" />
                    </div>
                    <div className="write-about-us-item _cor">
                        <img className="write-about-us-img" src="../img/write-about-us/correspondent.png" alt="partner-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WriteAboutUs;