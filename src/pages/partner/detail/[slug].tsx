import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import PartnerDetail from '@app/components/contents/partner/PartnerDetail'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client } from '@app/libs/client'
import { Category, PartnerArticle } from '@app/types/newt'

type Props = {
  partnerArticle: PartnerArticle
  partnerCategoryArticle: PartnerArticle[]
  partnerCategories: Category[]
}

const partnerPage: React.FC<Props> = ({
  partnerArticle,
  partnerCategoryArticle,
  partnerCategories,
}) => {
  return (
    <PageLayout>
      <HeadMeta title={`${partnerArticle.name}｜パートナー紹介｜株式会社IK!IK!（イキイキ）`} />
      <PageHead
        title='パートナー紹介'
        breadcrumb={[{ name: 'パートナー紹介', link: '/partner' }, { name: partnerArticle.name }]}
        detail
      />
      <PartnerDetail
        article={partnerArticle}
        categoryArticles={partnerCategoryArticle}
        categories={partnerCategories}
      />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  // 成果事例カテゴリー一覧取得
  const { items: articles } = await client.getContents<PartnerArticle>({
    appUid: 'partner',
    modelUid: 'article',
  })

  const paths = articles.map((article: PartnerArticle) => {
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
  const partnerArticle = await client.getFirstContent<PartnerArticle>({
    appUid: 'partner',
    modelUid: 'article',
    query: {
      slug,
    },
  })

  // 同じカテゴリーの成果事例一覧取得
  const partnerCategoryArticle = await client.getContents({
    appUid: 'partner',
    modelUid: 'article',
    query: {
      limit: 3,
      category: partnerArticle?.category?.[0]?._id,
    },
  })

  // 成果事例カテゴリー一覧取得
  const partnerCategories = await client.getContents({
    appUid: 'partner',
    modelUid: 'category',
  })

  return {
    props: {
      partnerArticle,
      partnerCategoryArticle: partnerCategoryArticle.items,
      partnerCategories: partnerCategories.items,
    },
  }
}

export default partnerPage
