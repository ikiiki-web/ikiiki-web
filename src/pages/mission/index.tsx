import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Button } from '@app/components/atoms/Button'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { fadeIn } from '@app/styles/animate'
import { columnNavContainer, columnNavTitle, columnNavList } from '@app/styles/component/column'
import { colorPrimary, mqPc, onlySp } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

const CasePage: React.FC = () => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())
  const [ref03, inView03] = useInView(basicAnimation())

  return (
    <PageLayout>
      <HeadMeta title='ミッション｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='ミッション' breadcrumb={[{ name: 'ミッション' }]} />
      <PageContent>
        <section css={missionBox}>
          <div css={missionHead}>
            <p>Mission</p>
            <h2>
              人が
              <span>活きる</span>
              、組織が
              <span>活きる</span>
              、
              <br css={onlySp} />
              成果が
              <span>実る</span>
              。
              <br />
              それが私たちの仕事。
            </h2>
          </div>
          <div css={[missionImgR, fadeIn(inView01)]} ref={ref01}>
            <Image src='/img/mission/img01.png' alt='' fill sizes='100%' />
          </div>
        </section>
        <section css={missionBox}>
          <div css={missionHead}>
            <p>Vision</p>
            <h2>
              世の中が、
              <br css={onlySp} />
              <span>自発的・自律的</span>
              に
              <br />
              活動している人たちであふれている。
              <br />
              世の中が、
              <br css={onlySp} />
              <span>尊重・共感・受容</span>
              の心を持って
              <br />
              他者に接する人たちであふれている。
            </h2>
          </div>
          <div css={[missionImg, fadeIn(inView02)]} ref={ref02}>
            <Image src='/img/mission/img03.png' alt='' fill sizes='100%' />
          </div>
        </section>
        <section css={missionBox}>
          <div css={missionHead}>
            <p>Value</p>
            <h2>
              とことん
              <span>「顧客視点」</span>
              に立ち、
              <br />
              とことん
              <span>「顧客の成果」</span>
              にこだわる。
            </h2>
          </div>
          <div css={[missionImg, fadeIn(inView03)]} ref={ref03}>
            <Image src='/img/mission/img02.png' alt='' fill sizes='100%' />
          </div>
        </section>
      </PageContent>
      <section css={columnNavContainer}>
        <h2 css={columnNavTitle}>IK!IK!についてもっと知りたい方はこちら</h2>
        <ul css={columnNavList}>
          <li>
            <Button href='/column'>社長コラム</Button>
          </li>
          <li>
            <Button href='/company'>会社概要</Button>
          </li>
        </ul>
      </section>
    </PageLayout>
  )
}

const missionBox = css`
  position: relative;
  ${mqPc} {
    margin-top: 80px;
  }
  &:not(:first-of-type) {
    margin-top: 80px;
    ${mqPc} {
      margin-top: 200px;
    }
  }
`

const missionHead = css`
  ${mqPc} {
    display: flex;
    align-items: center;
    height: 215px;
  }
  p {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 3px;
    font-size: 30px;
    color: ${colorPrimary};
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${colorPrimary};
    position: relative;
    ${mqPc} {
      font-size: 64px;
      text-align: left;
      height: 100%;
      letter-spacing: 6.4px;
      width: 30%;
      border-bottom: none;
      border-right: 1px solid ${colorPrimary};
      padding-bottom: 0;
      display: flex;
      align-items: center;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      bottom: -10px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 13px 0 13px;
      border-color: ${colorPrimary} transparent transparent transparent;
      ${mqPc} {
        border-width: 15px 0 15px 13px;
        border-color: transparent transparent transparent ${colorPrimary};
        left: auto;
        bottom: 0;
        top: 0;
        right: -13px;
      }
    }
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 45px;
    line-height: 1.75;
    ${mqPc} {
      width: 70%;
      text-align: left;
      font-size: 28px;
      margin-top: 0;
      padding-left: 70px;
    }
    span {
      color: ${colorPrimary};
    }
  }
`

const missionText = css`
  font-size: 14px;
  line-height: 1.75;
  margin-top: 35px;
  ${mqPc} {
    font-size: 16px;
    margin-top: 60px;
  }
`

const missionTextS = css`
  ${missionText};
  ${mqPc} {
    max-width: 720px;
  }
`

const missionImg = css`
  max-width: 300px;
  margin: 40px auto 0;
  position: relative;
  ${mqPc} {
    max-width: 680px;
    margin: 60px auto 0;
  }
  img {
    position: unset !important;
  }
`

const missionImgR = css`
  ${missionImg};
  ${mqPc} {
    position: absolute;
    max-width: none;
    width: 445px;
    right: -220px;
    top: 50px;
  }
`

export default CasePage
