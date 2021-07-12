import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({href, className, children}) => {
    const router = useRouter();
    return (
        <Link href={href} locale={router.locale}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
};

export default CustomLink;




