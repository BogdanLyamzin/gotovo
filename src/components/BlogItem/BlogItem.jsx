import CustomLink from "../../components/Link";
import Image from 'next/image';

const BlogItem = ({ title, date, img, link }) => {
    return (
        <CustomLink href={link} className="blog-item">
            <div className="blog-item-photo">
                {/* <img src={img} alt="Blog photo" className="blog-item-img" /> */}
                <div className="blog-item-img">
                    <Image src={img} alt="Blog photo" width={236} height={236} layout="responsive" />
                </div>
            </div>
            <div className="blog-item-info">
                <p className="blog-item-title">{title}</p>
                <p className="blog-item-date">{date}</p>
            </div>
        </CustomLink>
    )
};

export default BlogItem;