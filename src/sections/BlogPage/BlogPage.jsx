import {useTranslation} from "next-i18next";

import CustomLink from "../../components/Link";

const BlogPage = ({ pageNumber }) => {
    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});

    const { id, title, date, img, text } = blogItems[pageNumber - 1];

    const listElements = text.map(({id, text}) => {
        return (
            <p key={id} className="blog-page-text">{text}</p>
        )
    });

    const newsElements = blogItems.map(({id, title, date, img, link}) => {
        return (
            <CustomLink href={link} key={id} className="blog-item">
                <div className="blog-item-photo">
                    <img src={img} alt="Blog photo" className="blog-item-img" />
                </div>
                <div className="blog-item-info">
                    <p className="blog-item-title">{title}</p>
                    <p className="blog-item-date">{date}</p>
                    
                </div>
            </CustomLink>
        )
    });
    
    return (
        <div className="blog-page">
            <div className="container">
                <h1 className="title">{t("title")}</h1>
                <div className="blog-page-content">
                    <div className="blog-page-item">
                        <img className="blog-page-img" src={img} alt="photo" />
                        <div className="blog-page-info">
                            <h2 className="blog-page-title">{title}</h2>
                            {listElements}
                        </div>
                    </div>
                    <div className="blog-page-news">
                        {newsElements[0]}
                        {newsElements[1]}
                        {newsElements[2]}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogPage;