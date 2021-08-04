import {useTranslation} from "next-i18next";

import CustomLink from "../../components/Link";

const Blog = () => {
    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});
    const blogElements = blogItems.map(({id, title, date, img, link}) => {
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
        <section className="blog">
            <div className="container">
                <h3 className="title">{t("title")}</h3>
                <div className="blog-items">
                    {blogElements}
                </div>
            </div>
        </section>
    )
};

export default Blog;