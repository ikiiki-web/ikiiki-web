import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import CaseDetail from '@app/components/contents/case/CaseDetail'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2 } from '@app/libs/client'
import { CaseArticle, CaseArticles, Category } from '@app/types/newt'
// const cheerio = require('cheerio')

type Props = {
  caseArticle: CaseArticle
  caseCategoryArticle: CaseArticles
  caseCategories: Category[]
  // toc: {
  //   id: string
  //   name: string
  //   text: string
  // }[]
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

export const getStaticPaths = async () => {
  // 成果事例カテゴリー一覧取得
  const { items: articles } = await client2.getContents<CaseArticle>({
    appUid: 'case',
    modelUid: 'article',
  })

  const paths = articles.map((article: CaseArticle) => {
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
  const caseArticle = await client2.getFirstContent<CaseArticle>({
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

  // TODO: 目次生成 問い合わせ中
  // const content = caseArticle?.content.map(
  //   (content) => content.type === 'RICH_TEXT' && content.data,
  // )
  // const $ = cheerio.load(content?.[0] as string)
  // const headings = $('h2').toArray()

  // const toc = headings.map((data: any) => ({
  //   text: data.children[0].data,
  //   id: data.attribs.id,
  //   name: data.name,
  // }))
  // console.log(toc)

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
