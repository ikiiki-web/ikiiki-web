import { css } from '@emotion/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PartnerList from './PartnerList'
import { Button } from '@app/components/atoms/Button'
import {
  detail,
  detailInner,
  detailMain,
  detailBox,
  detailThumbnail,
  detailContent,
  detailContentBtn,
  detailRelated,
  detailSide,
  detailSideCategory,
  detailSideBanner,
  detailSideSns,
  detailFixedSns,
} from '@app/styles/component/detail'
import { mqPc, colorBase } from '@app/styles/variables'
import { PartnerArticle, Category } from '@app/types/newt'

type Props = {
  article: PartnerArticle
  categoryArticles: PartnerArticle[]
  categories?: Category[]
}

const PartnerDetail: React.FC<Props> = ({ article, categories, categoryArticles }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    setLocation(document.location.href)
  }, [])

  return (
    <div css={detail}>
      <div css={detailInner}>
        <div css={detailMain}>
          <article css={detailBox}>
            <img css={detailThumbnail} src={article.thumbnail?.src} alt='' />
            <div css={detailPartnerBox}>
              <ul css={detailPartnerCategoryList}>
                {article.category.map((category) => (
                  <li key={category.color} css={detailPartnerCategory(category.color)}>
                    {category.name}
                  </li>
                ))}
              </ul>

              <div css={detailPartnerInfo}>
                <img src='/img/common/icon_leaf_green_red.svg' alt='' />
                <p>{article.name}</p>
                <small>{article.romaji}</small>
              </div>
            </div>

            {article.content.map((item) =>
              item.type === 'RICH_TEXT' ? (
                <div
                  key={item._id}
                  dangerouslySetInnerHTML={{
                    __html: `${item.data}`,
                  }}
                  css={detailContent}
                />
              ) : (
                item.type === 'button' && (
                  <a
                    css={detailContentBtn}
                    href={item.data.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.data.text}
                  </a>
                )
              ),
            )}
          </article>
          <div css={detailRelated}>
            <h2>同じカテゴリーのパートナー</h2>
            <PartnerList
              partnerArticles={categoryArticles}
              color={article.category[0].color}
              name={article.category[0].name}
            />
            <div>
              <Button href='/partner'>パートナー紹介の一覧へ戻る</Button>
            </div>
          </div>
        </div>
        <aside css={detailSide}>
          <div css={detailSideCategory}>
            <h2>カテゴリー</h2>
            <ul>
              {categories?.map((category) => (
                <li key={category._id}>
                  <Link href={`/partner/#${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div css={detailSideBanner}>
            <Link href='/contact'>
              <img src='/img/banner/contact.png' alt='' />
            </Link>
            <Link href='/document-contact'>
              <img src='/img/banner/document.png' alt='' />
            </Link>
          </div>
          {location && (
            <>
              <ul css={detailSideSns}>
                <li>
                  <a
                    href={`http://www.facebook.com/share.php?u=${location}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='/img/common/icon_facebook.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${location}&text=${article.name}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='/img/common/icon_twitter.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://social-plugins.line.me/lineit/share?url=${location}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='/img/common/icon_line.svg' alt='' />
                  </a>
                </li>
              </ul>
              <ul css={detailFixedSns}>
                <li>
                  <a
                    href={`http://www.facebook.com/share.php?u=${location}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='/img/common/icon_facebook.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${location}&text=${article.name}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='/img/common/icon_twitter.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://social-plugins.line.me/lineit/share?url=${location}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='/img/common/icon_line.svg' alt='' />
                  </a>
                </li>
              </ul>
            </>
          )}
        </aside>
      </div>
    </div>
  )
}

const detailPartnerBox = css`
  ${mqPc} {
    max-width: 600px;
    margin: 0 auto 0;
  }
`

const detailPartnerCategoryList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 30px auto 0;
  ${mqPc} {
    margin: 20px 0 0;
    flex-direction: row;
  }
`

const detailPartnerCategory = (color: string) => css`
  text-align: center;
  width: 170px;
  height: 25px;
  background: ${color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
`

const detailPartnerInfo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  ${mqPc} {
    justify-content: flex-start;
  }
  img {
    width: 36px;
    ${mqPc} {
      width: 58px;
    }
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

export default PartnerDetail
