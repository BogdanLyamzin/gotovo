import {useTranslation} from "next-i18next";
import { useState } from "react";

const MarriageDocuments = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { t } = useTranslation("marriage-documents");
    const tabItems = t("tabs", {returnObjects: true});

    const tabHeading = tabItems.map(({id, title}, index) => {
        const fullClassName = (activeTab === index) ? "marriage-documents-tab selected" : "marriage-documents-tab";
        return <li key={id} className={fullClassName} onClick={()=> setActiveTab(index)}>{title}</li>
    });
    // const {content} = tabItems.find((_, index) => activeTab === index);
    // const tabElements = content.map(({id, text, type = null}) => {
    //     const elClassName = type ? "marriage-documents-item" : "marriage-documents-list-item";
    //     return <li key={id} className={elClassName}>{text}</li>
    // });
    const tabElements = tabItems.map(({id, content}, index) => {
        const tabList = content.map(({id, text, type = null}) => {
            const elClassName = type ? "marriage-documents-item" : "marriage-documents-list-item";
            return <li key={id} className={elClassName}>{text}</li>
        });
        const fullClassName = (activeTab === index) ? "marriage-documents-tab-content selected" : "marriage-documents-tab-content";
        return (
            <ul key={id} className={fullClassName}>
                {tabList}
            </ul>
        )
    });

    return (
        <section className="marriage-documents">
            <div className="container">
                <h2 className="title">{t("title")}</h2>
                <div className="marriage-documents-content">
                    <ol className="marriage-documents-tab-list">
                        {tabHeading}
                        {/* <li className="marriage-documents-tab selected">{t("tab-1")}</li>
                        <li className="marriage-documents-tab">{t("tab-2")}</li>
                        <li className="marriage-documents-tab">{t("tab-3")}</li> */}
                    </ol>
                    {/* <ul>
                        {tabElements}
                    </ul> */}
                    {tabElements}
                    {/* <ul>
                        <li className="marriage-documents-item">{t("tab-1-text-1")}</li>
                        <li className="marriage-documents-item">{t("tab-1-text-2")}</li>
                        <li className="marriage-documents-item">{t("tab-1-text-3")}</li>
                        <li className="marriage-documents-item">{t("tab-1-text-4")}</li>
                    </ul> */}
                </div>
            </div>
        </section>
    )
};

export default MarriageDocuments;