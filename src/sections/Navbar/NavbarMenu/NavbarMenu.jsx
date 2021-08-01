import { useTranslation } from "next-i18next";
import { useState, useRef } from "react";

import CustomLink from "../../../components/Link";
import styles from "../Navbar.module.scss";

// const NavbarMenu = ({ type }) => {
//     const { t } = useTranslation("navbar");
//     const menuItems = t("menu", { returnObjects: true });

//     const menuElements = menuItems.map(({ id, href, text, list = null }) => {
//         if (list) {
//             const [state, setState] = useState(false);
//             const contentRef = useRef(null);
//             const toggle = () => {
//                 setState(prevState => !prevState);
//                 const {style, scrollHeight} = contentRef.current;
//                 style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
//             };
//             const isActive = state ? "active" : "";
//             const menuElementsList = list.map(({ id, href, text }) => {
//                 return (
//                     <li className={styles["nav-menu-dropdown-item"]} key={id}>
//                         <CustomLink href={href} className={styles["nav-menu-dropdown-link"]}>
//                             {text}
//                         </CustomLink>
//                     </li>
//                 )
//             });
//             return (
//                 <li className={styles["nav-menu-item"]} key={id} onClick={toggle}>
//                     <span className={`${styles["nav-menu-link"]} ${styles[isActive]}`}>
//                         {text}
//                     </span>
//                     <div className={`${styles["nav-menu-dropdown"]} ${styles[isActive]}`} ref={contentRef}>
//                         <ul className={`${styles["nav-menu-dropdown-list"]}`}>
//                             {menuElementsList}
//                         </ul>
//                     </div>
//                 </li>
//             );
//         } else {
//             return (
//                 <li className={styles["nav-menu-item"]} key={id}>
//                     <CustomLink href={href} className={styles["nav-menu-link"]}>
//                         {text}
//                     </CustomLink>
//                 </li>
//             );
//         }
//     });

//     return(
//         <ul className={`${styles["nav-menu"]} ${styles[type]}`}>
//             {menuElements}
//         </ul>
//     )
// }

// const NavbarMenu = ({ type }) => {
//     const { t } = useTranslation("navbar");
//     const menuItems = t("menu", { returnObjects: true });

//     // const menuElements = [];

//     const [active, setActive] = useState(0);
//     // const contentRef = useRef(null);
//     // const toggle = () => {
//     //     setState(prevState => !prevState);
        
//     // };

//     // const toggle = (e) => {
//     //     let target = e.target.closest('li');
//     //     const {style, scrollHeight} = contentRef.current;
//     //     style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
//     // }

//     // const toggle = (i) => {
//     //     if (selected === i) {
//     //         return setSelected(null)
//     //     }
//     //     setSelected(i);
//     // }

//     const menuElements = menuItems.map(({ id, href, text, list = null }) => {
//         if (list) {
//             const contentRef = useRef(null);
//             // if (active === id) {
//             //     const {style, scrollHeight} = contentRef.current;
//             //     style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
//             // }
//             // const isActive = (active === id) ? "active" : "";
//             let isActive = (active === id) ? "active" : "";

//             const ifActive = (id) => {
//                 console.log(id);
//                 const {style, scrollHeight} = contentRef.current;
//                     style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
//                 if (active === id) {
//                     isActive = "";
//                     return 0;
//                 } else {
                    
//                     isActive = "active";
//                     return id;
//                 }
//             }

//             const menuElementsList = list.map(({ id, href, text }) => {
//                 return (
//                     <li className={styles["nav-menu-dropdown-item"]} key={id}>
//                         <CustomLink href={href} className={styles["nav-menu-dropdown-link"]}>
//                             {text}
//                         </CustomLink>
//                     </li>
//                 )
//             });
//             return (
//                 <li className={styles["nav-menu-item"]} key={id} onClick={() => setActive((id) => ifActive(id))}>
//                     <span className={`${styles["nav-menu-link"]} ${styles[isActive]}`}>
//                         {text}
//                     </span>
//                     <div className={`${styles["nav-menu-dropdown"]} ${styles[isActive]}`} ref={contentRef}>
//                         <ul className={`${styles["nav-menu-dropdown-list"]}`}>
//                             {menuElementsList}
//                         </ul>
//                     </div>
//                 </li>
//             );
//         } else {
//             return (
//                 <li className={styles["nav-menu-item"]} key={id}>
//                     <CustomLink href={href} className={styles["nav-menu-link"]}>
//                         {text}
//                     </CustomLink>
//                 </li>
//             );
//         }
//     });

//     return(
//         <ul className={`${styles["nav-menu"]} ${styles[type]}`}>
//             {menuElements}
//         </ul>
//     )
// }

const NavbarMenu = ({ type }) => {
    const { t } = useTranslation("navbar");
    const menuItems = t("menu", { returnObjects: true });

    const [openMenuIdx, setOpenMenuIdx] = useState(false);
    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const menuElements = menuItems.map(({ id, href, text, list = null }, index) => {
        if (list) {
            const contentRef = useRef(null);

            const isActive = (index === openMenuIdx) ? "active" : "";
            const menuElementList = list.map(({ id, href, text }) => {
                return (
                    <li className={styles["nav-menu-dropdown-item"]} key={id}>
                        <CustomLink href={href} className={styles["nav-menu-dropdown-link"]}>
                            {text}
                        </CustomLink>
                    </li>
                )
            });

            let elementStyle = {};
            if(contentRef.current && (index === openMenuIdx)) {
                const {style, scrollHeight} = contentRef.current;
                elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
            }

            return (
                <li className={styles["nav-menu-item"]} key={id} onClick={() => toggle(index)}>
                    <span className={`${styles["nav-menu-link"]} ${styles[isActive]}`}>
                        {text}
                    </span>
                    <div className={`${styles["nav-menu-dropdown"]} ${styles[isActive]}`} ref={contentRef} style={elementStyle}>
                        <ul className={`${styles["nav-menu-dropdown-list"]}`}>
                            {menuElementList}
                        </ul>
                    </div>
                </li>
            );
        } else {
            return (
                <li className={styles["nav-menu-item"]} key={id}>
                    <CustomLink href={href} className={styles["nav-menu-link"]}>
                        {text}
                    </CustomLink>
                </li>
            );
        }
    });

    return(
        <ul className={`${styles["nav-menu"]} ${styles[type]}`}>
            {menuElements}
        </ul>
    )
}

export default NavbarMenu;