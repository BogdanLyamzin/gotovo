import {useTranslation} from "next-i18next";

import ServicesList from "../../components/ServicesList";

const Services = () => {
    const { t } = useTranslation("services");
    return (
        <section id="services" className="services">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <ServicesList />
            </div>
        </section>
    )
};

export default Services;