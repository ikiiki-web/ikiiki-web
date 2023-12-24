import { css } from '@emotion/react'
import React, { ReactNode } from 'react'
import MediaList from './MediaList'
import MediaSide from './MediaSide'
import Breadcrumb from '@app/components/atoms/Breadcrumb'
import { Pagination } from '@app/components/atoms/Pagination'
import { mqPc } from '@app/styles/variables'
import { Category, MediaArticle, MediaArticles } from '@app/types/newt'

type Props = {
  title: ReactNode
  breadcrumb: {
    name: string
    link?: string
  }[]
  mediaArticles: MediaArticles
  currentPage?: number
  paginationUrl: string
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const MediaContent: React.FC<Props> = ({
  title,
  breadcrumb,
  mediaArticles,
  currentPage,
  paginationUrl,
  mediaPopularArticles,
  categories,
}) => {
  return (
    <div css={mediaContentContainer}>
      <Breadcrumb breadcrumb={breadcrumb} />
      <h1 css={mediaContentTitle}>{title}</h1>
      <div css={mediaContentFlex}>
        <div css={mediaContentMain}>
          <MediaList mediaArticles={mediaArticles.items} />
          <Pagination url={paginationUrl} total={mediaArticles.total} currentPage={currentPage} />
        </div>
        <MediaSide mediaPopularArticles={mediaPopularArticles} categories={categories} />
      </div>
    </div>
  )
}

const mediaContentContainer = css`
  padding: 12px 20px 60px;
  ${mqPc} {
    max-width: 1200px;
    padding: 16px 20px 160px;
    margin: 0 auto;
  }
`

const mediaContentTitle = css`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  span {
    font-size: 14px;
    ${mqPc} {
      font-size: 18px;
    }
  }
  ${mqPc} {
    margin-top: 50px;
    text-align: left;
    font-size: 28px;
  }
`

const mediaContentFlex = css`
  margin-top: 30px;
  ${mqPc} {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const mediaContentMain = css`
  ${mqPc} {
    width: calc(100% - 350px);
  }
`

export default MediaContent
