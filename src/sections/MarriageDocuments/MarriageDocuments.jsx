import {useTranslation} from "next-i18next";

const MarriageDocuments = () => {
    const { t } = useTranslation("marriage-documents");
    return (
        <section className="marriage-documents">
            <div className="container">
                <h2 className="title">{t("title")}</h2>
                <div className="marriage-documents-content">
                    <ol>
                        <li className="marriage-documents-tab selected">{t("tab-1")}</li>
                        <li className="marriage-documents-tab">{t("tab-2")}</li>
                        <li className="marriage-documents-tab">{t("tab-3")}</li>
                    </ol>
                    <ul>
                        <li className="marriage-documents-item">{t("tab-1-text-1")}</li>
                        <li className="marriage-documents-item">{t("tab-1-text-2")}</li>
                        <li className="marriage-documents-item">{t("tab-1-text-3")}</li>
                        <li className="marriage-documents-item">{t("tab-1-text-4")}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default MarriageDocuments;