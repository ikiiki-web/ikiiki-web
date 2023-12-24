import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import { Pagination } from '@app/components/atoms/Pagination'
import CategoryNav from '@app/components/blocks/CategoryNav'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import CaseList from '@app/components/contents/case/CaseList'
import CaseSeminar from '@app/components/contents/case/CaseSeminar'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2 } from '@app/libs/client'
import { CaseArticles, Category, SeminarArticle } from '@app/types/newt'
import { contentsDisplay } from '@app/utils/constants'

type Props = {
  caseArticles: CaseArticles
  caseCategories: Category[]
  seminarArticles: SeminarArticle[]
  page: string
}

const CasePage: React.FC<Props> = ({ caseArticles, caseCategories, seminarArticles, page }) => {
  return (
    <PageLayout>
      <HeadMeta title='成果事例｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='成果事例' breadcrumb={[{ name: '成果事例' }]} />
      <PageContent>
        <CategoryNav categories={caseCategories} type='case' />
        <CaseList caseArticles={caseArticles} />
        <Pagination url='/case' total={caseArticles.total} currentPage={Number(page)} />
      </PageContent>
      <CaseSeminar seminarArticles={seminarArticles} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  // 成果事例一覧
  const { total } = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
  })

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(total / contentsDisplay)).map((repo) => {
    return { params: { page: repo.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = ctx.params?.page

  // 成果事例一覧取得
  const caseArticles = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
      skip: contentsDisplay * (Number(page) - 1),
    },
  })

  // 成果事例カテゴリー一覧取得
  const caseCategories = await client2.getContents({
    appUid: 'case',
    modelUid: 'category',
  })

  // セミナー一覧取得
  const seminarArticles = await client2.getContents({
    appUid: 'seminar',
    modelUid: 'article',
    query: {
      limit: 3,
    },
  })

  return {
    props: {
      caseArticles,
      caseCategories: caseCategories.items,
      seminarArticles: seminarArticles.items,
      page,
    },
  }
}

export default CasePage
