import App from "next/app";
import axios from 'axios';
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
    const query = new URLSearchParams(appContext.ctx.req.url.replace('/profile?', ''));
    const params = Object.fromEntries(query.entries());
    console.log(params);
    if (!params.accessToken) {
        return {...appProps, params};
    }

    try {
        const {data: user} = await axios.get(`https://cmusy-dev.space/api/v1/auth/accounts/info`,
            {headers: {Authorization: 'Bearer ' + params.accessToken}});
        return {...appProps, user: {...params, ...user}};
    } catch (error) {
        return {...appProps, params};
    }
}

export default appWithTranslation(MyApp);

