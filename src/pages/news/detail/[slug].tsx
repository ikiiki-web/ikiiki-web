import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import NewsDetail from '@app/components/contents/news/NewsDetail'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client } from '@app/libs/client'
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

export const getStaticPaths = async () => {
  // 成果事例カテゴリー一覧取得
  const { items: articles } = await client.getContents<NewsArticle>({
    appUid: 'news',
    modelUid: 'article',
  })

  const paths = articles.map((article) => {
    return {
      params: { slug: article.slug },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug

  // 成果事例詳細取得
  const newsArticle = await client.getFirstContent<NewsArticle>({
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
