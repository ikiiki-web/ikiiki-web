import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import MediaContent from '@app/components/contents/media/MediaContent'
import { MediaLayout } from '@app/components/layouts/MediaLayout'
import { client } from '@app/libs/client'
import { Category, MediaArticle, MediaArticles, MediaPopular } from '@app/types/newt'
import { contentsDisplay } from '@app/utils/constants'

type Props = {
  mediaArticles: MediaArticles
  category: Category
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const CasePage: React.FC<Props> = ({
  mediaArticles,
  category,
  mediaPopularArticles,
  categories,
}) => {
  return (
    <MediaLayout categories={categories}>
      <HeadMeta title={`${category.name}｜メディア｜株式会社IK!IK!（イキイキ）`} />
      <MediaContent
        title={
          <>
            {category.name}
            <span>の記事</span>
          </>
        }
        breadcrumb={[{ name: 'メディアTOP', link: '/media' }, { name: category.name }]}
        mediaArticles={mediaArticles}
        paginationUrl={`/media/category/${category.slug}`}
        mediaPopularArticles={mediaPopularArticles}
        categories={categories}
      />
    </MediaLayout>
  )
}

export const getStaticPaths = async () => {
  // 成果事例カテゴリー一覧取得
  const { items: categories } = await client.getContents<Category>({
    appUid: 'medium',
    modelUid: 'category',
  })

  const paths = categories.map((category) => {
    return {
      params: { category: category.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categorySlug = ctx.params?.category

  // カテゴリーID取得
  const category = await client.getFirstContent<Category>({
    appUid: 'medium',
    modelUid: 'category',
    query: {
      slug: categorySlug as string,
    },
  })

  // メディア新着記事一覧取得
  const mediaArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
      category: category?._id,
    },
  })

  // よく読まれている記事記事一覧取得
  const mediaPopular = await client.getContents<MediaPopular>({
    appUid: 'medium',
    modelUid: 'popular',
    query: {
      limit: 5,
      depth: 2,
      order: ['-priority', 'rank'],
    },
  })
  const mediaPopularArticles = mediaPopular.items.map((item) => item.article)

  // メディアカテゴリー一覧取得
  const categories = await client.getContents({
    appUid: 'medium',
    modelUid: 'category',
  })

  return {
    props: {
      mediaArticles,
      category,
      mediaPopularArticles,
      categories: categories.items,
    },
  }
}

export default CasePage
