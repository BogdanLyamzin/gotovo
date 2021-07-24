import {useState} from "react";

const Dropdown = ({heading, list, listTitle = null}) => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(prevState => !prevState);
    };
    const btnStyles = state ? "dropdown-btn active" : "dropdown-btn";
    const listTitleElement = listTitle ? <li className="dropdown-list-title">{listTitle}</li> : null;
    const listElements = list.map(({id, text}) => <li className="dropdown-item" key={id}>{text}</li>);
    const contentStyles = state ? {display: 'block'} : {};
    return (
        <div className="dropdown">
            <div className={btnStyles} onClick={toggle}>{heading}</div>
            <div className="dropdown-content" style={contentStyles}>
                <ul className="dropdown-list">
                    {listTitleElement}
                    {listElements}
                </ul>
            </div>
        </div>
    )
};

export default Dropdown;