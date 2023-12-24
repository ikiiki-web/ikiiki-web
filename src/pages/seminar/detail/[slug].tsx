import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import SeminarDetail from '@app/components/contents/seminar/SeminarDetail'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2 } from '@app/libs/client'
import { SeminarArticle, SeminarArticles } from '@app/types/newt'

type Props = {
  seminarArticle: SeminarArticle
  seminarArticles: SeminarArticles
}

const SeminarPage: React.FC<Props> = ({ seminarArticle, seminarArticles }) => {
  return (
    <PageLayout>
      <HeadMeta title={`${seminarArticle.title}｜セミナー｜株式会社IK!IK!（イキイキ）`} />
      <PageHead
        title='セミナー'
        breadcrumb={[{ name: 'セミナー', link: '/seminar' }, { name: seminarArticle.title }]}
        detail
      />
      <SeminarDetail article={seminarArticle} seminarArticles={seminarArticles} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  // セミナーカテゴリー一覧取得
  const { items: articles } = await client2.getContents<SeminarArticle>({
    appUid: 'seminar',
    modelUid: 'article',
  })

  const paths = articles.map((article: SeminarArticle) => {
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

  // セミナー詳細取得
  const seminarArticle = await client2.getFirstContent<SeminarArticle>({
    appUid: 'Seminar',
    modelUid: 'article',
    query: {
      slug,
    },
  })

  // 開催予定セミナー
  const seminarArticles = await client2.getContents({
    appUid: 'Seminar',
    modelUid: 'article',
    query: {
      limit: 3,
      accepting: true,
    },
  })

  return {
    props: {
      seminarArticle,
      seminarArticles,
    },
  }
}

export default SeminarPage
