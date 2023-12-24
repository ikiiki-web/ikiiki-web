import { css } from '@emotion/react'
import React from 'react'
import { Button } from '@app/components/atoms/Button'
import SeminarList from '@app/components/blocks/SeminarSlider'
import { mqPc } from '@app/styles/variables'
import { SeminarArticle } from '@app/types/newt'

type Props = {
  seminarArticles: SeminarArticle[]
}

const CaseSeminar: React.FC<Props> = ({ seminarArticles }) => {
  return (
    <section css={caseSeminarContainer}>
      <div css={caseSeminarInner}>
        <h2 css={caseSeminarTitle}>開催予定のセミナー</h2>
        <SeminarList seminarArticles={seminarArticles} />
        <div css={caseSeminarBtn}>
          <Button href='seminar'>セミナーの一覧</Button>
        </div>
      </div>
    </section>
  )
}

const caseSeminarContainer = css`
  background: #fff2f6;
  padding: 40px 0;
  ${mqPc} {
    padding: 60px 0;
  }
`

const caseSeminarInner = css`
  padding: 0 30px;
  ${mqPc} {
    max-width: 1000px;
    margin: 0 auto;
  }
`

const caseSeminarTitle = css`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
`

const caseSeminarBtn = css`
  width: 280px;
  margin: 50px auto 0;
`

export default CaseSeminar
