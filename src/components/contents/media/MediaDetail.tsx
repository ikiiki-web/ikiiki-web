import Link from 'next/link'
import React from 'react'
import MediaList from './MediaList'
import MediaSide from './MediaSide'
import { Button } from '@app/components/atoms/Button'
import { dateFormat } from '@app/components/modules/dateFormat'
import {
  detail,
  detailInner,
  detailMain,
  detailBox,
  detailTitle,
  detailThumbnail,
  detailContent,
  detailContentBtn,
  detailTags,
  detailRelated,
  detailHead,
  detailDate,
  detailCategoryMedia,
  detailWriter,
  detailWriterContent,
  detailWriterIcon,
  detailWriterInfo,
  detailWriterTitle,
  detailBanners,
} from '@app/styles/component/detail'
import { Category, MediaArticle } from '@app/types/newt'

type Props = {
  article: MediaArticle
  relationArticles: MediaArticle[]
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const Detail: React.FC<Props> = ({
  article,
  relationArticles,
  mediaPopularArticles,
  categories,
}) => {
  return (
    <div css={detail}>
      <div css={detailInner}>
        <div css={detailMain}>
          <article css={detailBox}>
            <div css={detailHead}>
              {article?.category && (
                <Link href={`/media/category/${article.category.slug}`} css={detailCategoryMedia}>
                  {article.category.name}
                </Link>
              )}
              <p css={detailDate}>更新日 {dateFormat(article._sys.updatedAt)}</p>
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
            <div css={detailWriter}>
              <p css={detailWriterTitle}>
                <img src='/img/common/icon_edit.svg' alt='' />
                この記事を書いた人
              </p>
              <div css={detailWriterContent}>
                <img css={detailWriterIcon} src={article.writer.thumbnail?.src} alt='' />
                <div css={detailWriterInfo}>
                  <p>{article.writer.post}</p>
                  <p>{article.writer.name}</p>
                  <p>{article.writer.career}</p>
                </div>
              </div>
            </div>
          </article>
          <div css={detailRelated}>
            <h2>関連記事</h2>
            <MediaList mediaArticles={relationArticles} />
            <div>
              <Button href='/media/new'>新着記事の一覧へ戻る</Button>
            </div>
          </div>
        </div>
        <MediaSide
          article={article}
          mediaPopularArticles={mediaPopularArticles}
          categories={categories}
        />
      </div>
    </div>
  )
}

export default Detail
