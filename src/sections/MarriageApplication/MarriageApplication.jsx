import {useTranslation} from "next-i18next";

const MarriageApplication = () => {
    const { t } = useTranslation("marriage-application");

    const listItems = t('list', {returnObjects: true});

    const listElements = listItems.map(({id, text}) => {
        return <li key={id} className="service-article-list-item">{text}</li>
    });

    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>{t("btn")}</a>
                    <img className="service-page-logo" src="/img/Services/icon-1.png" alt="icon" />
                    <h2 className="service-page-title">{t("title")}</h2>
                </div>
                <div className="service-article">
                    <p className="service-article-text">{t("text")}</p>
                    <ul>
                        {listElements}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default MarriageApplication;