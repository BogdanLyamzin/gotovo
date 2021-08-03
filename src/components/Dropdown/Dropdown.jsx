import {useRef} from "react";

const Dropdown = ({ heading, list, openMenuIdx, toggle, index, listTitle = null }) => {
    const contentRef = useRef(null);
    const isActive = (index === openMenuIdx) ? "dropdown-btn active" : "dropdown-btn";
    const listTitleElement = listTitle ? <li className="dropdown-list-title">{listTitle}</li> : null;

    const listElements = list.map(({id, text}) => <li className="dropdown-item" key={id}>{text}</li>);

    let elementStyle = {};

    if (contentRef.current && (index === openMenuIdx)) {
        const {style, scrollHeight} = contentRef.current;
        elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
    }

    return (
        <div className="dropdown" onClick={() => toggle(index)}>
            <div className={isActive} >{heading}</div>
            <div className="dropdown-content" ref={contentRef} style={elementStyle}>
                <ul className="dropdown-list">
                    {listTitleElement}
                    {listElements}
                </ul>
            </div>
        </div>
    )
};

export default Dropdown;