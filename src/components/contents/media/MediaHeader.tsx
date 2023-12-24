import { css } from '@emotion/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import IconArw from '@app/components/atoms/icons/IconArw'
import IconDocument from '@app/components/atoms/icons/IconDocument'
import IconExternalLink from '@app/components/atoms/icons/IconExternalLink'
import IconMail from '@app/components/atoms/icons/IconMail'
import { colorBase, colorPrimary, colorSecondary, hover, mqPc, mqPcS } from '@app/styles/variables'
import { Category } from '@app/types/newt'

type Props = {
  categories: Category[]
}

const Header: React.FC<Props> = ({ categories }) => {
  const [isSpMenu, setIsSpMenu] = useState(false)
  const [isSpHeader, setIsSpHeader] = useState(true)

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
        <div css={headerLeft}>
          <Link href='/' css={headerLogo}>
            <img src='/img/common/logo.svg' alt='イキイキ（ＩＫ！ＩＫ！）' />
          </Link>
          <p css={headerPcText}>
            人が”
            <span>活きる</span>
            ”社会づくりに貢献する人財開発・組織開発支援の情報発信メディア
          </p>
        </div>

        {/* PC */}
        <nav>
          <ul css={headerPcMenu}>
            <li css={headerPcMenuItem}>
              <a href='/company' target='_blank'>
                運営会社
                <IconExternalLink />
              </a>
            </li>
            <li css={headerPcMenuItem}>
              <a href='/case' target='_blank'>
                成果事例
                <IconExternalLink />
              </a>
            </li>
            <li css={headerPcMenuItem}>
              <a href='/service' target='_blank'>
                サービス内容
                <IconExternalLink />
              </a>
            </li>
            <li css={headerPcMenuDocument}>
              <Link href='/document-contact'>
                <IconDocument />
                資料請求
              </Link>
            </li>
            <li css={headerPcMenuContact}>
              <Link href='/contact'>
                <IconMail />
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>

        {/* SP */}
        <button
          css={headerSpBtn(isSpMenu)}
          onClick={() => setIsSpMenu(!isSpMenu)}
          aria-label='メニュー'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div css={headerSpMenu(isSpMenu)}>
          <div css={headerSpMenuLink}>
            <Link href='/media' css={headerSpMenuLinkItem}>
              メディアTOP
              <IconArw color={colorPrimary} />
            </Link>
            {categories.map((category) => (
              <Link
                href={`/media/category/${category.slug}`}
                css={headerSpMenuLinkItem}
                key={category._id}
              >
                {category.name}
                <IconArw color={colorPrimary} />
              </Link>
            ))}
          </div>
          <ul css={headerSpMenuFoot}>
            <li>
              <a href='/company' target='_blank'>
                運営会社
                <IconExternalLink />
              </a>
            </li>
            <li>
              <a href='/case' target='_blank'>
                成果事例
                <IconExternalLink />
              </a>
            </li>
            <li>
              <a href='/service' target='_blank'>
                サービス内容
                <IconExternalLink />
              </a>
            </li>
          </ul>
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
      <ul css={headerPcNav}>
        <li>
          <Link href='/media'>メディアTOP</Link>
        </li>
        {categories.map((category) => (
          <li key={category._id}>
            <Link href={`/media/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <div css={headerSpace} />
    </>
  )
}

const headerContainer = (active: boolean) => css`
  position: fixed;
  transition: 0.5s;
  top: ${active ? 0 : '-52px'};
  left: 0;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid #dddddd;

  ${mqPc} {
    height: 52px;
    background: #fff9fb;
    border-bottom: 1px solid #dddddd;
    top: 0;
  }
`

const headerSpace = css`
  height: 52px;
  ${mqPc} {
    height: 100px;
  }
`

const headerLeft = css`
  display: flex;
  align-items: center;
`

const headerPcText = css`
  display: none;
  ${mqPc} {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-left: 20px;
    span {
      color: ${colorPrimary};
    }
  }
`

const headerLogo = css`
  position: relative;
  z-index: 10;
  margin-left: 5px;
  width: 120px;
  display: block;
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

const headerSpBtn = (active: boolean) => css`
  width: 52px;
  height: 52px;
  background: ${colorPrimary};
  position: relative;
  z-index: 10;
  ${mqPc} {
    display: none;
  }
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

const headerSpMenuFoot = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 40px;
  li {
    a {
      display: flex;
      align-items: center;
      color: #888888;
      font-size: 14px;
      svg {
        width: 11px;
        stroke: #888888;
        margin-left: 8px;
      }
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

const headerPcNav = css`
  display: none;
  ${mqPc} {
    position: fixed;
    left: 0;
    top: 52px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #ddd;
    li {
      width: 200px;
      a {
        width: 100%;
        display: block;
        border-left: 1px solid ${colorPrimary};
        text-align: center;
        color: ${colorBase};
      }
      &:last-of-type {
        a {
          border-right: 1px solid ${colorPrimary};
        }
      }
    }
  }
`

const headerPcMenu = css`
  display: none;
  ${mqPc} {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 30px;
  }
`

const headerPcMenuItem = css`
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #888888;
    font-size: 15px;
    position: relative;
    ${hover};
    svg {
      width: 11px;
      margin-left: 6px;
      stroke: #888888;
    }
  }
`

const headerPcMenuDocument = css`
  a {
    color: ${colorSecondary};
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    ${hover};
    svg {
      width: 24px;
      margin-right: 5px;
      stroke: ${colorSecondary};
    }
  }
`
const headerPcMenuContact = css`
  a {
    color: ${colorPrimary};
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    ${hover};
    svg {
      width: 24px;
      margin-right: 5px;
      stroke: ${colorPrimary};
    }
  }
`

export default Header
