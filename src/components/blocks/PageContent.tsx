import { css } from '@emotion/react'
import React, { ReactNode } from 'react'
import { mqPc } from '@app/styles/variables'

type Props = {
  children: ReactNode
}

const PageContent: React.FC<Props> = ({ children }) => {
  return (
    <div css={pageContent}>
      <div css={pageContentInner}>{children}</div>
    </div>
  )
}

const pageContent = css`
  padding: 40px 0;
  ${mqPc} {
    padding: 40px 0 160px;
  }
`

const pageContentInner = css`
  padding: 0 16px;
  ${mqPc} {
    max-width: 1040px;
    margin: 0 auto;
  }
`

export default PageContent
