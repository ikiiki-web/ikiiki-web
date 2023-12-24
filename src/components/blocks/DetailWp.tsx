import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import ColumnList from '../contents/column/ColumnList'
import { dateFormat } from '../modules/dateFormat'
import {
  detail,
  detailInner,
  detailMain,
  detailBox,
  detailTitle,
  detailThumbnail,
  detailContent,
  detailBanners,
  detailRelated,
  detailSide,
  detailSideCategory,
  detailSideBanner,
  detailSideSns,
  detailFixedSns,
  detailHead,
  detailDate,
  detailCategoryBlue,
  detailWriter,
  detailWriterContent,
  detailWriterTitle,
  detailWriterIcon,
  detailWriterInfo,
} from '@app/styles/component/detail'
import { WP_REST_API_Post } from '@app/types/wp'
import { columnCategories } from '@app/utils/constants'

type Props = {
  article: WP_REST_API_Post
  // categoryArticles: WP_REST_API_Post[]
  // categories: Category[]
}

const DetailWp: React.FC<Props> = ({ article }) => {
  const [location, setLocation] = useState('')
  const [categoryArticles, setCategoryArticles] = useState()

  useEffect(() => {
    setLocation(document.location.href)

    // 同じカテゴリーの成果事例一覧取得
    const getCategoryArticle = async () => {
      const category = columnCategories.find(
        (category) =>
          Number(category.slug) === article.categories?.filter((item) => item !== 1)?.[0],
      )
      const categoryArticles = await fetch(
        `https://ikiiki-column.v3x6y84f.work/wp-json/wp/v2/posts?categories=${category?.slug}&per_page=4`,
      )
        .then((res) => res.json())
        .then((data) => data.filter((articleListItem: any) => articleListItem.id !== article.id))
        .then((data) => data.slice(0, 3))
      setCategoryArticles(categoryArticles)
    }

    getCategoryArticle()
  }, [])

  const category = columnCategories.find(
    (category) => Number(category.slug) === article.categories?.filter((item) => item !== 1)?.[0],
  )

  return (
    <div css={detail}>
      <div css={detailInner}>
        <div css={detailMain}>
          <article css={detailBox}>
            <div css={detailHead}>
              <Link href={`/column/category/${category?.slug}`} css={detailCategoryBlue}>
                {category?.name}
              </Link>
              <p css={detailDate}>更新日 {dateFormat(article.modified)}</p>
            </div>
            <h1 css={detailTitle}>{article.title?.rendered}</h1>
            <img css={detailThumbnail} src={article.thumbnail?.url} alt='' />
            <div
              dangerouslySetInnerHTML={{
                __html: `${article.content?.rendered}`,
              }}
              css={detailContent}
            />
            <div css={detailBanners}>
              <Link href='/contact'>
                <img src='/img/banner/contact_media.png' alt='' />
              </Link>
            </div>

            {/* <div css={detailWriter}>
              <p css={detailWriterTitle}>
                <img src='/img/common/icon_edit.svg' alt='' />
                この記事を書いた人
              </p>
              <div css={detailWriterContent}>
                <img css={detailWriterIcon} src='/img/common/thumbnail_icon.png' alt='' />
                <div css={detailWriterInfo}>
                  <p>代表者</p>
                  <p>栄木 憲太郎</p>
                  <p>
                    経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト経歴テキスト
                  </p>
                </div>
              </div>
            </div> */}
          </article>
          <div css={detailRelated}>
            <h2>関連記事</h2>
            {categoryArticles && <ColumnList columnArticles={categoryArticles} />}
            <div>
              <Button href='/column'>社長コラムの一覧へ戻る</Button>
            </div>
          </div>
        </div>
        <aside css={detailSide}>
          <div css={detailSideCategory}>
            <h2>カテゴリー</h2>
            <ul>
              {columnCategories.map((category) => (
                <li key={category._id}>
                  <Link href={`/column/category/${category.slug}`}>{category.name}</Link>
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
                    href={`https://twitter.com/intent/tweet?url=${location}&text=${article.title?.rendered}`}
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
                    href={`https://twitter.com/intent/tweet?url=${location}&text=${article.title?.rendered}`}
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

export default DetailWp
