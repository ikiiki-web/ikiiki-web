import { css } from '@emotion/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import { Pagination } from '@app/components/atoms/Pagination'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { dateFormat } from '@app/components/modules/dateFormat'
import { client } from '@app/libs/client'
import { colorBase, hover, mqPc } from '@app/styles/variables'
import { NewsArticles } from '@app/types/newt'
import { contentsDisplay } from '@app/utils/constants'

type Props = {
  newsArticles: NewsArticles
}

const NewsPage: React.FC<Props> = ({ newsArticles }) => {
  return (
    <PageLayout>
      <HeadMeta title='お知らせ｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='お知らせ' breadcrumb={[{ name: 'お知らせ' }]} />
      <PageContent>
        <ul css={newsListContainer}>
          {newsArticles.items.map((article) => (
            <li key={article._id}>
              <Link href={`/news/detail/${article.slug}`} css={newsListItem}>
                <p css={newsListItemDate}>{dateFormat(article.createdAt)}</p>
                <p css={newsListItemTitle}>{article.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Pagination url='/news' total={newsArticles.total} />
      </PageContent>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // お知らせ一覧取得
  const newsArticles = await client.getContents({
    appUid: 'news',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
    },
  })

  return {
    props: {
      newsArticles,
    },
  }
}

const newsListContainer = css`
  border-bottom: 1px solid #dddddd;
  ${mqPc} {
    margin: 50px auto 0;
    max-width: 840px;
  }
`

const newsListItem = css`
  padding: 20px 0;
  border-top: 1px solid #dddddd;
  display: block;
  ${mqPc} {
    display: flex;
    align-items: flex-start;
  }
  &:hover {
    p {
      &:nth-of-type(2) {
        color: #2180ac;
        text-decoration-color: rgba(33, 128, 172, 1);
      }
    }
  }
`

const newsListItemDate = css`
  font-size: 13px;
  color: #727272;
  line-height: 1.75;
  ${mqPc} {
    width: 110px;
    font-size: 14px;
  }
`

const newsListItemTitle = css`
  font-size: 14px;
  line-height: 1.75;
  margin-top: 5px;
  color: ${colorBase};
  transition: 0.3s;
  text-decoration: underline 0.1em rgba(33, 128, 172, 0);
  ${mqPc} {
    width: calc(100% - 110px);
    font-size: 16px;
    margin-top: 0;
  }
`

export default NewsPage
