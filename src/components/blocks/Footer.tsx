import { css } from '@emotion/react'
import Link from 'next/link'
import FooterCta from './FooterCta'
import { colorBase, hover, mqPc, onlySp } from '@app/styles/variables'

const Footer = () => {
  return (
    <>
      <FooterCta />
      <footer css={footerContainer}>
        <div css={footerMain}>
          <div>
            <img css={footerLogo} src='/img/common/logo.svg' alt='イキイキ（ＩＫ！ＩＫ！）' />
            <p css={footerInfo}>
              <span>株式会社イキイキ（ＩＫ！ＩＫ！）</span>
              〒104-0004
              <br />
              東京都港区赤坂1丁目14-5
              <br />
              アークヒルズエグゼクティブタワーN912
            </p>
          </div>
          <div css={footerLink}>
            <ul css={footerLinkBox}>
              <li>
                <Link href='/'>ホーム</Link>
              </li>
              <li>
                <Link href='/service'>サービス</Link>
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
              </li>
            </ul>
            <ul css={footerLinkBox}>
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
            <ul css={footerLinkBox}>
              {/* <li>
                <Link href='/case'>成果事例</Link>
              </li>
              <li>
                <Link href='/media'>メディアTOP</Link>
              </li>
              <li>
                <Link href='/seminar'>セミナー</Link>
              </li> */}
              <li>
                <Link href='/partner'>パートナー紹介</Link>
              </li>
            </ul>
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
  padding: 30px 40px;
  ${mqPc} {
    padding: 40px 0;
  }
`

const footerMain = css`
  ${mqPc} {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
  }
`

const footerLogo = css`
  width: 240px;
  ${mqPc} {
    width: 320px;
  }
`

const footerInfo = css`
  font-size: 14px;
  line-height: 1.8;
  margin-top: 15px;
  ${mqPc} {
    margin-top: 25px;
  }
  span {
    display: block;
    margin-bottom: 10px;
  }
`

const footerLink = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 0;
  margin-top: 40px;
  ${mqPc} {
    flex-wrap: nowrap;
    width: 500px;
    justify-content: space-between;
  }
`

const footerLinkBox = css`
  width: 50%;
  border-left: 1px solid #dddddd;
  padding-left: 20px;
  ${mqPc} {
    width: auto;
    border-left: none;
  }
  & > li {
    a {
      font-size: 16px;
      color: ${colorBase};
      line-height: 1.5;
      ${hover};
    }
    &:not(:first-of-type) {
      margin-top: 30px;
    }
    ul {
      padding-left: 15px;
      margin-top: 20px;
      li {
        margin-top: 15px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 2px;
          bottom: 0;
          left: -15px;
          margin: auto;
          width: 10px;
          height: 1px;
          background: #727272;
        }
        a {
          color: #727272;
          line-height: 1.5;
          ${hover};
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
      ${hover};
    }
  }
  p {
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
  }
`

export default Footer
