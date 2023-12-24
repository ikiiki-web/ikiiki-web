import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SeminarList from './SeminarList'
import { Button } from '@app/components/atoms/Button'
import {
  detail,
  detailInner,
  detailMain,
  detailBox,
  detailTitle,
  detailThumbnail,
  detailContent,
  detailContentBtn,
  detailSide,
  detailSideBanner,
  detailSideSns,
  detailFixedSns,
  detailDate,
  detailHead,
  detailLabel,
  detailLabelClose,
  detailRelatedSeminar,
  detailContactBtn,
  detailContentTable,
  detailSpeaker,
} from '@app/styles/component/detail'
import { SeminarArticle, SeminarArticles } from '@app/types/newt'

type Props = {
  article: SeminarArticle
  seminarArticles: SeminarArticles
}

const Detail: React.FC<Props> = ({ article, seminarArticles }) => {
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
              {article.accepting ? (
                <p css={detailLabel}>開催中</p>
              ) : (
                <p css={detailLabelClose}>終了</p>
              )}
              <p css={detailDate}>開催日時 {article.eventDate}</p>
            </div>
            <h1 css={detailTitle}>{article.title}</h1>
            <img css={detailThumbnail} src={article.thumbnail?.src} alt='' />
            <div
              dangerouslySetInnerHTML={{
                __html: `${article.introduct}`,
              }}
              css={detailContent}
            />
            {article.accepting && (
              <Link href='/seminar-contact' css={detailContactBtn}>
                このセミナーに申し込む
              </Link>
            )}
            {article.content.map((item) => (
              <div key={item._id}>
                {item.type === 'RICH_TEXT' && (
                  <div
                    key={item._id}
                    dangerouslySetInnerHTML={{
                      __html: `${item.data}`,
                    }}
                    css={detailContent}
                  />
                )}
                {item.type === 'button' && (
                  <a
                    css={detailContentBtn}
                    href={item.data.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.data.text}
                  </a>
                )}
                {item.type === 'TABLE' && (
                  <table css={detailContentTable}>
                    <tbody>
                      {item.data.tableItems.map((item) => (
                        <tr key={item.title}>
                          <th>{item.title}</th>
                          <td>{item.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
            {article.speaker && (
              <div css={detailContent}>
                <h2>登壇者</h2>
                <div css={detailSpeaker}>
                  <img src={article.speaker.thumbnail?.src} alt='' />
                  <div>
                    <p>{article.speaker.company}</p>
                    <p>
                      <span>代表者</span>
                      {article.speaker.name}
                    </p>
                    <p>{article.speaker.career}</p>
                  </div>
                </div>
              </div>
            )}
            {article.accepting && (
              <Link href='/seminar-contact' css={detailContactBtn}>
                このセミナーに申し込む
              </Link>
            )}
          </article>
          <div css={detailRelatedSeminar}>
            <h2>開催予定のセミナー</h2>
            <SeminarList seminarArticles={seminarArticles} />
            <div>
              <Button href='/seminar'>セミナーの一覧へ戻る</Button>
            </div>
          </div>
        </div>
        <aside css={detailSide}>
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
