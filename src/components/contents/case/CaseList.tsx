import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { mqPc, colorBase, hover } from '@app/styles/variables'
import { CaseArticles } from '@app/types/newt'

type Props = {
  caseArticles: CaseArticles
}

const CaseList: React.FC<Props> = ({ caseArticles }) => {
  return (
    <ul css={caseList}>
      {caseArticles.items.map((article) => (
        <li css={caseItem} key={article._id}>
          <Link href={`/case/detail/${article.slug}`}>
            <div css={caseItemImg}>
              <img src={article.thumbnail?.src} alt='' />
            </div>
            <p css={caseItemInfo}>
              <span>{article.category?.name}</span>
              {article.company}
            </p>
            <p css={caseItemTitle}>{article.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const caseList = css`
  max-width: 280px;
  margin: 0 auto;
  ${mqPc} {
    max-width: none;
    display: flex;
    flex-wrap: wrap;
    gap: 60px 30px;
  }
`

export const caseItem = css`
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

export const caseItemImg = css`
  width: 100%;
  aspect-ratio: 1.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const caseItemInfo = css`
  font-size: 14px;
  color: ${colorBase};
  margin-top: 12px;
  span {
    color: #727272;
    margin-right: 10px;
  }
`

export const caseItemTitle = css`
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

export default CaseList
