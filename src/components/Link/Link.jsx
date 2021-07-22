import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({href, className, children, target = "_self"}) => {
    const router = useRouter();
    return (
        <Link href={href} locale={router.locale}>
            <a className={className} target={target}>
                {children}
            </a>
        </Link>
    )
};

export default CustomLink;