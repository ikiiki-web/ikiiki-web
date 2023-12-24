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
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const MediaNewPage: React.FC<Props> = ({ mediaArticles, mediaPopularArticles, categories }) => {
  return (
    <MediaLayout categories={categories}>
      <HeadMeta title='新着記事｜メディア｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <MediaContent
        title={'新着記事'}
        breadcrumb={[{ name: 'メディアTOP', link: '/media' }, { name: '新着記事' }]}
        mediaArticles={mediaArticles}
        paginationUrl={`/media/new`}
        mediaPopularArticles={mediaPopularArticles}
        categories={categories}
      />
    </MediaLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // メディア新着記事一覧取得
  const mediaArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
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
      mediaArticles: mediaArticles,
      mediaPopularArticles: mediaPopularArticles,
      categories: categories.items,
    },
  }
}

export default MediaNewPage
