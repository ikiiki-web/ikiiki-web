import { css } from '@emotion/react'
import { GetStaticProps } from 'next'
import React from 'react'
import Breadcrumb from '@app/components/atoms/Breadcrumb'
import HeadMeta from '@app/components/atoms/HeadMeta'
import MediaDetail from '@app/components/contents/media/MediaDetail'
import { MediaLayout } from '@app/components/layouts/MediaLayout'
import { client } from '@app/libs/client'
import { mqPc } from '@app/styles/variables'
import { Category, MediaArticle, MediaPopular } from '@app/types/newt'

type Props = {
  mediaArticle: MediaArticle
  mediaRelationArticles: MediaArticle[]
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const MediaPage: React.FC<Props> = ({
  mediaArticle,
  mediaRelationArticles,
  mediaPopularArticles,
  categories,
}) => {
  return (
    <MediaLayout categories={categories}>
      <HeadMeta title={`${mediaArticle.title}｜メディア｜株式会社IK!IK!（イキイキ）`} />
      <div css={mediaDetailBreadcrumb}>
        <div>
          <Breadcrumb
            breadcrumb={[{ name: 'メディアTOP', link: '/media' }, { name: mediaArticle.title }]}
          />
        </div>
      </div>
      <MediaDetail
        article={mediaArticle}
        relationArticles={mediaRelationArticles}
        mediaPopularArticles={mediaPopularArticles}
        categories={categories}
      />
    </MediaLayout>
  )
}

export const getStaticPaths = async () => {
  // メディア一覧取得
  const { items: articles } = await client.getContents<MediaArticle>({
    appUid: 'medium',
    modelUid: 'article',
  })

  const paths = articles.map((article: MediaArticle) => {
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

  // メディア詳細取得
  const mediaArticle = await client.getFirstContent<MediaArticle>({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      slug,
      depth: 2,
    },
  })

  // 同カテゴリー一覧取得
  const mediaRelationArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: 3,
      category: mediaArticle?.category?._id,
    },
  })

  // 成果事例カテゴリー一覧取得
  const mediaCategories = await client.getContents({
    appUid: 'medium',
    modelUid: 'category',
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
      mediaArticle,
      mediaRelationArticles: mediaRelationArticles.items,
      mediaCategories: mediaCategories.items,
      mediaPopularArticles,
      categories: categories.items,
    },
  }
}

const mediaDetailBreadcrumb = css`
  background: #fff;
  ${mqPc} {
    background: #f9f9f9;
  }
  & > div {
    padding: 20px 16px;
    ${mqPc} {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`

export default MediaPage
