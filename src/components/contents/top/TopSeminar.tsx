import { css } from '@emotion/react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Button } from '@app/components/atoms/Button'
import SeminarSlider from '@app/components/blocks/SeminarSlider'
import { fadeIn } from '@app/styles/animate'
import { colorSecondary, mqPc } from '@app/styles/variables'
import { SeminarArticle } from '@app/types/newt'
import { basicAnimation } from '@app/utils/animation'

type Props = {
  seminarArticles: SeminarArticle[]
}

const TopSeminar: React.FC<Props> = ({ seminarArticles }) => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())

  return (
    <section css={topSeminarContainer}>
      <div css={[topSeminarTitle, fadeIn(inView01)]} ref={ref01}>
        <p>
          <span>S</span>
          EMINAR
        </p>
        <h2>セミナー情報</h2>
      </div>
      <div css={fadeIn(inView02)} ref={ref02}>
        <SeminarSlider top seminarArticles={seminarArticles} />
      </div>
      <div css={topSeminarBtnContainer}>
        <Button href='/seminar'>セミナーの一覧</Button>
      </div>
    </section>
  )
}

const topSeminarContainer = css`
  padding: 60px 30px;
  ${mqPc} {
    padding: 60px 0;
    max-width: 1000px;
    margin: 0 auto;
  }
`

const topSeminarTitle = css`
  display: flex;
  align-items: center;
  p {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 3px;
    font-size: 40px;
    ${mqPc} {
      font-size: 100px;
    }
    span {
      color: ${colorSecondary};
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

const topSeminarBtnContainer = css`
  max-width: 280px;
  margin: 50px auto 0;
  ${mqPc} {
    margin: 60px auto 0;
  }
`

export default TopSeminar
