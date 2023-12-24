import { css } from '@emotion/react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Button } from '@app/components/atoms/Button'
import { fadeIn } from '@app/styles/animate'
import { mqPc, mqPcS, onlyPc, onlySp } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

const TopService = () => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())
  const [ref03, inView03] = useInView(basicAnimation())
  const [ref04, inView04] = useInView(basicAnimation())

  return (
    <section css={[topServiceContainer, fadeIn(inView01)]} ref={ref01}>
      <p css={topServiceEng}>
        <span>S</span>
        ERVICE /<span>S</span>
        OLUTION
      </p>
      <h2 css={[topServiceTitle, fadeIn(inView01)]} ref={ref01}>
        サービス / ソリューション
      </h2>
      <div css={topServiceContent}>
        <div css={[topServiceImg, fadeIn(inView01, 1)]} ref={ref01}>
          <Image src='/img/top/service_img.png' alt='' fill sizes='100%' />
        </div>
        <div css={topServiceBox}>
          <p css={[topServiceHead, fadeIn(inView02)]} ref={ref02}>
            <span css={{ color: '#E68635' }}>「気づく」</span>
            こと、
            <br css={onlySp} />
            <span css={{ color: '#7BA333' }}>「行動する」</span>
            ことに
            <br css={onlyPc} />
            フォーカスし
            <br css={onlySp} />
            <span css={{ color: '#CE3C5E' }}>「成果」</span>
            にコミットする
          </p>
          <p css={[topServiceDesc, fadeIn(inView03)]} ref={ref03}>
            「教える」のではなく「気づいて」もらう。
            <br />
            「行動を促す」のではなく
            <br css={onlySp} />
            「自らが行動しよう」と思う。
            <br />
            だからこそ「成果」につながります。
          </p>
          <ul css={[topServiceList, fadeIn(inView04)]} ref={ref04}>
            <li>
              <img src='/img/common/icon_leaf.svg' alt='' />
              <p>管理職の人財マネジメント力向上</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf.svg' alt='' />
              <p>組織のコミュニケーション活性化</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf.svg' alt='' />
              <p>１ｏｎ１の浸透/定着/効果測定</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf.svg' alt='' />
              <p>自律型人財育成</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf.svg' alt='' />
              <p>コーチングによる行動変容支援</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf.svg' alt='' />
              <p>社会人のための修学旅行</p>
            </li>
          </ul>
        </div>
      </div>

      <div css={topServiceBtn}>
        <Button href='/service'>サービスの詳細</Button>
      </div>
    </section>
  )
}

const topServiceContainer = css`
  padding: 60px 20px;
  ${mqPc} {
    padding: 120px 20px 60px;
  }
`

const topServiceEng = css`
  font-size: 38px;
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  letter-spacing: 2px;
  ${mqPc} {
    font-size: 84px;
    letter-spacing: 5px;
  }
  span {
    color: #2180ac;
  }
`

const topServiceTitle = css`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  ${mqPc} {
    font-size: 18px;
    margin-top: 20px;
  }
`

const topServiceContent = css`
  ${mqPc} {
    display: flex;
    align-items: flex-start;
    max-width: 1120px;
    margin: 80px auto 0;
  }
`

const topServiceImg = css`
  width: 300px;
  display: block;
  margin: 30px auto 0;
  position: relative;
  ${mqPc} {
    width: 43%;
    margin: 0;
  }
  img {
    position: unset !important;
  }
`

const topServiceBox = css`
  ${mqPc} {
    width: 55%;
  }
`

const topServiceHead = css`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 20px;
  text-align: center;
  ${mqPc} {
    margin-top: 0;
    font-size: 28px;
    padding-left: 100px;
  }
  ${mqPcS} {
    font-size: 24px;
  }
`

const topServiceDesc = css`
  font-size: 14px;
  line-height: 1.8;
  margin-top: 20px;
  text-align: center;
  ${mqPc} {
    text-align: left;
    font-size: 16px;
    margin-top: 30px;
    padding-left: 100px;
  }
`

const topServiceList = css`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 10px;
  z-index: 10;
  padding: 40px 25px;
  margin-top: 30px;
  width: calc(100% + 40px);
  margin-left: -20px;
  ${mqPc} {
    padding: 45px 45px;
    gap: 30px 20px;
    margin-left: 3%;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f1f7fa;
    z-index: -1;
    ${mqPc} {
      transform: skewX(-20deg);
    }
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 10px;
      margin-right: 5px;
      ${mqPc} {
        width: 16px;
      }
    }
    p {
      font-size: 14px;
      font-weight: bold;
      position: relative;
      font-style: italic;
      ${mqPc} {
        font-size: 18px;
      }
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        background: #2180ac;
      }
    }
  }
`

const topServiceBtn = css`
  width: 280px;
  margin: 30px auto 0;
  ${mqPc} {
    margin: 40px auto 0;
  }
`

export default TopService
