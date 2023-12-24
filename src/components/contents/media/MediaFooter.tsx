import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import FooterCta from '@app/components/blocks/FooterCta'
import { colorBase, hover, mqPc } from '@app/styles/variables'
import { Category } from '@app/types/newt'

type Props = {
  categories: Category[]
}

const MediaFooter: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <FooterCta />
      <footer css={footerContainer}>
        <div css={footerContent}>
          <div css={footerLeft}>
            <img css={footerLogo} src='/img/common/logo.svg' alt='イキイキ（ＩＫ！ＩＫ！）' />
            <div css={footerBox}>
              <p>IK!IK!メディアの記事カテゴリー</p>
              <ul css={footerCategory}>
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link href={`/media/category/${category.slug}`}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div css={footerRight}>
            <div css={footerBox}>
              <p>IK!IK!について</p>
              <div css={footerAbout}>
                <ul>
                  <li>
                    <Link href=''>ホーム</Link>
                  </li>
                  <li>
                    <Link href='/service'>サービス</Link>
                  </li>
                  <ul>
                    <li>
                      <Link href='/service/company'>企業向け</Link>
                    </li>
                    <li>
                      <Link href='/service/school'>学校向け</Link>
                    </li>
                    <li>
                      <Link href='/service/sports'>スポーツ向け</Link>
                    </li>
                  </ul>
                </ul>
                <ul>
                  <li>
                    <Link href='/mission'>ミッション</Link>
                  </li>
                  <li>
                    <Link href='/column'>社長コラム</Link>
                  </li>
                  <li>
                    <Link href='/company'>会社概要</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href='/case'>成果事例</Link>
                  </li>
                  <li>
                    <Link href='/media'>メディアTOP</Link>
                  </li>
                  <li>
                    <Link href='/seminar'>セミナー</Link>
                  </li>
                  <li>
                    <Link href='/partner'>パートナー紹介</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div css={footerLinkBottom}>
          <ul>
            <li>
              <Link href='/news'>お知らせ</Link>
            </li>
            <li>
              <Link href='/privacy'>プライバシーポリシー</Link>
            </li>
            <li>
              <Link href='/contact'>お問い合わせ</Link>
            </li>
            <li>
              <Link href='/document-contact'>資料請求</Link>
            </li>
          </ul>
          <p>Copyright © IK!IK!.inc 2023</p>
        </div>
      </footer>
    </>
  )
}

const footerContainer = css`
  padding: 30px 16px;
  background: #fff2f6;
  ${mqPc} {
    padding: 40px 0;
  }
`

const footerContent = css`
  ${mqPc} {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const footerLeft = css`
  ${mqPc} {
    width: calc(50% - 10px);
  }
`

const footerRight = css`
  margin-top: 40px;
  ${mqPc} {
    width: calc(50% - 10px);
    margin-top: 0;
  }
`

const footerLogo = css`
  width: 240px;
`

const footerBox = css`
  margin-top: 20px;
  & > p {
    font-size: 16px;
    margin-top: 30px;
  }
`

const footerCategory = css`
  background: #fff;
  border-radius: 10px;
  margin-top: 15px;
  padding: 25px 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 0;
  ${mqPc} {
    padding: 40px 80px;
    justify-content: center;
    gap: 40px 60px;
    border-radius: 20px;
  }
  li {
    width: 50%;
    ${mqPc} {
      width: auto;
    }
    a {
      color: ${colorBase};
      font-size: 16px;
      ${hover};
    }
  }
`

const footerAbout = css`
  background: #fff;
  border-radius: 10px;
  margin-top: 15px;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 0;
  ${mqPc} {
    flex-wrap: nowrap;
    padding: 40px;
  }
  & > ul {
    width: 50%;
    padding-left: 20px;
    ${mqPc} {
      width: calc(100% / 3);
    }
    & > li {
      &:not(:first-of-type) {
        margin-top: 30px;
      }
      & > a {
        color: ${colorBase};
        font-size: 16px;
      }
    }
    & > ul {
      margin-top: 20px;
      & > li {
        &:not(:first-of-type) {
          margin-top: 14px;
        }
        & > a {
          color: #727272;
          font-size: 16px;
          padding-left: 18px;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 12px;
            height: 1px;
            background: #727272;
          }
        }
      }
    }
  }
`

const footerLinkBottom = css`
  border-top: 1px solid #dddddd;
  margin-top: 60px;
  padding-top: 30px;
  ${mqPc} {
    max-width: 1280px;
    margin: 70px auto 0;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    ${mqPc} {
      justify-content: flex-end;
      flex-wrap: nowrap;
      gap: 40px;
      max-width: 1100px;
      margin: 0 auto;
    }
    a {
      font-size: 14px;
      color: ${colorBase};
    }
  }
  p {
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
  }
`

export default MediaFooter
