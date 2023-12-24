import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CaseList from './CaseList'
import { Button } from '@app/components/atoms/Button'
import {
  detail,
  detailInner,
  detailMain,
  detailBox,
  detailCategory,
  detailTitle,
  detailThumbnail,
  detailContent,
  detailContentBtn,
  detailBanners,
  detailTags,
  detailRelated,
  detailSide,
  detailSideCategory,
  detailSideBanner,
  detailSideSns,
  detailFixedSns,
  detailHead,
} from '@app/styles/component/detail'
import { CaseArticle, CaseArticles, Category } from '@app/types/newt'

type Props = {
  article: CaseArticle
  categoryArticles: CaseArticles
  categories?: Category[]
}

const Detail: React.FC<Props> = ({ article, categories, categoryArticles }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    setLocation(document.location.href)
  }, [])

  return (
    <div css={detail}>
      <div css={detailInner}>
        <div css={detailMain}>
          <article css={detailBox}>
            <div css={detailHead}>
              {article?.category && (
                <Link href={`/case/category/${article.category.slug}`} css={detailCategory}>
                  {article.category.name}
                </Link>
              )}
            </div>
            <h1 css={detailTitle}>{article.title}</h1>
            <img css={detailThumbnail} src={article.thumbnail?.src} alt='' />
            <div
              dangerouslySetInnerHTML={{
                __html: `${article.introduct}`,
              }}
              css={detailContent}
            />
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
            {article.banner.length > 0 && (
              <div css={detailBanners}>
                {article.banner.map((banner) => (
                  <a key={banner.name} href={banner.link}>
                    <img src={banner.image.src} alt='' />
                  </a>
                ))}
              </div>
            )}
            <div css={detailTags}>
              <h2>
                <span>＃</span>関連タグ
              </h2>
              <ul>
                {article.tags?.map((tag) => (
                  <li key={tag._id}>＃{tag.name}</li>
                ))}
              </ul>
            </div>
          </article>
          <div css={detailRelated}>
            <h2>同じカテゴリーの成果事例</h2>
            <CaseList caseArticles={categoryArticles} />
            <div>
              <Button href='/case'>成果事例の一覧へ戻る</Button>
            </div>
          </div>
        </div>
        <aside css={detailSide}>
          <div css={detailSideCategory}>
            <h2>カテゴリー</h2>
            <ul>
              {categories?.map((category) => (
                <li key={category._id}>
                  <Link href={`/case/category/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div css={detailSideBanner}>
            {article.category.name === '企業' && (
              <Link href='/service/company'>
                <img src='/img/banner/service_company.png' alt='' />
              </Link>
            )}
            {article.category.name === '学校' && (
              <Link href='/service/school'>
                <img src='/img/banner/service_school.png' alt='' />
              </Link>
            )}
            {article.category.name === 'スポーツ' && (
              <Link href='/service/sports'>
                <img src='/img/banner/service_sports.png' alt='' />
              </Link>
            )}
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
                    href={`https://twitter.com/intent/tweet?url=${location}&text=${article.title}`}
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
                    href={`https://twitter.com/intent/tweet?url=${location}&text=${article.title}`}
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

export default Detail
