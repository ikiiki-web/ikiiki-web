import Document, { Html, Head, Main, NextScript } from 'next/document'
import Favicons from '@app/components/atoms/Favicons'

class MyDocument extends Document {
  render() {
    const GA_TRACKING_ID = 'GTM-KMSSV45'
    const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GA_TRACKING_ID}');`
    const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    return (
      <Html lang='ja'>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Oswald:wght@500&display=swap'
            rel='stylesheet'
          />
          <Favicons />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
