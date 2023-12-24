import React, { useEffect, useState } from 'react'
import { Button } from '@app/components/atoms/Button'
import { dateFormat } from '@app/components/modules/dateFormat'
import {
  detail,
  detailBox,
  detailTitle,
  detailThumbnail,
  detailContent,
  detailContentBtn,
  detailFixedSns,
  detailHead,
  detailDate,
  detailInnerS,
  detailBackLink,
} from '@app/styles/component/detail'
import { NewsArticle } from '@app/types/newt'

type Props = {
  article: NewsArticle
}

const NewsDetail: React.FC<Props> = ({ article }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    setLocation(document.location.href)
  }, [])

  return (
    <div css={detail}>
      <div css={detailInnerS}>
        <article css={detailBox}>
          <div css={detailHead}>
            <p css={detailDate}>投稿日 {dateFormat(article.createdAt)}</p>
          </div>
          <h1 css={detailTitle}>{article.title}</h1>
          <img css={detailThumbnail} src={article.thumbnail?.src} alt='' />
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
        <div css={detailBackLink}>
          <Button href='/news'>お知らせの一覧へ戻る</Button>
        </div>
      </div>
      {location && (
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
      )}
    </div>
  )
}

export default NewsDetail
