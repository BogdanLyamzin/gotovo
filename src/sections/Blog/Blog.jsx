import {useTranslation} from "next-i18next";

import BlogItem from "../../components/BlogItem";

const Blog = () => {
    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});

    const blogElements = blogItems.map(({id, title, date, img, link}) => {
        return <BlogItem key={id} title={title} date={date} img={img} link={link} />
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