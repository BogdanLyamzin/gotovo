import CustomLink from "../../components/Link";
import Image from "../../components/Image";

const BlogItem = ({ title, date, img, link }) => {
    return (
        <CustomLink href={link} className="blog-item">
            <div className="blog-item-photo">
                {/* <div className="blog-item-img" >
                    <Image link={img} />
                </div> */}
                <img src={img} alt="Blog photo" className="blog-item-img" />
            </div>
            <div className="blog-item-info">
                <p className="blog-item-title">{title}</p>
                <p className="blog-item-date">{date}</p>
            </div>
        </CustomLink>
    )
};

export default BlogItem;