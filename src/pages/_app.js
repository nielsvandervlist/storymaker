import '@/styles/styles.scss'
import { AnimatePresence } from 'framer-motion'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps, router }) {
    return (
        <AnimatePresence mode="wait" initial={false} exitBeforeEnter>
            <Component {...pageProps} key={router.asPath}/>
        </AnimatePresence>
    )
}

