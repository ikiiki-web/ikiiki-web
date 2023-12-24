import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import CaseSlider from '@app/components/blocks/CaseSlider'
import Cta from '@app/components/blocks/Cta'
import ServiceNav from '@app/components/blocks/ServiceNav'
import TopAbout from '@app/components/contents/top/TopAbout'
import TopComment from '@app/components/contents/top/TopComment'
import TopCompany from '@app/components/contents/top/TopCompany'
import TopMedia from '@app/components/contents/top/TopMedia'
import TopMv from '@app/components/contents/top/TopMv'
import TopNews from '@app/components/contents/top/TopNews'
import TopPartner from '@app/components/contents/top/TopPartner'
import TopSeminar from '@app/components/contents/top/TopSeminar'
import TopService from '@app/components/contents/top/TopService'
import TopWhy from '@app/components/contents/top/TopWhy'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client, client2 } from '@app/libs/client'
import { CaseArticle, MediaArticle, NewsArticle, SeminarArticle } from '@app/types/newt'

type Props = {
  caseArticles: CaseArticle[]
  mediaArticles: MediaArticle[]
  seminarArticles: SeminarArticle[]
  newsArticles: NewsArticle[]
}

const TopPage: React.FC<Props> = ({
  caseArticles,
  mediaArticles,
  seminarArticles,
  newsArticles,
}) => {
  return (
    <PageLayout>
      <HeadMeta title='株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <TopMv />
      <TopAbout />
      <TopService />
      <ServiceNav />
      <TopWhy />
      <TopPartner />
      <TopComment />
      {/* <CaseSlider top caseArticles={caseArticles} /> */}
      <Cta />
      {/* <TopMedia mediaArticles={mediaArticles} /> */}
      {/* <TopSeminar seminarArticles={seminarArticles} /> */}
      <TopCompany />
      <TopNews newsArticles={newsArticles} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // 成果事例一覧取得
  const caseArticles = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
    query: {
      limit: 3,
    },
  })

  // メディア一覧取得
  const mediaArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: 9,
    },
  })

  // セミナー一覧取得
  const seminarArticles = await client2.getContents({
    appUid: 'seminar',
    modelUid: 'article',
    query: {
      limit: 3,
    },
  })

  // お知らせ一覧取得
  const newsArticles = await client.getContents({
    appUid: 'news',
    modelUid: 'article',
    query: {
      limit: 3,
    },
  })

  return {
    props: {
      caseArticles: caseArticles.items,
      mediaArticles: mediaArticles.items,
      seminarArticles: seminarArticles.items,
      newsArticles: newsArticles.items,
    },
  }
}

export default TopPage
