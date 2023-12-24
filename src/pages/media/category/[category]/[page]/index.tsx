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
  page: string
  category: Category
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const CasePage: React.FC<Props> = ({
  mediaArticles,
  page,
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
        currentPage={Number(page)}
        mediaPopularArticles={mediaPopularArticles}
        categories={categories}
      />
    </MediaLayout>
  )
}

export const getStaticPaths = async () => {
  // メディアカテゴリー一覧取得
  const { items: categories } = await client.getContents<Category>({
    appUid: 'medium',
    modelUid: 'category',
  })

  // 各カテゴリー総数取得・格納
  const totals: { [key: string]: number } = {}
  for (const category of categories) {
    const { total } = await client.getContents({
      appUid: 'medium',
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
  const category = await client.getFirstContent<Category>({
    appUid: 'medium',
    modelUid: 'category',
    query: {
      slug: categorySlug as string,
    },
  })

  // メディア一覧取得
  const mediaArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
      skip: contentsDisplay * (Number(page) - 1),
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
      page,
      category,
      mediaPopularArticles,
      categories: categories.items,
    },
  }
}

export default CasePage
