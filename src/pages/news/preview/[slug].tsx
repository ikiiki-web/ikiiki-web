import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import NewsDetail from '@app/components/contents/news/NewsDetail'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { previewClient } from '@app/libs/client'
import { NewsArticle } from '@app/types/newt'

type Props = {
  newsArticle: NewsArticle
}

const newsPage: React.FC<Props> = ({ newsArticle }) => {
  return (
    <PageLayout>
      <HeadMeta title={`${newsArticle.title}｜お知らせ｜株式会社IK!IK!（イキイキ）`} />
      <PageHead
        title='お知らせ'
        breadcrumb={[{ name: 'お知らせ', link: '/news' }, { name: newsArticle.title }]}
        detail
      />
      <NewsDetail article={newsArticle} />
    </PageLayout>
  )
}

export const getServerSideProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug

  // 成果事例詳細取得
  const newsArticle = await previewClient.getFirstContent<NewsArticle>({
    appUid: 'news',
    modelUid: 'article',
    query: {
      slug,
    },
  })

  return {
    props: {
      newsArticle,
    },
  }
}

export default newsPage
