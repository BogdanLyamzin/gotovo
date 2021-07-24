import {useTranslation} from "next-i18next";

import CustomLink from "../Link";

const ServicesList = () => {
    const { t } = useTranslation("services-list");
    const servicesItems = t('services-items', {returnObjects: true});
    const servicesElements = servicesItems.map(({id, img, href, target, text}) => {
        return (
            <div key={id} className="services-item">
                <img className="services-item-img" src={img} alt="services-icon" />
                <p className="services-item-text">{text}</p>
                <CustomLink href={href} className="btn _light" target={target}>
                    {t("btn")}
                </CustomLink>
            </div>
        )
    });
    return (
        <div className="services-list">
            {servicesElements}
        </div>
    )
};

export default ServicesList;