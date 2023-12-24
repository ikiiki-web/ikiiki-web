import { css } from '@emotion/react'
import React from 'react'
import Breadcrumb from '../atoms/Breadcrumb'
import { mqPc } from '@app/styles/variables'

type Props = {
  title: string
  breadcrumb: {
    name: string
    link?: string
  }[]
  detail?: boolean
}

const PageHead: React.FC<Props> = ({ title, breadcrumb, detail }) => {
  return (
    <section css={detail ? pageHeadDetailContainer : pageHeadContainer}>
      <div css={pageHeadInner}>
        <Breadcrumb breadcrumb={breadcrumb} />
        {detail ? <h2 css={pageHeadTitle}>{title}</h2> : <h1 css={pageHeadTitle}>{title}</h1>}
      </div>
    </section>
  )
}

const pageHeadContainer = css`
  background: #fff2f6;
  padding: 10px 0 50px;
  ${mqPc} {
    padding: 16px 0 74px;
  }
`

const pageHeadDetailContainer = css`
  ${pageHeadContainer};
  padding: 10px 0 30px;
  ${mqPc} {
    padding: 16px 0 45px;
  }
  h1,
  h2 {
    text-align: left;
    margin-top: 20px;
  }
`

const pageHeadInner = css`
  padding: 0 20px;
  ${mqPc} {
    max-width: 1200px;
    margin: 0 auto;
  }
`

const pageHeadTitle = css`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-top: 30px;
  ${mqPc} {
    font-size: 36px;
    line-height: 1.5;
    margin-top: 40px;
  }
`

export default PageHead
