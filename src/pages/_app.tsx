import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { worker } from '../test/mocks/browser'

if (process.env.NODE_ENV === 'development') {
  // UNCOMMENT IF YOU WANT TO MOCK YOUR REQUESTS IN DEVELOPMENT MODE
  worker.start()
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
