import { css } from '@emotion/react'
import { mqPc } from '../variables'

export const columnNavContainer = css`
  background: #fff2f6;
  padding: 40px 0;
  ${mqPc} {
    padding: 60px 0;
  }
`

export const columnNavTitle = css`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
`

export const columnNavList = css`
  margin: 30px auto 0;
  max-width: 280px;
  ${mqPc} {
    display: flex;
    justify-content: center;
    margin: 40px auto 0;
    max-width: 100%;
    gap: 30px;
  }
  li {
    ${mqPc} {
      width: 280px;
    }
    &:not(:first-of-type) {
      margin-top: 20px;
      ${mqPc} {
        margin-top: 0;
      }
    }
  }
`
