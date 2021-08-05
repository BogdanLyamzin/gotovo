import {useTranslation} from "next-i18next";
import { useState } from "react";

import Image from "../../components/Image";

const BrandedProductPage = ({page}) => {
    const { t } = useTranslation("product-list");
    const [count, setCount] = useState(1);
    const productItems = t('product-items', {returnObjects: true});
    const {img, name, description, price} = productItems[page];
    const featuresElements = productItems[page].features.map(({id, text}) => {
        return (
            <p key={id} className="product-features-item">{text}</p>
        )
    });

    const minus = (n) => {
        return (n > 1) ? n - 1 : 1;
    }

    return (
        <div className="product">
            <div className="container">
                <div className="product-item">
                    <div className="product-img" >
                        <Image link={img} imgWidth="560" />
                    </div>
                    {/* <img className="product-img" src={img} alt="photo" /> */}
                    <div className="product-info">
                        <h2 className="product-name">{name}</h2>
                        <p className="product-description">{description}</p>
                        <div className="product-features">
                            {featuresElements}
                        </div>
                        
                        <div className="product-buy">
                            <p className="product-price">{price}</p>
                            <div className="product-counter">
                                <span className="product-counter-btn" onClick={() => setCount((num) => minus(num))}></span>
                                <span className="product-counter-value">{count}</span>
                                <span className="product-counter-btn _plus" onClick={() => setCount((num) => num + 1)}></span>
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