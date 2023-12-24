import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import { globals } from '@app/styles/GlobalStyle'
// import GlobalStyle from '../style/GlobalStyle'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Global styles={globals} />
      <Component {...pageProps} />
    </>
  )
}
