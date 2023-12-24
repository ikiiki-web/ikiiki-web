import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { colorBase, hover, mqPc } from '@app/styles/variables'
import { PartnerArticle } from '@app/types/newt'

type Props = {
  partnerArticles: PartnerArticle[]
  color: string
  name: string
}

const PartnerList: React.FC<Props> = ({ partnerArticles, color, name }) => {
  return (
    <ul css={partnerListContainer}>
      {partnerArticles.map((article) => (
        <li css={partnerItem} key={article._id}>
          <Link href={`/partner/detail/${article.slug}`}>
            <div css={partnerItemImg}>
              <img src={article.thumbnail?.src} alt='' />
            </div>
            <p css={partnerItemCategory(color)}>{name}</p>
            <div css={partnerItemInfo(color)}>
              <span />
              <p>{article.name}</p>
              <small>{article.romaji}</small>
            </div>
            <p css={partnerItemText}>{article.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const partnerListContainer = css`
  max-width: 280px;
  margin: 30px auto 0;
  ${mqPc} {
    max-width: 100%;
    margin: 40px auto 0;
    display: flex;
    flex-wrap: wrap;
    gap: 40px 30px;
  }
`

const partnerItem = css`
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

const partnerItemImg = css`
  width: 100%;
  aspect-ratio: 1.6;
  ${mqPc} {
    height: 225px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const partnerItemCategory = (color: string) => css`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 25px;
  background: ${color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  top: 40vw;
  ${mqPc} {
    top: 200px;
  }
`

const partnerItemInfo = (color: string) => css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 5px 0;
  span {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 10px;
    border-color: transparent transparent transparent ${color};
  }
  p {
    font-size: 22px;
    font-weight: bold;
    color: ${colorBase};
    margin-left: 12px;
  }
  small {
    font-size: 14px;
    color: #727272;
    margin-left: 12px;
  }
`

const partnerItemText = css`
  font-size: 14px;
  color: #727272;
  line-height: 1.75;
  margin-top: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export default PartnerList
