import { css } from '@emotion/react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { ButtonMore } from '@app/components/atoms/Button'
import { fadeIn } from '@app/styles/animate'
import { mqPc, onlySp } from '@app/styles/variables'
import { basicAnimation } from '@app/utils/animation'

const TopComment = () => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())

  return (
    <section css={topCommentContainer}>
      <div css={[topCommentTitle, fadeIn(inView01)]} ref={ref01}>
        <p>
          <span>C</span>
          OMMENT
        </p>
        <h2>教授からのコメント</h2>
      </div>
      <div css={[topCommentContent, fadeIn(inView02)]} ref={ref02}>
        <div css={[topCommentThumbnail, fadeIn(inView02, 0.5)]}>
          <Image src='/img/top/comment_thumbnail.png' alt='' fill sizes='100%' />
        </div>
        <div css={topCommentBox}>
          <p css={topCommentInfo}>東北大学</p>
          <p css={topCommentName}>
            川島隆太 教授
            <img src='/img/common/icon_leaf_blue_red.svg' alt='' />
          </p>
          <p css={topCommentDesc}>
            自分が決めたことを
            <br css={onlySp} />
            人々のサポートを借りてでも続ける。
            <br />
            続けた結果「自分は変われる」という
            <br css={onlySp} />
            成功体験ができる。
            <br />
            今の時代に生きる人にとって、
            <br css={onlySp} />
            そこに大きな価値があります。
          </p>
          <div css={topCommentBtnContainer}>
            <ButtonMore href='/service#comment' />
          </div>
        </div>
      </div>
    </section>
  )
}

const topCommentContainer = css`
  padding: 40px 20px;
  ${mqPc} {
    padding: 100px 20px 140px;
    max-width: 1100px;
    margin: 0 auto;
  }
`

const topCommentTitle = css`
  display: flex;
  align-items: center;
  p {
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    letter-spacing: 3px;
    ${mqPc} {
      font-size: 80px;
      letter-spacing: 5px;
    }
    span {
      color: #2180ac;
    }
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
    ${mqPc} {
      font-size: 18px;
      margin-left: 20px;
    }
  }
`

const topCommentContent = css`
  position: relative;
  z-index: 10;
  margin: 80px auto 0;
  padding: 30px 20px 50px;
  max-width: 350px;
  ${mqPc} {
    max-width: none;
    display: flex;
    justify-content: space-between;
    padding: 50px 90px 0;
    margin: 20px auto 0;
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
    transform: skewY(-6deg);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  }
`

const topCommentThumbnail = css`
  width: 110px;
  position: absolute;
  left: 0;
  top: -40px;
  ${mqPc} {
    width: 240px;
    position: relative;
    top: 0;
  }
  img {
    position: unset !important;
  }
`

const topCommentBox = css`
  ${mqPc} {
    width: calc(100% - 320px);
    margin-top: 50px;
  }
`

const topCommentInfo = css`
  padding-left: 110px;
  font-size: 14px;
  ${mqPc} {
    padding-left: 0;
    font-size: 16px;
  }
`

const topCommentName = css`
  padding-left: 110px;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-top: 8px;
  ${mqPc} {
    padding-left: 0;
    font-size: 28px;
  }
  img {
    width: 36px;
    margin-left: 10px;
    ${mqPc} {
      width: 58px;
    }
  }
`

const topCommentDesc = css`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.8;
  margin-top: 70px;
  ${mqPc} {
    font-size: 18px;
    margin-top: 25px;
  }
`

const topCommentBtnContainer = css`
  a {
    margin-left: auto;
    margin-top: 20px;
    ${mqPc} {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`

export default TopComment
