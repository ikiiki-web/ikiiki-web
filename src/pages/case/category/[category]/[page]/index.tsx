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
  page: string
  categorySlug: string
  seminarArticles: SeminarArticle[]
}

const CasePage: React.FC<Props> = ({
  caseArticles,
  caseCategories,
  page,
  categorySlug,
  seminarArticles,
}) => {
  return (
    <PageLayout>
      <HeadMeta title='成果事例｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='成果事例' breadcrumb={[{ name: '成果事例' }]} />
      <PageContent>
        <CategoryNav categories={caseCategories} categorySlug={categorySlug} type='case' />
        <CaseList caseArticles={caseArticles} />
        <Pagination
          url={`/case/category/${categorySlug}`}
          total={caseArticles.total}
          currentPage={Number(page)}
        />
      </PageContent>
      <CaseSeminar seminarArticles={seminarArticles} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  // 成果事例カテゴリー一覧取得
  const { items: categories } = await client2.getContents<Category>({
    appUid: 'case',
    modelUid: 'category',
  })

  // 各カテゴリー総数取得・格納
  const totals: { [key: string]: number } = {}
  for (const category of categories) {
    const { total } = await client2.getContents({
      appUid: 'case',
      modelUid: 'article',
      query: {
        category: category._id,
      },
    })
    totals[category._id] = total
  }

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = categories
    .map((category: Category) =>
      range(1, Math.ceil(totals[category._id] / contentsDisplay)).map((repo) => {
        return {
          params: { category: category.slug, page: repo.toString() },
        }
      }),
    )
    .flat()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = ctx.params?.page
  const categorySlug = ctx.params?.category

  // カテゴリーID取得
  const category = await client2.getFirstContent<Category>({
    appUid: 'case',
    modelUid: 'category',
    query: {
      slug: categorySlug as string,
    },
  })

  // 成果事例一覧取得
  const caseArticles = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
      skip: contentsDisplay * (Number(page) - 1),
      category: category?._id,
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
      page,
      categorySlug,
      seminarArticles: seminarArticles.items,
    },
  }
}

export default CasePage
