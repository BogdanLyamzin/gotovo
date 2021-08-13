import {useTranslation} from "next-i18next";

import CustomLink from "../../shared/components/Link";
import BlogItem from "../../shared/components/BlogItem";

const BlogPage = ({ pageNumber }) => {
    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});

    const { title, date, img, text } = blogItems[pageNumber - 1];

    const listElements = text.map(({id, text}) => {
        return <p key={id} className="blog-page-text">{text}</p>
    });

    const newsElements = blogItems.map(({id, title, date, img, link}) => {
        return <BlogItem key={id} title={title} date={date} img={img} link={link} />
    });

    const prevBtn = (pageNumber > 1) ? (
        <CustomLink href={`/news/${pageNumber - 1}`} className="btn _dark _shadow blog-page-btn">{t("prevBtn")}</CustomLink>
    ) : (
        <div></div>
    );

    const nextBtn = (pageNumber < blogItems.length) ? (
        <CustomLink href={`/news/${Number(pageNumber) + 1}`} className="btn _dark _shadow blog-page-btn">{t("nextBtn")}</CustomLink>
    ) : (
        <div></div>
    )

    return (
        <div className="blog-page">
            <div className="container">
                <h1 className="title">{t("title")}</h1>
                <div className="blog-page-content">

                    <div className="blog-page-item-container">
                        <div className="blog-page-item">
                            <img className="blog-page-img" src={img} alt="photo" />
                            <div className="blog-page-info">
                                <h2 className="blog-page-title">{title}</h2>
                                {listElements}
                                <p className="blog-page-date">{date}</p>
                            </div>
                        </div>
                        <div className="blog-page-buttons">
                            {prevBtn}
                            {nextBtn}
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