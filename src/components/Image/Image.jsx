const Image = ({ link, defaultFormat }) => {
    return (
        <picture>
            <source srcSet={`${link}.webp`} />
            <img src={`${link}.${defaultFormat}`} alt="Image" className="custom-image" />
        </picture>
    )
};

export default Image;