import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import IconArw from '@app/components/atoms/icons/IconArw'
import IconDocument from '@app/components/atoms/icons/IconDocument'
import IconMail from '@app/components/atoms/icons/IconMail'
import IconMonitor from '@app/components/atoms/icons/IconMonitor'
import { line } from '@app/styles/animate'
import { colorSecondary, colorPrimary, mqPc, onlySp, mqPcS, mqHL } from '@app/styles/variables'

const TopMv = () => {
  return (
    <section css={topMvContainer}>
      <span css={[topMvLine01, topMvLineAnime01]} />
      <span css={[topMvLine02, topMvLineAnime02]} />
      <span css={[topMvLine03, topMvLineAnime03]} />
      <span css={[topMvLine04, topMvLineAnime04]} />
      <div css={topMvContent}>
        <div css={topMvFirst}>
          <div css={topMvWood}>
            <Image src='/img/top/mv_wood01.png' alt='' fill sizes='100%' priority />
          </div>
          <div css={topMvPerson}>
            <div css={topMvPersonItem}>
              <Image src='/img/top/mv_person01.png' alt='' fill sizes='100%' />
            </div>
            <div css={topMvPersonItem}>
              <Image src='/img/top/mv_person02.png' alt='' fill sizes='100%' />
            </div>
            <div css={topMvPersonItem}>
              <Image src='/img/top/mv_person03.png' alt='' fill sizes='100%' />
            </div>
            <div css={topMvPersonItem}>
              <Image src='/img/top/mv_person04.png' alt='' fill sizes='100%' />
            </div>
          </div>
        </div>
        <div css={topMvIkiiki}>
          <div css={topMvWoodIkiiki}>
            <Image src='/img/top/mv_wood02.png' alt='' fill sizes='100%' />
          </div>
          <div css={topMvPersonIkiiki}>
            <div css={topMvPersonItemIkiiki}>
              <Image src='/img/top/mv_person01_2.png' alt='' fill sizes='100%' />
            </div>
            <div css={topMvPersonItemIkiiki}>
              <Image src='/img/top/mv_person02_2.png' alt='' fill sizes='100%' />
            </div>
            <div css={topMvPersonItemIkiiki}>
              <Image src='/img/top/mv_person03_2.png' alt='' fill sizes='100%' />
            </div>
            <div css={topMvPersonItemIkiiki}>
              <Image src='/img/top/mv_person04_2.png' alt='' fill sizes='100%' />
            </div>
          </div>
        </div>

        <div css={topMvBox}>
          <h2 css={topMvHead}>
            <span>人、</span>
            <span>組織、</span>
            <span>イキイキ！</span>
          </h2>
          <p css={topMvDesc}>
            顧客視点に立って、
            <br css={onlySp} />
            人が”活きる”組織の実現を支援します
          </p>

          {/* SP */}
          <div css={topMvBtnSp}>
            <Link href='/document-contact' data-gtm-click='cta-top-mv-document'>
              <IconDocument />
              資料請求
            </Link>
            <Link href='/contact' data-gtm-click='cta-top-mv-contact'>
              <IconMail />
              相談する
            </Link>
          </div>
          {/* PC */}
          <div css={topMvBtnPc}>
            <Link href='/document-contact' data-gtm-click='cta-top-mv-document'>
              <IconDocument />
              <IconArw />
              資料を見てみる
            </Link>
            <Link href='/contact' data-gtm-click='cta-top-mv-contact'>
              <img src='/img/common/cta_label.png' alt='まずは' />
              <IconMonitor />
              <IconArw />
              相談してみる
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const topMvLineAnime = css`
  @keyframes fadeInLineSp {
    0% {
      transform: translate(-500px, 500px) rotate(140deg);
    }
    100% {
      transform: translate(0px, 0px) rotate(140deg);
    }
  }
  @keyframes fadeInLinePc {
    0% {
      transform: translate(-1500px, 1500px) rotate(140deg);
    }
    100% {
      transform: translate(0px, 0px) rotate(140deg);
    }
  }
  animation: fadeInLineSp 0.5s forwards;
  transform: translate(-500px, 500px) rotate(140deg);
  ${mqPc} {
    animation: fadeInLinePc 0.5s forwards;
    transform: translate(-1500px, 1500px) rotate(140deg);
  }
`

const topMvLineAnime01 = css`
  ${topMvLineAnime};
  animation-delay: 0.5s;
  ${mqPc} {
    animation-delay: 0.5s;
  }
`

const topMvLineAnime02 = css`
  ${topMvLineAnime};
  animation-delay: 0.6s;
  ${mqPc} {
    animation-delay: 0.6s;
  }
`

const topMvLineAnime03 = css`
  ${topMvLineAnime};
  animation-delay: 0.7s;
  ${mqPc} {
    animation-delay: 0.7s;
  }
`

const topMvLineAnime04 = css`
  ${topMvLineAnime};
  animation-delay: 0.8s;
  ${mqPc} {
    animation-delay: 0.8s;
  }
`

const topMvLine01 = css`
  ${line('#2180ac', 4.5)};
  top: 50px;
  right: 50px;
  ${mqPc} {
    right: 10vw;
    top: -8vh;
  }
`

const topMvLine02 = css`
  ${line('#7BA333', 5.5)};
  top: 340px;
  left: -80px;
  ${mqPc} {
    left: -100px;
    right: 0;
    margin: auto;
    bottom: -150px;
  }
`

const topMvLine03 = css`
  ${line('#E68635', 5)};
  top: 250px;
  right: -100px;
  ${mqPc} {
    top: 2vw;
    right: -15vw;
  }
`

const topMvLine04 = css`
  ${line('#CE3C5E', 6)};
  bottom: 80px;
  right: -50px;
`

const topMvContainer = css`
  position: relative;
  padding: 110px 0 70px;
  margin-top: -78px;
  z-index: 10;
  ${mqPc} {
    margin-top: 0;
    padding: 0;
    height: calc(100vh - 74px);
  }
  ${mqHL} {
    height: auto;
  }
`

const topMvContent = css`
  ${mqPc} {
    display: flex;
    align-items: center;
    position: relative;
    height: 100vh;
  }
`

const topMvWood = css`
  width: 300px;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 230px;
  margin: auto;
  z-index: -1;
  animation: fadeIn 1s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  ${mqPc} {
    width: 43vw;
    right: auto;
    left: 4vw;
    top: 6vh;
    max-height: 1000px;
  }
  & > img {
    position: unset !important;
  }
`

const topMvWoodIkiiki = css`
  ${topMvWood};
  width: 330px;
  top: 215px;
  ${mqPc} {
    width: calc(43vw + 30px);
    left: calc(4vw - 15px);
    top: 7vh;
  }
`

const topMvBox = css`
  ${mqPc} {
    width: 50vw;
    margin-left: auto;
    margin-top: -10vh;
  }
`

const topMvHead = css`
  text-align: center;
  font-weight: 900;
  font-style: italic;
  line-height: 1.3;
  ${mqPc} {
    text-align: left;
    font-size: 56px;
    line-height: 1.5;
  }
  ${mqPcS} {
    font-size: 45px;
  }
  @keyframes fadeInHead {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  span {
    font-size: 36px;
    letter-spacing: 0;
    opacity: 0;
    transform: translateX(-20px);
    display: inline-block;
    animation: fadeInHead 0.5s forwards;
    ${mqPc} {
      font-size: 64px;
    }
    ${mqPcS} {
      font-size: 55px;
    }
    &:nth-of-type(1) {
      color: #7ba333;
      animation-delay: 1.5s;
    }
    &:nth-of-type(2) {
      color: #2180ac;
      animation-delay: 1.7s;
      ${mqPc} {
        margin-left: -20px;
      }
    }
    &:nth-of-type(3) {
      color: #ce3c5e;
      animation-delay: 1.9s;
      ${mqPc} {
        margin-left: -20px;
      }
    }
  }
  small {
    font-size: 28px;
    ${mqPc} {
      font-size: 48px;
    }
    ${mqPcS} {
      font-size: 40px;
    }
  }
`

const topMvDesc = css`
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
  margin-top: 15px;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInHead 0.5s 2.1s forwards;
  ${mqPc} {
    text-align: left;
    font-size: 16px;
    margin-left: 50px;
  }
`

const topMvBtnSp = css`
  display: flex;
  justify-content: space-between;
  width: 330px;
  margin: 340px auto 0;
  @keyframes fadeInBtn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  opacity: 0;
  animation: fadeInBtn 0.5s 4.5s forwards;
  ${mqPc} {
    display: none;
  }
  a {
    width: calc(50% - 5px);
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    position: relative;
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

const topMvBtnPc = css`
  display: none;
  ${mqPc} {
    display: flex;
    margin: 60px 0 0;
    margin-left: 50px;
    flex-direction: column-reverse;
    @keyframes fadeInBtn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    opacity: 0;
    animation: fadeInBtn 0.5s 4.5s forwards;
    a {
      width: 380px;
      height: 72px;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      position: relative;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
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
      img {
        width: 65px;
        position: absolute;
        left: 3px;
        top: -30px;
      }
      svg {
        stroke: #fff;
        transition: 0.3s;
        &:nth-of-type(1) {
          width: 32px;
          margin-right: 8px;
        }
        &:nth-of-type(2) {
          position: absolute;
          width: 12px;
          right: 20px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
      &:hover {
        &:before {
          width: 100%;
        }
        svg {
          &:nth-of-type(2) {
            transform: translate(5px);
          }
        }
      }
      &:nth-of-type(1) {
        background: ${colorSecondary};
        border: 3px solid ${colorSecondary};
        margin-top: 20px;
        &:hover {
          color: ${colorSecondary};
          svg {
            stroke: ${colorSecondary};
          }
        }
      }
      &:nth-of-type(2) {
        background: ${colorPrimary};
        border: 3px solid ${colorPrimary};
        &:hover {
          color: ${colorPrimary};
          svg {
            stroke: ${colorPrimary};
          }
        }
      }
    }
  }
`

const topMvPerson = css`
  width: 330px;
  left: 0;
  right: 0;
  margin: auto;
  top: 250px;
  position: absolute;
  ${mqPc} {
    width: 40vw;
    right: auto;
    top: 10vh;
  }
`

const topMvPersonIkiiki = css`
  ${topMvPerson};
  ${mqPc} {
    width: calc(40vw + 100px);
    left: -50px;
  }
`

const topMvPersonItem = css`
  /* 共通 */
  position: absolute;
  & > img {
    position: unset !important;
  }
  @keyframes fadeInPersonRight {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fadeInPersonLeft {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &:nth-of-type(1) {
    left: 30px;
    top: 0;
    width: 80px;
    opacity: 0;
    transform: translateX(-50px);
    animation: fadeInPersonRight 0.5s 3s forwards;
    ${mqPc} {
      width: 29%;
      left: 14%;
    }
  }
  &:nth-of-type(2) {
    left: 105px;
    top: 30px;
    width: 70px;
    opacity: 0;
    transform: translateX(-50px);
    animation: fadeInPersonRight 0.5s 3.4s forwards;
    ${mqPc} {
      width: 25%;
      left: 41%;
      top: 80px;
    }
  }
  &:nth-of-type(3) {
    right: 100px;
    top: 0px;
    width: 70px;
    opacity: 0;
    transform: translateX(50px);
    animation: fadeInPersonLeft 0.5s 3.6s forwards;
    ${mqPc} {
      width: 26%;
      right: 10%;
    }
  }
  &:nth-of-type(4) {
    right: 30px;
    top: 25px;
    width: 110px;
    opacity: 0;
    transform: translateX(50px);
    animation: fadeInPersonLeft 0.5s 3.2s forwards;
    ${mqPc} {
      width: 40%;
      right: -15%;
      top: 50px;
    }
  }
`

const topMvPersonItemIkiiki = css`
  ${topMvPersonItem};
  &:nth-of-type(1) {
    width: 100px;
    left: 10px;
    ${mqPc} {
      width: 32%;
      left: 17%;
      top: -25px;
    }
  }
  &:nth-of-type(2) {
    width: 107px;
    left: 70px;
    top: 20px;
    ${mqPc} {
      width: 33%;
      left: 35%;
      top: 20px;
    }
  }

  &:nth-of-type(3) {
    width: 80px;
    right: 100px;
    ${mqPc} {
      width: 25%;
      right: 12%;
    }
  }
  &:nth-of-type(4) {
    width: 125px;
    right: 10px;
    ${mqPc} {
      width: 39%;
      right: -15%;
      top: 50px;
    }
  }
`

// 二つを切り替え
const topMvFirst = css`
  opacity: 1;
  @keyframes fadeInFirst {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeInFirst 8s 2s infinite;
`

const topMvIkiiki = css`
  opacity: 0;
  @keyframes fadeInIkiiki {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: fadeInIkiiki 8s 2s infinite;
`

export default TopMv
