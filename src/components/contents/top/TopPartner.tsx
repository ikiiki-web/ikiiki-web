import { css } from '@emotion/react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Button, ButtonMore } from '@app/components/atoms/Button'
import { fadeIn, line } from '@app/styles/animate'
import { mqPc } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

const TopPartner = () => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())
  const [ref03, inView03] = useInView(basicAnimation())
  const [ref04, inView04] = useInView(basicAnimation())

  return (
    <section css={topPartnerContainer}>
      <span css={topPartnerLine01} />
      <span css={topPartnerLine02} />
      <span css={topPartnerLine03} />
      <span css={topPartnerLine04} />
      <span css={topPartnerLine05} />
      <div css={topPartnerInner}>
        <div css={[topPartnerTitle, fadeIn(inView01)]} ref={ref01}>
          <p>
            <span>P</span>
            ARTNER
          </p>
          <h2>パートナー紹介</h2>
        </div>
        <ul css={topPartnerList}>
          <li css={[topPartnerItem, fadeIn(inView02)]} ref={ref02}>
            <div css={[topPartnerItemThumbnail, fadeIn(inView02, 0.5)]}>
              <Image src='/img/top/partner_thumbnail01.png' alt='' fill sizes='100%' />
            </div>
            <h2 css={[topPartnerItemName]}>
              宮崎 志郎
              <img src='/img/common/icon_leaf_yellow_green.svg' alt='' />
            </h2>
            <p css={topPartnerItemHiragana}>shiro miyazaki</p>
            <p css={topPartnerItemDesc}>
              1974年、全日本空輸株式会社へ入社。
              以降、３０年ほど航空機の整備部門に携わり、現業第一線で業務改善やチームづくりを経験し、組織のリーダーとして経営の基盤である航空機の安全運航に努める。
              <br />
              その後、教育訓練部門で階層別研修の担当者として、新人から管理職までの教育に携わり、グループ社員も含めて28000名近くの人材育成を担当する。
            </p>
            <div css={topPartnerItemBtnContainer}>
              <ButtonMore href='/partner/detail/shiro-miyazaki' />
            </div>
          </li>
          <li css={[topPartnerItem, fadeIn(inView03)]} ref={ref03}>
            <div css={[topPartnerItemThumbnail, fadeIn(inView03, 0.5)]}>
              <Image src='/img/top/partner_thumbnail02.png' alt='' fill sizes='100%' />
            </div>
            <h2 css={topPartnerItemName}>
              富田 智晴
              <img src='/img/common/icon_leaf_yellow_blue.svg' alt='' />
            </h2>
            <p css={topPartnerItemHiragana}>tomoharu tomita</p>
            <p css={topPartnerItemDesc}>
              1997年より移動体通信事業に従事、ソフトバンクで人事マネジャー、LINEモバイルで管理部門室長兼CCOを歴任。2020年より大手化学メーカーにて、部長·課長トレーニングおよびキャリア施策を担当。人事および管理部門責任者として、経営層·管理職層の意思決定を人·組織の面で実践的に支援。大手化学メーカーでは、部長層へコーチングを実施。その他、経営層、管理職層、起業家などへのコーチング実績多数。
            </p>
            <div css={topPartnerItemBtnContainer}>
              <ButtonMore href='/partner/detail/tomoharu-tomita' />
            </div>
          </li>
          <li css={[topPartnerItem, fadeIn(inView04)]} ref={ref04}>
            <div css={[topPartnerItemThumbnail, fadeIn(inView04, 0.5)]}>
              <Image src='/img/top/partner_thumbnail03.png' alt='' fill sizes='100%' />
            </div>
            <h2 css={topPartnerItemName}>
              飛田 尚美
              <img src='/img/common/icon_leaf_yellow_red.svg' alt='' />
            </h2>
            <p css={topPartnerItemHiragana}>naomi tobita</p>
            <p css={topPartnerItemDesc}>
              玩具メーカーにて、約30年間、玩具・生活雑貨・デジタルコンテンツ・ネットワークコンテンツ等、様々なジャンルの企画開発業務を経験。
              <br />
              2012年より新規事業を担当するプロパー女性初の取締役を務め、キャラクター横断プロジェクトのリーダーも担う。
              <br />
              2018年から4年間、同グループの管理業務を担当する会社にて取締役を務め、グループ全体の総務・人事を担当。
              <br />
              特に経営人材育成に力を注ぐ。
              <br />
              仕事のモットーは「やるからには楽しく！」
            </p>
            <div css={topPartnerItemBtnContainer}>
              <ButtonMore href='/partner/detail/naomi-tobita' />
            </div>
          </li>
        </ul>
        <div css={topPartnerBtnContainer}>
          <Button href='/partner'>パートナー紹介の一覧</Button>
        </div>
      </div>
    </section>
  )
}

const topPartnerContainer = css`
  background: #fff2e8;
  padding: 40px 20px 60px;
  position: relative;
  z-index: 10;
  ${mqPc} {
    padding: 100px 100px;
  }
`

const topPartnerLine01 = css`
  ${line('#CE3C5E', 0)};
  top: 5%;
  right: -90px;
  ${mqPc} {
    top: 18%;
    right: 2vw;
  }
`

const topPartnerLine02 = css`
  ${line('#7BA333', 1)};
  top: 50%;
  right: -90px;
  ${mqPc} {
    top: 50%;
    right: -5vw;
  }
`

const topPartnerLine03 = css`
  ${line('#CE3C5E', 0)};
  top: 90%;
  right: -90px;
  ${mqPc} {
    top: 85%;
    right: 2vw;
  }
`

const topPartnerLine04 = css`
  ${line('#2180AC', 1)};
  top: 36%;
  left: -90px;
  ${mqPc} {
    top: 45%;
  }
`

const topPartnerLine05 = css`
  ${line('#E68635', 0)};
  top: 70%;
  left: -90px;
  ${mqPc} {
    top: 80%;
  }
`

const topPartnerInner = css`
  ${mqPc} {
    max-width: 950px;
    margin: 0 auto;
  }
`

const topPartnerTitle = css`
  display: flex;
  align-items: center;
  p {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 5px;
    font-size: 40px;
    ${mqPc} {
      font-size: 80px;
    }
    span {
      color: #e68635;
    }
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
    ${mqPc} {
      font-size: 18px;
      margin-left: 20px;
    }
  }
`

const topPartnerList = css`
  margin-top: 80px;
`

const topPartnerItem = css`
  position: relative;
  z-index: 10;
  padding: 40px 20px 60px;
  ${mqPc} {
    margin-left: 200px;
    padding: 100px 90px 60px 90px;
  }
  &:not(:first-of-type) {
    margin-top: 80px;
    ${mqPc} {
      margin-top: 40px;
    }
  }
  &:nth-of-type(even) {
    ${mqPc} {
      margin-left: 100px;
      margin-right: 100px;
    }
    & > div {
      left: auto;
      right: 0;
      ${mqPc} {
        top: auto;
        bottom: 80px;
        right: -200px;
      }
    }
    h2 {
      padding-left: 20px;
      ${mqPc} {
        padding-left: 0;
      }
    }
    p {
      &:nth-of-type(1) {
        padding-left: 20px;
        ${mqPc} {
          padding-left: 0;
        }
      }
    }
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: -1;
    transform: skewY(-6deg);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  }
`

const topPartnerItemThumbnail = css`
  position: absolute;
  width: 110px;
  left: 0;
  top: -40px;
  ${mqPc} {
    width: 240px;
    top: auto;
    bottom: -15px;
    left: -200px;
  }
  img {
    position: unset !important;
  }
`

const topPartnerItemName = css`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  padding-left: 120px;
  ${mqPc} {
    padding-left: 0;
    font-size: 28px;
  }
  img {
    width: 36px;
    margin-left: 5px;
    ${mqPc} {
      width: 58px;
      margin-left: 10px;
    }
  }
`

const topPartnerItemHiragana = css`
  font-size: 12px;
  color: #727272;
  padding-left: 120px;
  margin-top: 15px;
  ${mqPc} {
    padding-left: 0;
    font-size: 14px;
  }
`

const topPartnerItemDesc = css`
  font-size: 13px;
  line-height: 1.8;
  margin-top: 60px;
  ${mqPc} {
    font-size: 14px;
    margin-top: 30px;
  }
`

const topPartnerItemBtnContainer = css`
  a {
    margin-left: auto;
    margin-top: 20px;
    ${mqPc} {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`

const topPartnerBtnContainer = css`
  width: 280px;
  margin: 50px auto 0;
  ${mqPc} {
    margin: 80px auto 0;
  }
`

export default TopPartner
