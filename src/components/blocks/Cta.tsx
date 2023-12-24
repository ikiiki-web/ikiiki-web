import { css } from '@emotion/react'
import Link from 'next/link'
import IconArw from '@app/components/atoms/icons/IconArw'
import IconDocument from '@app/components/atoms/icons/IconDocument'
import IconMonitor from '@app/components/atoms/icons/IconMonitor'
import { colorPrimary, colorSecondary, mqPc, onlySp } from '@app/styles/variables'

const Cta = () => {
  return (
    <section css={ctaContainer}>
      <h2 css={ctaTitle}>
        <img src='/img/top/cta_leaf.svg' alt='' />
        <img src='/img/top/cta_leaf.svg' alt='' />
        今あるお客様の
        <br css={onlySp} />
        「モヤモヤ」を整理し、
        <br />
        「成果」につながる
        <br css={onlySp} />
        ご提案をさせていただきます。
      </h2>
      <div css={ctaBtnContainer}>
        <Link href='/contact' data-gtm-click='cta-top-middle-contact'>
          <IconMonitor />
          <IconArw />
          相談してみる
          <img src='/img/common/cta_label.png' alt='まずは' />
        </Link>
        <Link href='/document-contact' data-gtm-click='cta-top-middle-document'>
          <IconDocument />
          <IconArw />
          資料を見てみる
        </Link>
      </div>
    </section>
  )
}

const ctaContainer = css`
  background: #ce3c5e;
  padding: 65px 0;
  text-align: center;
  ${mqPc} {
    padding: 65px 0 80px;
  }
`

const ctaTitle = css`
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  line-height: 1.5;
  ${mqPc} {
    font-size: 28px;
  }
  img {
    position: absolute;
    top: -35px;
    width: 46px;
    ${mqPc} {
      width: 80px;
    }
    &:nth-of-type(1) {
      left: 0;
      ${mqPc} {
        left: -70px;
      }
    }
    &:nth-of-type(2) {
      right: 0;
      transform: scale(-1, 1);
      ${mqPc} {
        right: -60px;
      }
    }
  }
`

const ctaBtnContainer = css`
  margin: 50px auto 0;
  max-width: 320px;
  ${mqPc} {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
  }
  a {
    position: relative;
    background: #fff;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    border: 3px solid #fff;
    font-size: 18px;
    font-weight: 700;
    transition: 0.3s;
    z-index: 10;
    ${mqPc} {
      width: calc(50% - 20px);
      font-size: 20px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      z-index: -1;
      background: #fff;
      transition: 0.3s;
    }
    &:nth-of-type(1) {
      color: ${colorPrimary};
      svg {
        stroke: ${colorPrimary};
      }
      &:before {
        background: ${colorPrimary};
      }
    }
    &:nth-of-type(2) {
      margin-top: 20px;
      color: ${colorSecondary};
      ${mqPc} {
        margin-top: 0;
      }
      svg {
        stroke: ${colorSecondary};
      }
      &:before {
        background: ${colorSecondary};
      }
    }
    svg {
      transition: 0.3s;
      &:nth-of-type(1) {
        width: 30px;
        margin-right: 8px;
      }
      &:nth-of-type(2) {
        width: 10px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 20px;
      }
    }
    img {
      position: absolute;
      width: 60px;
      left: 5px;
      top: -25px;
    }
    &:hover {
      color: #fff;
      svg {
        stroke: #fff;
        &:nth-of-type(2) {
          transform: translate(5px);
        }
      }
      &:before {
        width: 100%;
      }
    }
  }
`

export default Cta
