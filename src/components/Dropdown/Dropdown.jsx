import {useState, useRef} from "react";

const Dropdown = ({heading, list, listTitle = null}) => {
    const [state, setState] = useState(false);
    const contentRef = useRef(null);
    const toggle = () => {
        setState(prevState => !prevState);
        const {style, scrollHeight} = contentRef.current;
        style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
    };
    const btnStyles = state ? "dropdown-btn active" : "dropdown-btn";
    const listTitleElement = listTitle ? <li className="dropdown-list-title">{listTitle}</li> : null;
    const listElements = list.map(({id, text}) => <li className="dropdown-item" key={id}>{text}</li>);

    return (
        <div className="dropdown">
            <div className={btnStyles} onClick={toggle}>{heading}</div>
            <div className="dropdown-content" ref={contentRef}>
                <ul className="dropdown-list">
                    {listTitleElement}
                    {listElements}
                </ul>
            </div>
        </div>
    )
};

export default Dropdown;