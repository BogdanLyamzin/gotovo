import App from "next/app"
import {appWithTranslation} from 'next-i18next'
import {AuthProvider} from "../auth/context/auth.context";

import '@fullcalendar/common/main.min.css'
import '@fullcalendar/daygrid/main.min.css'
import '@fullcalendar/timegrid/main.min.css'

import '../src/styles/main.scss';

function MyApp({Component, pageProps, user}) {
    return (
        <AuthProvider user={user}>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    const query = new URLSearchParams(appContext.ctx.asPath);
    const user = Object.fromEntries(query.entries());
    return { ...appProps, user };
}

export default appWithTranslation(MyApp)

