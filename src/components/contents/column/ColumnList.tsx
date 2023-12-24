import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { dateFormat } from '../../modules/dateFormat'
import { colorBase, hover, mqPc } from '@app/styles/variables'
import { WP_REST_API_Post } from '@app/types/wp'
import { columnCategories } from '@app/utils/constants'

type Props = {
  columnArticles: WP_REST_API_Post[]
}

const ColumnList: React.FC<Props> = ({ columnArticles }) => {
  return (
    <ul css={columnListContainer}>
      {columnArticles.map((article) => (
        <li css={columnListItem} key={article.id}>
          <Link href={`/column/detail/${article.id}`}>
            <div css={columnListItemImg}>
              <img src={article.thumbnail.url} alt='' />
            </div>
            <p css={columnListItemTitle}>{article.title.rendered}</p>
            <div css={columnListItemInfo}>
              <p css={columnListItemDate}>{dateFormat(article.modified)}</p>
              <p css={columnListItemCategory}>
                {
                  columnCategories.find(
                    (category) =>
                      Number(category.slug) ===
                      article.categories?.filter((item) => item !== 1)?.[0],
                  )?.name
                }
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const columnListContainer = css`
  max-width: 280px;
  margin: 0 auto;
  ${mqPc} {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 60px 30px;
  }
`

const columnListItem = css`
  ${mqPc} {
    width: calc(100% / 3 - 60px / 3);
  }
  ${hover};
  &:not(:first-of-type) {
    margin-top: 40px;
    ${mqPc} {
      margin-top: 0;
    }
  }
`
const columnListItemImg = css`
  width: 100%;
  aspect-ratio: 1.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }
`

const columnListItemTitle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colorBase};
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const columnListItemInfo = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 10px;
`

const columnListItemCategory = css`
  background: #2180ac;
  color: #fff;
  font-size: 14px;
  padding: 5px 8px;
  white-space: nowrap;
`

const columnListItemDate = css`
  font-size: 14px;
  color: #727272;
`

export default ColumnList
