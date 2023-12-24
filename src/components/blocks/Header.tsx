import { css } from '@emotion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import IconArw from '../atoms/icons/IconArw'
import IconDocument from '../atoms/icons/IconDocument'
import IconMail from '../atoms/icons/IconMail'
import { colorBase, colorPrimary, colorSecondary, hover, mqPc, mqPcS } from '@app/styles/variables'

const Header = () => {
  const [isSpMenu, setIsSpMenu] = useState(false)
  const [isSpHeader, setIsSpHeader] = useState(true)
  const [isSpMenuAccordion01, setIsSpMenuAccordion01] = useState(false)
  const [isSpMenuAccordion02, setIsSpMenuAccordion02] = useState(false)

  const [currentScroll, setCurrentScroll] = useState(0)
  const [beforeScroll, setBeforeScroll] = useState(0)

  useEffect(() => {
    const scrollAction = () => {
      setCurrentScroll(window.scrollY)
    }
    window.addEventListener('scroll', scrollAction, {
      capture: false,
      passive: true,
    })
    scrollAction()
    return () => {
      window.removeEventListener('scroll', scrollAction)
    }
  }, [])

  useEffect(() => {
    if (beforeScroll < currentScroll && currentScroll > 50) {
      setIsSpHeader(false)
      setBeforeScroll(currentScroll)
    } else {
      setIsSpHeader(true)
      setBeforeScroll(currentScroll)
    }
  }, [currentScroll])

  return (
    <>
      <header css={headerContainer(isSpHeader)}>
        <Link href='/' css={headerLogo}>
          <img src='/img/common/logo.svg' alt='株式会社イキイキ（ＩＫ！ＩＫ！）' />
        </Link>

        {/* PC */}
        <nav>
          <ul css={headerPcMenu}>
            <li css={headerPcMenuItem}>
              <Link href='/'>ホーム</Link>
            </li>
            <li css={headerPcMenuItem}>
              <a>
                サービス
                <IconArw color='#BCBCBC' />
              </a>
              <ul css={headerPcMenuModal}>
                <li>
                  <Link href='/service'>サービストップ</Link>
                </li>
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
            <li css={headerPcMenuItem}>
              <a>
                IK!IK!とは
                <IconArw color='#BCBCBC' />
              </a>
              <ul css={headerPcMenuModal}>
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
            </li>
            {/* <li css={headerPcMenuItem}>
              <Link href='/case'>成果事例</Link>
            </li>
            <li css={headerPcMenuItem}>
              <Link href='/media'>メディア</Link>
            </li>
            <li css={headerPcMenuItem}>
              <Link href='/seminar'>セミナー</Link>
            </li> */}
            <li css={headerPcMenuItem}>
              <Link href='/partner'>パートナー紹介</Link>
            </li>
            <li css={headerPcMenuDocumentBtn} data-gtm-click='cta-headerfix-document'>
              <Link href='/document-contact'>
                <IconDocument />
                資料請求
              </Link>
            </li>
            <li css={headerPcMenuContactBtn}>
              <Link href='/contact' data-gtm-click='cta-headerfix-contact'>
                <IconMail />
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>

        {/* SP */}
        <ul css={headerSpList}>
          <li>
            <Link href='/document-contact' data-gtm-click='cta-headerfix-document'>
              <IconDocument />
            </Link>
          </li>
          <li>
            <Link href='/contact' data-gtm-click='cta-headerfix-contact'>
              <IconMail />
            </Link>
          </li>
          <li>
            <button
              css={headerSpBtn(isSpMenu)}
              onClick={() => setIsSpMenu(!isSpMenu)}
              aria-label='メニュー'
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>

        <div css={headerSpMenu(isSpMenu)}>
          <div css={headerSpMenuLink}>
            <Link href='/' css={headerSpMenuLinkItem}>
              ホーム
              <IconArw color={colorPrimary} />
            </Link>
            <div
              css={headerSpMenuLinkItemAccordion(isSpMenuAccordion01)}
              onClick={() => setIsSpMenuAccordion01(!isSpMenuAccordion01)}
            >
              サービス
              <IconArw color={colorPrimary} />
            </div>
            <div css={headerSpMenuLinkItemList(isSpMenuAccordion01)}>
              <Link href='/service'>サービストップ</Link>
              <Link href='/service/company'>企業向け</Link>
              <Link href='/service/school'>学校向け</Link>
              <Link href='/service/sports'>スポーツ向け</Link>
            </div>
            <div
              css={headerSpMenuLinkItemAccordion(isSpMenuAccordion02)}
              onClick={() => setIsSpMenuAccordion02(!isSpMenuAccordion02)}
            >
              IK!IK!とは
              <IconArw color={colorPrimary} />
            </div>
            <div css={headerSpMenuLinkItemList(isSpMenuAccordion02)}>
              <Link href='/mission'>ミッション</Link>
              <Link href='/column'>社長コラム</Link>
              <Link href='/company'>会社概要</Link>
            </div>
            {/* <Link href='/case' css={headerSpMenuLinkItem}>
              成果事例
              <IconArw color={colorPrimary} />
            </Link>
            <Link href='/media' css={headerSpMenuLinkItem}>
              メディア
              <IconArw color={colorPrimary} />
            </Link>
            <Link href='/seminar' css={headerSpMenuLinkItem}>
              セミナー
              <IconArw color={colorPrimary} />
            </Link> */}
            <Link href='/partner' css={headerSpMenuLinkItem}>
              パートナー紹介
              <IconArw color={colorPrimary} />
            </Link>
          </div>
          <div css={headerSpMenuBtn}>
            <Link href='/document-contact'>
              <IconDocument />
              資料請求
            </Link>
            <Link href='/contact'>
              <IconMail />
              お問い合わせ
            </Link>
          </div>
        </div>
      </header>
      <div css={headerSpace} />
    </>
  )
}

const headerContainer = (active: boolean) => css`
  position: fixed;
  transition: 0.5s;
  top: ${active ? 0 : '-78px'};
  left: 0;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  ${mqPc} {
    height: 74px;
    border-bottom: 1px solid #dddddd;
    background: #fff;
    top: 0;
  }
`

const headerSpace = css`
  height: 78px;
  ${mqPc} {
    height: 74px;
  }
`

const headerLogo = css`
  position: relative;
  z-index: 10;
  margin-left: 5px;
  width: 150px;
  ${hover};
  ${mqPc} {
    margin-left: 40px;
  }
  ${mqPcS} {
    margin-left: 0;
  }
  img {
    width: 100%;
    display: block;
  }
`

const headerSpList = css`
  display: flex;
  gap: 10px;
  li {
    &:nth-of-type(1) {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: ${colorSecondary};
        svg {
          stroke: #fff;
          width: 24px;
        }
      }
    }
    &:nth-of-type(2) {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: #2180ac;
        svg {
          stroke: #fff;
          width: 24px;
        }
      }
    }
  }
  ${mqPc} {
    display: none;
  }
`

const headerSpBtn = (active: boolean) => css`
  width: 50px;
  height: 50px;
  background: ${colorPrimary};
  border-radius: 50%;
  margin-right: 14px;
  position: relative;
  z-index: 10;
  span {
    position: absolute;
    width: 24px;
    height: 2px;
    background: #fff;
    inset: 0;
    margin: auto;
    transition: 0.3s;
    &:nth-of-type(1) {
      top: ${active ? 0 : '-18px'};
      transform: ${active ? 'rotate(135deg)' : ''};
    }
    &:nth-of-type(2) {
      opacity: ${active ? 0 : 1};
    }
    &:nth-of-type(3) {
      bottom: ${active ? 0 : '-18px'};
      transform: ${active ? 'rotate(45deg)' : ''};
    }
  }
`

const headerSpMenu = (active: boolean) => css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  opacity: ${active ? 1 : 0};
  visibility: ${active ? 'visible' : 'hidden'};
  background: #fff2f6;
  padding: 80px 0 60px;
  box-sizing: border-box;
  overflow: scroll;
`

const headerSpMenuLink = css`
  border-bottom: 1px solid #ce3c5e4d;
`

const headerSpMenuLinkItem = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ce3c5e4d;
  padding: 0 60px;
  height: 60px;
  font-size: 15px;
  color: ${colorBase};
  svg {
    width: 6px;
  }
`

const headerSpMenuLinkItemAccordion = (active: boolean) => css`
  ${headerSpMenuLinkItem};
  svg {
    transition: 0.3s;
    transform: ${active ? 'rotate(270deg)' : 'rotate(90deg)'};
  }
`

const headerSpMenuLinkItemList = (active: boolean) => css`
  max-height: ${active ? '150px' : 0};
  overflow: hidden;
  transition: 0.3s;
  a {
    display: block;
    padding: 10px 60px;
    font-size: 14px;
    color: ${colorBase};
    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`

const headerSpMenuBtn = css`
  width: 320px;
  margin: 20px auto 0;
  display: flex;
  a {
    width: 50%;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    svg {
      width: 24px;
      margin-right: 5px;
      stroke: #fff;
    }
    &:nth-of-type(1) {
      background: ${colorSecondary};
    }
    &:nth-of-type(2) {
      background: ${colorPrimary};
    }
  }
`

const headerPcMenu = css`
  display: none;
  ${mqPc} {
    display: flex;
  }
`

const headerPcMenuItem = css`
  & > a {
    height: 74px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colorBase};
    font-size: 15px;
    position: relative;
    ${mqPcS} {
      padding: 0 8px;
      font-size: 13px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 1px;
      margin: auto;
      width: 0;
      height: 2px;
      background: ${colorPrimary};
      transition: 0.3s;
    }
    svg {
      width: 6px;
      transform: rotate(90deg);
      margin-left: 10px;
      transition: 0.3s;
    }
  }
  &:hover {
    & > a {
      &:before {
        width: 45px;
      }
      + ul {
        opacity: 1;
        visibility: visible;
      }
      svg {
        transform: rotate(270deg);
      }
    }
  }
`

const headerPcMenuModal = css`
  position: absolute;
  width: 100%;
  height: 142px;
  left: 0;
  top: 74px;
  background: #fff2f6;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    visibility: visible;
  }
  li {
    border-left: 1px solid ${colorPrimary};
    &:last-of-type {
      border-right: 1px solid ${colorPrimary};
    }
    a {
      padding: 0 60px;
      font-size: 15px;
      color: ${colorBase};
      ${hover};
    }
  }
`

const headerPcMenuDocumentBtn = css`
  margin-left: 40px;
  ${mqPcS} {
    margin-left: 20px;
  }
  a {
    background: ${colorSecondary};
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 74px;
    ${hover};
    svg {
      width: 24px;
      margin-right: 5px;
      stroke: #fff;
    }
  }
`
const headerPcMenuContactBtn = css`
  a {
    background: ${colorPrimary};
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 74px;
    ${hover};
    svg {
      width: 24px;
      margin-right: 5px;
      stroke: #fff;
    }
  }
`

export default Header
