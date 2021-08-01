import {useTranslation} from "next-i18next";

import Dropdown from "../../components/Dropdown";

const Insurance = () => {
    const { t } = useTranslation("insurance");
    const dropdownItems = t('dropdown', {returnObjects: true});
    const dropdownElements = dropdownItems.map(({id, heading, listTitle, list}) => {
        return (
            <Dropdown heading={heading} listTitle={listTitle} list={list} key={id}/>
        )
    });
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>{t("btn")}</a>
                    <img className="service-page-logo" src="../img/Services/icon-2.png" alt="" />
                    <h2 className="service-page-title">{t("title")}</h2>
                </div>
                {dropdownElements}
            </div>
        </section>
    )
};

export default Insurance;