import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import {
  seminarItem,
  seminarItemInner,
  seminarItemImg,
  seminarItemBox,
  seminarItemLabel,
  seminarItemTitle,
  seminarItemInfo,
  seminarItemLabelClose,
} from '@app/styles/component/seminar'
import { mqPc } from '@app/styles/variables'
import { SeminarArticles } from '@app/types/newt'

type Props = {
  seminarArticles: SeminarArticles
}

const SeminarList: React.FC<Props> = ({ seminarArticles }) => {
  return (
    <ul css={seminarList}>
      {seminarArticles.items.map((article) => (
        <li key={article._id}>
          <Link href={`/seminar/detail/${article.slug}`} css={seminarItem}>
            <div css={seminarItemInner}>
              <img css={seminarItemImg} src={article.thumbnail?.src} alt='' />
              <div css={seminarItemBox}>
                {article.accepting ? (
                  <p css={seminarItemLabel}>受付中</p>
                ) : (
                  <p css={seminarItemLabelClose}>終了</p>
                )}
                <p css={seminarItemTitle}>{article.title}</p>
                <ul css={seminarItemInfo}>
                  <li>
                    <span>日時</span>
                    {article.eventDate}
                  </li>
                  <li>
                    <span>会場</span>
                    {article.place}
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const seminarList = css`
  & > li {
    &:not(:first-of-type) {
      margin-top: 20px;
      ${mqPc} {
        margin-top: 20px;
      }
    }
  }
  ${mqPc} {
    max-width: 840px;
    margin: 0 auto;
  }
`

export default SeminarList
