import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { hostUrl } from '@app/utils/constants'

interface Props {
  title: string
}

const HeadMeta: React.FC<Props> = ({ title }) => {
  const { pathname } = useRouter()

  const description =
    '株式会社ＩＫ！ＩＫ！（イキイキ）は、人財開発・組織開発支援をするコンサルティングファームです。【人、組織、イキイキ！】のもと、人が”活きる”社会づくりに組織の実現を支援します。1on1、マネジメント、コミュニケーション活性化、人財育成、研修、コーチングなどでお困りの方に対して、内発的動機づけと行動変容を促し、気付き→行動→成果につなげます。'

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={pathname === '/' ? 'website' : 'article'} />
      <meta property='og:image' content={`${hostUrl}/img/ogp.png`} />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${hostUrl}/img/ogp.png`} />
      <meta name='robots' content='noindex' />
    </Head>
  )
}
export default HeadMeta
