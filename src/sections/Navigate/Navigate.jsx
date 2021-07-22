import {useTranslation} from "next-i18next";

import CustomLink from "../../components/Link";

const Navigate = () => {
    const { t } = useTranslation("navigate");
    return (
        <section className="navigate">
            <div className="navigate-content">
                <img className="ornament _left" src="/img/ornament.svg" alt="Орнамент" />
                <img className="ornament _right" src="/img/ornament.svg" alt="Орнамент" />
                <div className="container navigate-container">
                    <div className="article _half">
                        <h3 className="article-heading">{t("heading")}</h3>
                        <p className="article-text">{t("text")}</p>
                    </div>
                    <CustomLink href={t("href")} className="btn _dark">
                        {t("btn")}
                    </CustomLink>
                </div>
            </div>
        </section>
    )
};

export default Navigate;