import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '@app/styles/animate'
import { colorPrimary, mqPc } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

type Props = {
  title?: string
}

const ServiceNav: React.FC<Props> = ({ title }) => {
  const [ref01, inView01] = useInView(basicAnimation())

  return (
    <section css={serviceNavContainer}>
      {title && <h2 css={serviceNavTitle}>{title}</h2>}
      <ul css={serviceNavList} ref={ref01}>
        <li css={[serviceNavItem, fadeIn(inView01)]}>
          <p>企業向け</p>
          <img src='/img/top/service_nav_img01.png' alt='' />
          <Link href='/service/company'>詳しく見る</Link>
        </li>
        <li css={[serviceNavItem, fadeIn(inView01, 0.3)]}>
          <p>学校向け</p>
          <img src='/img/top/service_nav_img02.png' alt='' />
          <Link href='/service/school'>詳しく見る</Link>
        </li>
        <li css={[serviceNavItem, fadeIn(inView01, 0.6)]}>
          <p>スポーツ向け</p>
          <img src='/img/top/service_nav_img03.png' alt='' />
          <Link href='/service/sports'>詳しく見る</Link>
        </li>
      </ul>
    </section>
  )
}

const serviceNavContainer = css`
  background: #f1f7fa;
  padding: 40px 0;
  ${mqPc} {
    padding: 50px 0;
  }
`

const serviceNavTitle = css`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 30px;
  ${mqPc} {
    font-size: 28px;
    margin-bottom: 40px;
  }
`

const serviceNavList = css`
  ${mqPc} {
    display: flex;
    justify-content: space-around;
    max-width: 1120px;
    margin: 0 auto;
  }
`

const serviceNavItem = css`
  background: #fff;
  border-radius: 12px;
  text-align: center;
  padding: 20px 40px 25px;
  width: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  ${mqPc} {
    width: calc(100% / 3 - 40px / 3);
    padding: 30px 30px 36px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
    margin: 0 auto;
    ${mqPc} {
      font-size: 22px;
      padding-bottom: 15px;
    }
  }
  img {
    width: 120px;
    display: block;
    margin: 10px auto 0;
    ${mqPc} {
      width: 200px;
      margin: 25px auto 0;
    }
  }
  a {
    width: 220px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 20px auto 0;
    position: relative;
    z-index: 10;
    transition: 0.3s;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background: #fff;
      z-index: -1;
      transition: 0.3s;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  &:not(:first-of-type) {
    margin-top: 20px;
    ${mqPc} {
      margin-top: 0;
    }
  }
  &:nth-of-type(1) {
    border: 4px solid ${colorPrimary};
    p {
      border-bottom: 1px solid ${colorPrimary};
    }
    a {
      background: ${colorPrimary};
      border: 3px solid ${colorPrimary};
      &:hover {
        color: ${colorPrimary};
      }
    }
  }
  &:nth-of-type(2) {
    border: 4px solid #7ba333;
    p {
      border-bottom: 1px solid #7ba333;
    }
    a {
      background: #7ba333;
      border: 3px solid #7ba333;
      &:hover {
        color: #7ba333;
      }
    }
  }
  &:nth-of-type(3) {
    border: 4px solid #2180ac;
    p {
      border-bottom: 1px solid #2180ac;
    }
    a {
      background: #2180ac;
      border: 3px solid #2180ac;
      &:hover {
        color: #2180ac;
      }
    }
  }
`

export default ServiceNav
