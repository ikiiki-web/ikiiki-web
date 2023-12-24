import { css } from '@emotion/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { mqPc, colorPrimary, colorBase, hover } from '@app/styles/variables'
import { Category, MediaArticle } from '@app/types/newt'

type Props = {
  article?: MediaArticle
  mediaPopularArticles: MediaArticle[]
  categories: Category[]
}

const MediaSide: React.FC<Props> = ({ article, mediaPopularArticles, categories }) => {
  const [location, setLocation] = useState('')
  useEffect(() => {
    setLocation(document.location.href)
  }, [])

  return (
    <aside css={mediaContentSide}>
      <div css={mediaContentSideBox(!!article?._id)}>
        <div css={mediaContentSidePopular}>
          <p>よく読まれている記事</p>
          <ul>
            {mediaPopularArticles.map((article, i) => (
              <li key={article._id}>
                <Link href={`/media/detail/${article.slug}`}>
                  <span
                    style={{
                      background:
                        i === 0
                          ? '#CE3C5E'
                          : i === 1
                          ? '#7BA333'
                          : i === 2
                          ? '#E68635'
                          : i === 3
                          ? '#2180AC'
                          : i === 4
                          ? '#004D36'
                          : '',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <img src={article.thumbnail?.src} alt='' />
                  </div>
                  <p>{article.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div css={mediaContentSideCategory}>
          <p>カテゴリー</p>
          <ul>
            {categories.map((category) => (
              <li key={category._id}>
                <Link href={`/media/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div css={mediaContentSideBanner}>
        <Link href='/service'>
          <img src='/img/banner/service.png' alt='' />
        </Link>
        <Link href='/contact'>
          <img src='/img/banner/contact.png' alt='' />
        </Link>
        <Link href='/document-contact'>
          <img src='/img/banner/document.png' alt='' />
        </Link>
      </div>
      {article && location && (
        <>
          <ul css={mediaContentSideSns}>
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
          <ul css={mediaContentFixedSns}>
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
  )
}

const mediaContentSide = css`
  max-width: 300px;
  margin: 60px auto 0;
  ${mqPc} {
    width: 300px;
    margin: 0%;
  }
`

const mediaContentSideBox = (detail: boolean) => css`
  background: ${detail ? '#fff' : '#fff2f680'};
  border-radius: 20px;
  padding: 30px 0;
`

const mediaContentSidePopular = css`
  & > p {
    text-align: center;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  ul {
    padding: 30px 20px 40px;
    li {
      position: relative;
      &:not(:first-of-type) {
        margin-top: 30px;
      }
      span {
        position: absolute;
        counter-increment: number 1;
        width: 30px;
        height: 20px;
        border-radius: 6px 6px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        top: -20px;
      }
      a {
        display: flex;
        justify-content: space-between;
        ${hover};
        & > div {
          width: 76px;
          height: 76px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }
        p {
          width: calc(100% - 84px);
          text-align: left;
          color: ${colorBase};
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.75;
        }
      }
    }
  }
`

const mediaContentSideCategory = css`
  border-top: 1px solid #dddddd;
  & > p {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 15px 0;
  }
  ul {
    border-bottom: 1px solid #dddddd;
    li {
      a {
        display: block;
        padding: 15px 20px;
        border-top: 1px solid #dddddd;
        color: ${colorBase};
        font-size: 14px;
        ${hover};
      }
    }
  }
`

const mediaContentSideBanner = css`
  margin-top: 20px;
  ${mqPc} {
    margin-top: 20px;
  }
  a {
    display: block;
    ${hover};
    &:not(:first-of-type) {
      margin-top: 10px;
    }
    img {
      display: block;
      width: 100%;
    }
  }
`

const mediaContentSideSns = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 14px;
  a {
    display: block;
    width: 46px;
    ${hover};
    img {
      width: 100%;
      display: block;
    }
  }
`

const mediaContentFixedSns = css`
  display: none;
  ${mqPc} {
    display: block;
    position: fixed;
    left: 20px;
    top: 280px;
    a {
      display: block;
      width: 46px;
      margin-bottom: 14px;
      ${hover};
      img {
        width: 100%;
        display: block;
      }
    }
  }
`

export default MediaSide
