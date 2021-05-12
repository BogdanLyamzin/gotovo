import {appWithTranslation} from 'next-i18next'

import '../styles/globals.scss'
import {AuthProvider} from "../auth/context/auth.context";

function MyApp({Component, pageProps}) {
    return <AuthProvider><Component {...pageProps} /></AuthProvider>
}

export default appWithTranslation(MyApp)

