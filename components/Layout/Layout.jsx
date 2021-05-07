import Head from "next/head";

import Navbar from "../Navbar";

const Layout = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar/>
            {children}
        </>
    );
};

export default Layout;