import {useTranslation} from "next-i18next";

import { useState } from "react";

import Dropdown from "../../components/Dropdown";

const MarriageQuestions = () => {
    const { t } = useTranslation("marriage-questions");
    const dropdownItems = t('dropdown', {returnObjects: true});

    const [openMenuIdx, setOpenMenuIdx] = useState(false);
    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const dropdownElements = dropdownItems.map(({id, heading, list}, index) => {
        return (
            <Dropdown heading={heading} list={list} key={id} openMenuIdx={openMenuIdx} toggle={toggle} index={index}/>
        )
    });
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