import PropTypes from 'prop-types';

import styles from "./ContactsItem.module.scss";

const ContactsItem = ({ name, text, href, img }) => {
    const textElement = href ? (
        <a href={href} className={styles["link"]}>{text}</a>
    ) : (
        <p className={styles["text"]}>{text}</p>
    );
    return (
        <div className={styles["item"]}>
            <span className={styles["icon"]}>
                <img src={img} alt="Contact icon" />
            </span>
            <p className={styles["name"]}>{name}</p>
            {textElement}
        </div>
    )
};

ContactsItem.defaultProps = {
    href: '',
    img: ''
}

ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    img: PropTypes.string
}

export default ContactsItem;