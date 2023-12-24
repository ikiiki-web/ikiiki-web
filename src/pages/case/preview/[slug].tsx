import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import CaseDetail from '@app/components/contents/case/CaseDetail'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2, previewClient2 } from '@app/libs/client'
import { CaseArticle, CaseArticles, Category } from '@app/types/newt'

type Props = {
  caseArticle: CaseArticle
  caseCategoryArticle: CaseArticles
  caseCategories: Category[]
}

const CasePage: React.FC<Props> = ({ caseArticle, caseCategoryArticle, caseCategories }) => {
  return (
    <PageLayout>
      <HeadMeta title={`${caseArticle.title}｜成果事例｜株式会社IK!IK!（イキイキ）`} />
      <PageHead
        title='成果事例'
        breadcrumb={[{ name: '成果事例', link: '/case' }, { name: caseArticle.title }]}
        detail
      />
      <CaseDetail
        article={caseArticle}
        categoryArticles={caseCategoryArticle}
        categories={caseCategories}
      />
    </PageLayout>
  )
}

export const getServerSideProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug

  // 成果事例詳細取得
  const caseArticle = await previewClient2.getFirstContent<CaseArticle>({
    appUid: 'case',
    modelUid: 'article',
    query: {
      slug,
      depth: 2,
    },
  })

  // 同じカテゴリーの成果事例一覧取得
  const caseCategoryArticle = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
    query: {
      limit: 3,
      category: caseArticle?.category?._id,
    },
  })

  // 成果事例カテゴリー一覧取得
  const caseCategories = await client2.getContents({
    appUid: 'case',
    modelUid: 'category',
  })

  return {
    props: {
      caseArticle,
      caseCategoryArticle,
      caseCategories: caseCategories.items,
      // toc,
    },
  }
}

export default CasePage
