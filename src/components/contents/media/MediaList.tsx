import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { dateFormat } from '@app/components/modules/dateFormat'
import { colorBase, colorPrimary, hover, mqPc } from '@app/styles/variables'
import { MediaArticle } from '@app/types/newt'

type Props = {
  mediaArticles: MediaArticle[]
}

const MediaList: React.FC<Props> = ({ mediaArticles }) => {
  return (
    <ul css={mediaListContainer}>
      {mediaArticles.map((article) => (
        <li key={article._id} css={mediaItem}>
          <Link href={`/media/detail/${article.slug}`}>
            <div css={mediaItemImg}>
              <img src={article.thumbnail?.src} alt='' />
            </div>
            <p css={mediaItemCategory}>{article.category.name}</p>
            <p css={mediaItemTitle}>{article.title}</p>
            <p css={mediaItemDate}>{dateFormat(article._sys.updatedAt)}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const mediaListContainer = css`
  margin: 0 auto;
  max-width: 280px;
  ${mqPc} {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px 30px;
  }
`

const mediaItem = css`
  position: relative;
  ${hover};
  ${mqPc} {
    width: calc(100% / 3 - 60px / 3);
  }
  &:not(:first-of-type) {
    margin-top: 40px;
    ${mqPc} {
      margin-top: 0;
    }
  }
`

const mediaItemImg = css`
  width: 100%;
  aspect-ratio: 1.5;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`

const mediaItemTitle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
  color: ${colorBase};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${mqPc} {
    -webkit-line-clamp: 2;
  }
`

const mediaItemDate = css`
  text-align: right;
  font-size: 14px;
  color: #727272;
  margin-top: 10px;
`

const mediaItemCategory = css`
  position: absolute;
  left: 0;
  top: 0;
  background: ${colorPrimary};
  color: #fff;
  padding: 5px 10px;
  font-size: 14px;
`

export default MediaList
