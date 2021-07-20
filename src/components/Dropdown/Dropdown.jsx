import {useState} from "react";

const Dropdown = ({btnText, children}) => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(prevState => !prevState);
    };
    const btnFullClassName = state ? "dropdown-btn active" : "dropdown-btn";
    const listStyles = state ? {display: 'block'} : {};
    return (
        <>
        <div className={btnFullClassName} onClick={toggle}>{btnText}</div>
        <ul className="dropdown-list" style={listStyles}>
            {children}
        </ul>
        </>
    )
};

export default Dropdown;