import { css } from '@emotion/react'
import { GetStaticProps } from 'next'
import React from 'react'
import { Button } from '@app/components/atoms/Button'
import HeadMeta from '@app/components/atoms/HeadMeta'
import MediaList from '@app/components/contents/media/MediaList'
import { MediaLayout } from '@app/components/layouts/MediaLayout'
import { client } from '@app/libs/client'
import { mqPc } from '@app/styles/variables'
import { Category, MediaArticle, MediaPopular } from '@app/types/newt'

type Props = {
  mediaArticles: MediaArticle[]
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const MediaPage: React.FC<Props> = ({ mediaArticles, mediaPopularArticles, categories }) => {
  return (
    <MediaLayout categories={categories}>
      <HeadMeta title='メディア｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <section css={mediaMv}>
        <picture>
          <source srcSet='/img/temp/media_mv_pc.png' media='(min-width: 835px)' />
          <img src='/img/temp/media_mv_sp.png' alt='' />
        </picture>
      </section>
      <section css={mediaPopularArticle}>
        <div css={mediaSectionInner}>
          <h2 css={mediaSectionTitle}>
            <img src='/img/common/icon_leaf_red_yellow_sec.svg' alt='' />
            よく読まれている記事
            <img src='/img/common/icon_leaf_red_yellow_sec.svg' alt='' />
          </h2>
          <MediaList mediaArticles={mediaPopularArticles} />
        </div>
      </section>
      <section css={mediaNewArticle}>
        <div css={mediaSectionInner}>
          <h2 css={mediaSectionTitle}>
            <img src='/img/common/icon_leaf_red_blue.svg' alt='' />
            新着記事
            <img src='/img/common/icon_leaf_red_blue.svg' alt='' />
          </h2>
          <MediaList mediaArticles={mediaArticles} />
          <div css={mediaBtnContainer}>
            <Button href='/media/new'>新着記事の一覧</Button>
          </div>
        </div>
      </section>
      <section css={mediaCase}>
        <div css={mediaSectionInner}>
          <h2 css={mediaSectionTitle}>
            <img src='/img/common/icon_leaf_red_green.svg' alt='' />
            これまでの実績
            <img src='/img/common/icon_leaf_red_green.svg' alt='' />
          </h2>
          <ul css={mediaCaseList}>
            <li>
              <a href='#'>
                <img src='/img/temp/case01.png' alt='' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='/img/temp/case01.png' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section css={mediaCompanyNav}>
        <div css={mediaSectionInner}>
          <h2 css={mediaCompanyNavTitle}>会社案内</h2>
          <p css={mediaCompanyNavText}>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
          </p>
          <ul css={mediaCompanyNavList}>
            <li>
              <Button href='/'>トップページ</Button>
            </li>
            <li>
              <Button href='/service'>サービスについて</Button>
            </li>
            <li>
              <Button href='/mission'>ミッション</Button>
            </li>
            <li>
              <Button href='/case'>成果事例</Button>
            </li>
            <li>
              <Button href='/partner'>パートナー紹介</Button>
            </li>
            <li>
              <Button href='/comapny'>会社概要</Button>
            </li>
          </ul>
        </div>
      </section>
    </MediaLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // メディア新着記事一覧取得
  const mediaArticles = await client.getContents({
    appUid: 'medium',
    modelUid: 'article',
    query: {
      limit: 6,
      depth: 2,
    },
  })

  // よく読まれている記事記事一覧取得
  const mediaPopular = await client.getContents<MediaPopular>({
    appUid: 'medium',
    modelUid: 'popular',
    query: {
      limit: 3,
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
      mediaArticles: mediaArticles.items,
      mediaPopularArticles,
      categories: categories.items,
    },
  }
}

const mediaSectionInner = css`
  padding: 0 20px;
  ${mqPc} {
    max-width: 1020px;
    margin: 0 auto;
  }
`

const mediaSectionTitle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  gap: 10px;
  font-weight: bold;
  margin-bottom: 30px;
  ${mqPc} {
    font-size: 28px;
    margin-bottom: 40px;
  }
  img {
    width: 36px;
    ${mqPc} {
      width: 58px;
    }
  }
`

const mediaMv = css`
  img {
    width: 100%;
    display: block;
  }
`

const mediaPopularArticle = css`
  padding: 40px 0;
  ${mqPc} {
    padding: 100px 0;
  }
`

const mediaNewArticle = css`
  background: #fff2f6;
  padding: 40px 0;
  ${mqPc} {
    padding: 100px 0;
  }
`

const mediaBtnContainer = css`
  max-width: 280px;
  margin: 40px auto 0;
  ${mqPc} {
    margin: 60px auto 0;
  }
`

const mediaCase = css`
  padding: 40px 0;
  ${mqPc} {
    padding: 100px 0;
  }
`

const mediaCaseList = css`
  margin-top: 30px;
  ${mqPc} {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  li {
    ${mqPc} {
      width: calc(100% / 2 - 10px);
    }
    &:not(:first-of-type) {
      margin-top: 12px;
      ${mqPc} {
        margin-top: 0;
      }
    }
    a {
      display: block;
      img {
        width: 100%;
        display: block;
      }
    }
  }
`

const mediaCompanyNav = css`
  padding: 40px 0;
  ${mqPc} {
    padding: 40px 0 80px;
  }
`

const mediaCompanyNavTitle = css`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  ${mqPc} {
    font-size: 28px;
  }
`

const mediaCompanyNavText = css`
  text-align: center;
  line-height: 1.75;
  font-size: 14px;
  margin-top: 30px;
  ${mqPc} {
    font-size: 16px;
    margin-top: 40px;
  }
`

const mediaCompanyNavList = css`
  max-width: 280px;
  margin: 30px auto 0;
  ${mqPc} {
    max-width: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 30px;
  }
  li {
    ${mqPc} {
      width: calc(100% / 3 - 60px / 3);
    }
    &:not(:first-of-type) {
      margin-top: 20px;
      ${mqPc} {
        margin-top: 0;
      }
    }
  }
`

export default MediaPage
