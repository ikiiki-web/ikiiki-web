import { css } from '@emotion/react'
import { mqPc } from '../variables'

export const pageContainer = css`
  ${mqPc} {
    padding: 60px 16px 160px;
    background: #f9f9f9;
  }
`

export const pageBox = css`
  background: #fff;
  padding: 20px 16px 60px;
  ${mqPc} {
    max-width: 840px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 1px 60px 80px;
  }
`

export const pageLoading = css`
  padding: 100px 0;
  & > div {
    margin: 0 auto;
  }
`
