import {useTranslation} from "next-i18next";

// import Image from 'next/image';
// import CustomLink from "../../components/Link";
import BlogItem from "../../components/BlogItem";

const Blog = () => {
    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});
    // const blogElements = blogItems.map(({id, title, date, img, link}) => {
    //     return (
    //         <CustomLink href={link} key={id} className="blog-item">
    //             <div className="blog-item-photo">
    //                 <div className="blog-item-img">
    //                     <Image src={img} alt="Blog photo" width={236} height={236} layout="responsive" />
    //                 </div>
    //                 {/* <img src={img} alt="Blog photo" className="blog-item-img" /> */}
    //             </div>
    //             <div className="blog-item-info">
    //                 <p className="blog-item-title">{title}</p>
    //                 <p className="blog-item-date">{date}</p>
    //             </div>
    //         </CustomLink>
    //     )
    // });
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