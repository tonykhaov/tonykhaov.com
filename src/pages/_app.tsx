import type { AppProps } from 'next/app'
import AppProviders from 'src/utils/context/AppProviders'
import 'tailwindcss/tailwind.css'
import 'src/styles/globalStyle.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}

export default MyApp
