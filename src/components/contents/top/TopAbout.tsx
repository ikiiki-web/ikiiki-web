import { css } from '@emotion/react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Button } from '@app/components/atoms/Button'
import { fadeIn } from '@app/styles/animate'
import { colorPrimary, mqPc, onlySp } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

const TopAbout = () => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())
  const [ref03, inView03] = useInView(basicAnimation())

  return (
    <section css={topAboutContainer}>
      <h2 css={[topAboutTitle, fadeIn(inView01)]} ref={ref01}>
        <span>A</span>BOUT
      </h2>
      <p css={[topAboutHead, fadeIn(inView02)]} ref={ref02}>
        人が”活きる”
        <br css={onlySp} />
        社会づくりに貢献する
        <br />
        人財開発・組織開発支援の
        <br />
        コンサルティングファームです。
      </p>
      <div css={[topAboutImg, fadeIn(inView01, 0.5)]} ref={ref01}>
        <Image src='/img/top/about_img.png' alt='' fill sizes='100%' />
      </div>
      <p css={[topAboutDesc, fadeIn(inView03)]} ref={ref03}>
        「受講者が能動的になった」
        <br css={onlySp} />
        「組織の雰囲気が良くなった」
        <br />
        プログラムを通じて「人と組織が変わった」
        <br css={onlySp} />
        と言ってもらうこと。
        <br />
        それが私たちの提供価値です。
      </p>
      <div css={[topAboutBtn]}>
        <Button href='mission'>ミッション</Button>
      </div>
    </section>
  )
}

const topAboutContainer = css`
  position: relative;
  z-index: 10;
  padding: 0 20px 50px;
  ${mqPc} {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 70px 50px;
    margin-top: 180px;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff2f6;
    z-index: -1;
    transform: skewY(-6deg);
  }
`

const topAboutTitle = css`
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 5px;
  font-size: 60px;
  transform: translateY(-25px);
  ${mqPc} {
    font-size: 110px;
    text-align: left;
    margin-left: -20px;
  }
  span {
    color: ${colorPrimary};
  }
`

const topAboutHead = css`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 20px;
  ${mqPc} {
    font-size: 28px;
  }
`

const topAboutImg = css`
  width: 240px;
  display: block;
  margin: 20px auto 0;
  ${mqPc} {
    position: absolute;
    right: -30px;
    top: 0;
    margin: 0;
    width: 500px;
  }
  img {
    position: unset !important;
  }
`

const topAboutDesc = css`
  font-size: 14px;
  line-height: 1.8;
  margin-top: 20px;
  text-align: center;
  ${mqPc} {
    font-size: 16px;
    margin-top: 30px;
    max-width: 500px;
    text-align: left;
  }
`

const topAboutBtn = css`
  width: 280px;
  margin: 30px auto 0;
  ${mqPc} {
    margin-top: 40px;
    margin-left: 0;
  }
`

export default TopAbout
