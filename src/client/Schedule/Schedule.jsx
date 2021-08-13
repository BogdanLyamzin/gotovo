import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import ScheduleItem from "./ScheduleItem";

import styles from "./Schedule.module.scss";

const Schedule = () => {
    const { t } = useTranslation("schedule");

    const contactsItems = t('schedule', {returnObjects: true});

    const contactsElements = contactsItems.map(({id, name, img, href, target, scheduleList}) => {
        return (
            <ScheduleItem key={id} name={name} img={img} href={href} target={target} list={scheduleList} />
        )
    });

    return (
        <section className={styles["schedule"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["content"]}>
                    {contactsElements}
                </div>
                <iframe className={styles["map"]} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6669450101253!2d30.538946315696933!3d50.42867667947236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e86f9427f%3A0x2470d8a05ef3d8eb!2z0YPQuy4g0JrRg9GC0YPQt9C-0LLQsCwgMTEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1620860107854!5m2!1sru!2sua" allowFullScreen="" loading="lazy" />
            </Container>
        </section>
    )
};

export default Schedule;