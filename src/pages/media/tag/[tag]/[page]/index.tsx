import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import MediaContent from '@app/components/contents/media/MediaContent'
import { MediaLayout } from '@app/components/layouts/MediaLayout'
import { client } from '@app/libs/client'
import { Tag, MediaArticles, MediaPopular, MediaArticle, Category } from '@app/types/newt'
import { contentsDisplay } from '@app/utils/constants'

type Props = {
  mediaArticles: MediaArticles
  page: string
  tag: Tag
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const CasePage: React.FC<Props> = ({
  mediaArticles,
  page,
  tag,
  mediaPopularArticles,
  categories,
}) => {
  return (
    <MediaLayout categories={categories}>
      <HeadMeta title={`${tag.name}｜メディア｜株式会社IK!IK!（イキイキ）`} />
      <MediaContent
        title={
          <>
            {tag.name}
            <span>の記事</span>
          </>
        }
        breadcrumb={[{ name: 'メディアTOP', link: '/media' }, { name: tag.name }]}
        mediaArticles={mediaArticles}
        paginationUrl={`/media/tag/${tag.slug}`}
        currentPage={Number(page)}
        mediaPopularArticles={mediaPopularArticles}
        categories={categories}
      />
    </MediaLayout>
  )
}

export const getStaticPaths = async () => {
  // メディアタグー一覧取得
  const { items: tags } = await client.getContents<Tag>({
    appUid: 'medium',
    modelUid: 'tag',
  })

  // 各タグ総数取得・格納
  const totals: { [key: string]: number } = {}
  for (const tag of tags) {
    const { total } = await client.getContents({
      appUid: 'medium',
      modelUid: 'article',
      query: {
        tag: tag._id,
      },
    })
    totals[tag._id] = total
  }

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = tags
    .map((tag: Tag) =>
      range(1, Math.ceil(totals[tag._id] / contentsDisplay)).map((repo) => {
        return {
          params: { tag: tag.slug, page: repo.toString() },
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
  const tagSlug = ctx.params?.tag

  // タグID取得
  const tag = await client.getFirstContent<Tag>({
    appUid: 'medium',
    modelUid: 'tag',
    query: {
      slug: tagSlug as string,
    },
  })

  // メディア一覧取得
  const mediaArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
      skip: contentsDisplay * (Number(page) - 1),
      tag: tag?._id,
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
      tag,
      mediaPopularArticles,
      categories: categories.items,
    },
  }
}

export default CasePage
