import PropTypes from 'prop-types';

import styles from "./Article.module.scss";

const Article = ({ className, title, text }) => {

    return (
        <div className={`${className} ${styles["article"]}`}>
            <h3 className={styles["heading"]}>{title}</h3>
            <p className={styles["text"]}>{text}</p>
        </div>
    )
};

Article.defaultProps = {
    className: ''
}

Article.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Article;