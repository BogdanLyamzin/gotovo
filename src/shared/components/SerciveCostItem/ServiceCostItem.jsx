import { useState, useRef } from "react";

const ServiceCostItem = ({ name, list, openBtnText, closeBtnText, text = null, price = null }) => {

    const listElements = list.map(({ id, text }) => {
        return <li key={id} className="service-cost-list-item">{text}</li>
    });

    const [state, setState] = useState(false);
    const contentRef = useRef(null);


    const toggle = () => {
        setState(prevState => !prevState);

        const {style, scrollHeight} = contentRef.current;
        style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
        // console.log(elementHeight);
    };

    const isActive = state ? 'active' : null;
    const btnText = state ? closeBtnText : openBtnText;

    return (
        <div className={`service-cost-item ${isActive}`}>
            <div className="service-cost-item-heading">
                <p className="service-cost-item-text">{name}</p>
                {text ? <p className="service-cost-item-small-text">{text}</p> : null}
                {price ? <p className="service-cost-item-text underline">{price}</p> : null}
            </div>
            <div className="service-cost-content" ref={contentRef} >
                <ul>
                    {listElements}
                </ul>
            </div>
            <div className={`btn service-cost-btn ${isActive}`} onClick={() => toggle()}>{btnText}</div>
        </div>
    )
};

export default ServiceCostItem;