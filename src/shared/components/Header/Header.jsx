import PropTypes from 'prop-types';

import Container from "../Container";

import styles from "./Header.module.scss";

const Header = ({ title, text, children, img, mobImg }) => {
    return (
        <header className={styles["header"]}>
            <Container className={styles["container"]}>
                <h2 className={styles["text-big"]}>{title}</h2>
                <p className={styles["text-small"]}>{text}</p>
                {children}
            </Container>
            <img className={styles["img"]} src={img} alt="Header image" />
            <img className={styles["img-mob"]} src={mobImg} alt="Header image" />
        </header>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.node,
    img: PropTypes.string,
    mobImg: PropTypes.string
}

export default Header;