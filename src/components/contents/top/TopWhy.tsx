import { css } from '@emotion/react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Button } from '@app/components/atoms/Button'
import { fadeIn } from '@app/styles/animate'
import { colorBase, mqPc, onlyPc } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

const TopWhy = () => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())
  const [ref03, inView03] = useInView(basicAnimation())
  const [ref04, inView04] = useInView(basicAnimation())
  const [ref05, inView05] = useInView(basicAnimation())

  return (
    <section css={topWhyContainer}>
      <div css={[topWhyTitle, fadeIn(inView01)]} ref={ref01}>
        <p>
          <span>W</span>
          HY?
        </p>
        <h2>
          なぜ<ruby data-ruby='イキイキ'>IK!IK!</ruby> は成果につながるのか？
        </h2>
      </div>
      <ul css={topWhyList}>
        <li css={[topWhyItem]} ref={ref02}>
          <div css={[topWhyItemBox, fadeIn(inView02)]}>
            <h3 css={topWhyItemTitle}>
              <img src='/img/common/icon_leaf_red_green.svg' alt='' />
              一般的な研修と
              <strong>
                <ruby data-ruby='イキイキ'>IK!IK!</ruby>
              </strong>
              の違い
            </h3>
            <p css={topWhyItemDesc}>
              一般的な研修で行われる「知識のインプット」は「動画学習」に代替されています。今、リアルタイムで研修を実施することの価値は
              <strong>「一人ひとりの気づき→行動への動機づけ」</strong>
              にあります。受講者に寄り添い、
              <strong>本音を引き出しながら、気づきを引き出す</strong>
              スタイル。それがIK!IK!の特徴です。
            </p>
          </div>
          <div css={[topWhyItemImg, fadeIn(inView02, 0.5)]}>
            <picture>
              <source srcSet='/img/top/why_img01_pc.png' media='(min-width: 835px)' />
              <img src='/img/top/why_img01_sp.png' alt='' />
            </picture>
          </div>
        </li>
        <li css={[topWhyItem]} ref={ref03}>
          <div css={[topWhyItemBox, fadeIn(inView03)]}>
            <h3 css={topWhyItemTitle}>
              <img src='/img/common/icon_leaf_blue_green.svg' alt='' />
              <strong>行動継続→行動定着</strong>
              まで
              <br />
              伴走してサポート
            </h3>
            <p css={topWhyItemDesc}>
              今までやってこなかった行動を、「気づき」を通じて「始める」ことはできても、
              <strong>「続ける」</strong>
              ことは容易ではありません。一方で、「続ける」からこそ「成果」につながります。IK!IK!は
              <strong>「続けるしくみ」</strong>で<strong>「続ける→成果」</strong>
              をサポートします。
            </p>
          </div>
          <div css={[topWhyItemImg, fadeIn(inView03, 0.5)]}>
            <Image src='/img/top/why_img02.png' alt='' fill sizes='100%' />
          </div>
        </li>
        <li css={[topWhyItem, fadeIn(inView04)]} ref={ref04}>
          <div css={topWhyItemBox}>
            <h3 css={topWhyItemTitle}>
              <img src='/img/common/icon_leaf_yellow_green.svg' alt='' />
              <strong>「成長支援」</strong>
              につなげる1on1
            </h3>
            <p css={topWhyItemDesc}>
              1on1の真の目的は
              <strong>「自律型人財」</strong>
              の育成にあります。そのためには実践する人が「やらされ感」を抱かず、一つ一つに納得しながら持続敵に成長へとつなげる必要があります。IK!IK!では、
              <strong>「気づき→自律自走→成果」</strong>
              につなげるために必要なノウハウをお伝えします。
            </p>
          </div>
          <div css={topWhyItemImg}>
            <Image src='/img/top/why_img03.png' alt='' fill sizes='100%' />
          </div>
        </li>
        <li css={[topWhyItem]} ref={ref05}>
          <div css={[topWhyItemBox, fadeIn(inView05)]}>
            <h3 css={topWhyItemTitle}>
              <img src='/img/common/icon_leaf_red_green.svg' alt='' />「
              <ruby data-ruby='イキイキ'>IK!IK!</ruby>
              サポーター」が、
              <br />
              <strong> 目標達成</strong>
              までフォローアップ
            </h3>
            <p css={topWhyItemDesc}>
              IK!IK!の提供価値は、
              <strong>「人・組織が変わること」</strong>
              にあります。
              <br css={onlyPc} />
              変わるためには、気づくこと、続けることが欠かせません。ホスピタリティを持ったIK!IK!サポーターが、
              <strong>行動変容</strong>
              を優しくサポートします。
            </p>
          </div>
          <div css={[topWhyItemImg, fadeIn(inView05, 0.5)]}>
            <Image src='/img/top/why_img04.png' alt='' fill sizes='100%' />
          </div>
        </li>
      </ul>
      <div css={topWhyBtnContainer}>
        <Button href='/service'>サービスの詳細</Button>
        <Button href='/partner'>パートナー紹介の一覧</Button>
      </div>
    </section>
  )
}

const topWhyContainer = css`
  padding: 40px 20px 60px;
  ${mqPc} {
    padding: 100px 25px;
    max-width: 1200px;
    margin: 0 auto;
  }
`

const topWhyTitle = css`
  text-align: center;
  ${mqPc} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 60px;
    ${mqPc} {
      font-size: 100px;
    }
    span {
      color: #7ba333;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    position: relative;
    display: inline-block;
    rt {
      font-weight: normal;
    }
    ${mqPc} {
      font-size: 28px;
      margin-left: 60px;
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 14px;
      bottom: 0;
      left: -20px;
      margin: auto;
      width: 16px;
      height: 1px;
      background: ${colorBase};
      ${mqPc} {
        width: 24px;
        left: -40px;
      }
    }
    &:after {
      right: -20px;
      left: auto;
      ${mqPc} {
        right: -40px;
      }
    }
  }
  [data-ruby] {
    &:before {
      top: -6px;
      ${mqPc} {
        top: -8px;
      }
    }
  }
`

const topWhyList = css`
  margin-top: 30px;
  ${mqPc} {
    margin-top: 60px;
  }
`

const topWhyItem = css`
  position: relative;
  padding-top: 53vw;
  ${mqPc} {
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
      margin-left: -25px;
    }
    &:nth-of-type(odd) {
      margin-right: -25px;
    }
  }
  &:not(:first-of-type) {
    margin-top: 50px;
  }
  &:nth-of-type(1) {
    padding-top: 60vw;
    ${mqPc} {
      padding-top: 0;
    }
    h3,
    p {
      strong {
        color: #ce3c5e;
      }
    }
  }
  &:nth-of-type(2) {
    h3,
    p {
      strong {
        color: #2180ac;
      }
    }
  }
  &:nth-of-type(3) {
    h3,
    p {
      strong {
        color: #e68635;
      }
    }
  }
  &:nth-of-type(4) {
    h3,
    p {
      strong {
        color: #ce3c5e;
      }
    }
  }
  rt {
    font-weight: normal;
  }
`

const topWhyItemImg = css`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${mqPc} {
    position: relative;
    width: 50%;
  }
  img {
    position: unset !important;
  }
  picture {
    img {
      position: relative !important;
      width: 100%;
      ${mqPc} {
        width: calc(100% + 50px);
        margin-left: -25px;
      }
    }
  }
`

const topWhyItemBox = css`
  ${mqPc} {
    width: calc(50% - 80px);
  }
`

const topWhyItemTitle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  position: relative;
  padding-left: 45px;
  ${mqPc} {
    align-items: flex-start;
    font-size: 28px;
    margin-left: -30px;
    padding-left: 72px;
  }
  img {
    width: 36px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    ${mqPc} {
      width: 58px;
    }
  }
`

const topWhyItemDesc = css`
  font-size: 14px;
  line-height: 1.8;
  margin-top: 20px;
  ${mqPc} {
    font-size: 16px;
    margin-top: 30px;
  }
`

const topWhyBtnContainer = css`
  width: 280px;
  margin: 50px auto 0;
  ${mqPc} {
    display: flex;
    justify-content: center;
    width: auto;
    margin: 60px auto 0;
  }
  a {
    ${mqPc} {
      width: 280px;
      margin: 0 8px;
    }
    &:not(:first-of-type) {
      margin-top: 20px;
      ${mqPc} {
        margin-top: 0;
      }
    }
  }
`

export default TopWhy
