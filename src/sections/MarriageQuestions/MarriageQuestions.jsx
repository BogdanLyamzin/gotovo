import {useTranslation} from "next-i18next";

import Dropdown from "../../components/Dropdown";

const MarriageQuestions = () => {
    const { t } = useTranslation("marriage-questions");
    const dropdownItems = t('dropdown', {returnObjects: true});
    const dropdownElements = dropdownItems.map(({id, heading, list}) => <Dropdown heading={heading} list={list} key={id}/>);
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