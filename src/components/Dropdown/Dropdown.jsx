import {useState} from "react";

// const Dropdown = ({btnText, children}) => {
//     const [state, setState] = useState(false);
//     const toggle = () => {
//         setState(prevState => !prevState);
//     };
//     const btnFullClassName = state ? "dropdown-btn active" : "dropdown-btn";
//     const listStyles = state ? {display: 'block'} : {};
//     return (
//         <>
//         <div className={btnFullClassName} onClick={toggle}>{btnText}</div>
//         <ul className="dropdown-list" style={listStyles}>
//             {children}
//         </ul>
//         </>
//     )
// };

// const Dropdown = ({heading, list, listTitle = null}) => {
//     const [state, setState] = useState(false);
//     const toggle = () => {
//         setState(prevState => !prevState);
//     };
//     const btnFullClassName = state ? "dropdown-btn active" : "dropdown-btn";
//     const listStyles = state ? {display: 'block'} : {};
//     const listTitleElement = listTitle ? <li className="dropdown-list-title">{listTitle}</li> : null;
//     const listElements = list.map(({text}) => <li className="dropdown-item">{text}</li>);
//     return (
//         <div className="dropdown">
//             <div className={btnFullClassName} onClick={toggle}>{heading}</div>
//             <div className="dropdown-content">
//                 <ul className="dropdown-list" style={listStyles}>
//                     {listTitleElement}
//                     {listElements}
//                 </ul>
//             </div>
//         </div>
//     )
// };

const Dropdown = ({heading, list, listTitle = null}) => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(prevState => !prevState);
    };
    const btnStyles = state ? "dropdown-btn active" : "dropdown-btn";
    const listTitleElement = listTitle ? <li className="dropdown-list-title">{listTitle}</li> : null;
    const listElements = list.map(({text}) => <li className="dropdown-item">{text}</li>);
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