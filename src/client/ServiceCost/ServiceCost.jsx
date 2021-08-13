import {useTranslation} from "next-i18next";

import ServiceCostItem from "../../shared/components/SerciveCostItem";

const ServiceCost = () => {
    const { t } = useTranslation("service-cost");
    const costItems = t('list', {returnObjects: true});

    const costElements = costItems.map(({ id, name, list, text, price }) => {
        return <ServiceCostItem key={id} name={name} text={text} price={price} list={list} openBtnText={t("openBtn")} closeBtnText={t("closeBtn")} />
    });

    return (
        <section className="service-cost">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <div className="service-cost-list">
                    {costElements}
                </div>
            </div>
        </section>
    )
};

export default ServiceCost;