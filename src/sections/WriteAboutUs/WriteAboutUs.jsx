import {useTranslation} from "next-i18next";

const WriteAboutUs = () => {
    return (
        <section className="write-about-us">
            <div className="container">
                <h3 className="title">Про нас пишуть</h3>
                <div className="write-about-us-content">
                    <div className="write-about-us-item">
                        <img className="write-about-us-img" src="../img/thesvadba-logo.png" alt="partner-logo" />
                    </div>
                    <div className="write-about-us-item">
                        <img className="write-about-us-img" src="../img/thesvadba-logo.png" alt="partner-logo" />
                    </div>
                    <div className="write-about-us-item">
                        <img className="write-about-us-img" src="../img/thesvadba-logo.png" alt="partner-logo" />
                    </div>
                    <div className="write-about-us-item">
                        <img className="write-about-us-img" src="../img/thesvadba-logo.png" alt="partner-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WriteAboutUs;