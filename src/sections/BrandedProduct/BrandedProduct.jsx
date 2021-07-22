import {useTranslation} from "next-i18next";

const BrandedProduct = () => {
    const { t } = useTranslation("branded-product");
    const productsItems = t("products", {returnObjects: true});
    const productsElements = productsItems.map(({img, name, price}) => {
        return (
            <a href="#" className="branded-item">
                <div className="branded-item-photo">
                    <img className="branded-item-img" src={img} alt="Product item image" />
                </div>
                <div className="branded-item-info">
                    <p className="branded-item-name">{name}</p>
                    <p className="branded-item-price">{price}</p>
                </div>
            </a>
        )
    });
    return (
        <section className="branded">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <div className="branded-items">
                    {productsElements}
                </div>
            </div>
        </section>
    )
};

export default BrandedProduct;