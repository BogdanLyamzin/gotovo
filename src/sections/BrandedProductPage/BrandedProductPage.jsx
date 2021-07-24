import {useTranslation} from "next-i18next";

const BrandedProductPage = ({page}) => {
    const { t } = useTranslation("product-list");
    const productItems = t('product-items', {returnObjects: true});
    const {img, name, description, price} = productItems[page];
    const featuresElements = productItems[page].features.map(({id, text}) => {
        return (
            <p key={id} className="product-features-item">{text}</p>
        )
    });

    return (
        <div className="product">
            <div className="container">
                <div className="product-item">
                    <img className="product-img" src={img} alt="photo" />
                    <div className="product-info">
                        <h2 className="product-name">{name}</h2>
                        <p className="product-description">{description}</p>
                        <div className="product-features">
                            {featuresElements}
                        </div>
                        
                        <div className="product-buy">
                            <p className="product-price">{price}</p>
                            <div className="product-counter">
                                <span className="product-counter-btn"></span>
                                <span className="product-counter-value">1</span>
                                <span className="product-counter-btn _plus"></span>
                            </div>
                        </div>
                        
                        <input placeholder={t('input')} type="text" className="product-input" />
                        <div>
                        
                        <a href="#" className="btn _dark product-btn">{t('btn')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrandedProductPage;