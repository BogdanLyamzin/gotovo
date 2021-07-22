import {useTranslation} from "next-i18next";

import Dropdown from "../../components/Dropdown";

// const MarriageQuestions = () => {
//     const { t } = useTranslation("marriage-questions");
//     return (
//         <section className="marriage-questions">
//             <div className="container">
//                 <h2 className="title">{t("title")}</h2>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-1")}>
//                         <p className="dropdown-item">{t("answer-1")}</p>
//                     </Dropdown>
//                 </div>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-2")}>
//                         <p className="dropdown-item">{t("answer-2")}</p>
//                     </Dropdown>
//                 </div>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-3")}>
//                         <p className="dropdown-item">{t("answer-3")}</p>
//                     </Dropdown>
//                 </div>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-4")}>
//                         <p className="dropdown-item">{t("answer-4")}</p>
//                     </Dropdown>
//                 </div>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-5")}>
//                         <p className="dropdown-item">{t("answer-5")}</p>
//                     </Dropdown>
//                 </div>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-6")}>
//                         <p className="dropdown-item">{t("answer-6")}</p>
//                     </Dropdown>
//                 </div>
//                 <div className="dropdown">
//                     <Dropdown btnText={t("question-7")}>
//                         <p className="dropdown-item">{t("answer-7")}</p>
//                     </Dropdown>
//                 </div>
//             </div>
//         </section>
//     )
// };

const MarriageQuestions = () => {
    const { t } = useTranslation("marriage-questions");
    const dropdownItems = t('dropdown', {returnObjects: true});
    const dropdownElements = dropdownItems.map(({heading, list}) => <Dropdown heading={heading} list={list}/>);
    return (
        <section className="marriage-questions">
            <div className="container">
                <h2 className="title">{t("title")}</h2>
                {dropdownElements}
            </div>
        </section>
    )
};

export default MarriageQuestions;