import '../styles/globals.css'
import '../styles/font.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import { Layout } from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
