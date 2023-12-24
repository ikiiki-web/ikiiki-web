import { css } from '@emotion/react'
import { colorBase, colorSecondary, hover, mqPc } from '../variables'

export const seminarListTitle = css`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  ${mqPc} {
    font-size: 28px;
    margin: 40px 0;
  }
`

export const seminarItem = css`
  position: relative;
  border: 1px solid #dddddd;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  display: block;
  ${hover};
  ${mqPc} {
    border: 2px solid #dddddd;
    border-radius: 20px;
  }
`

export const seminarItemInner = css`
  padding: 30px 20px;
  ${mqPc} {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const seminarItemImg = css`
  width: 100%;
  aspect-ratio: 1.5;
  object-fit: cover;
  ${mqPc} {
    width: 280px;
  }
`

export const seminarItemBox = css`
  ${mqPc} {
    width: calc(100% - 320px);
  }
`

export const seminarItemLabel = css`
  background: ${colorSecondary};
  color: #fff;
  font-size: 12px;
  margin-top: 10px;
  width: 44px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mqPc} {
    margin-top: 0;
    font-size: 14px;
    width: 88px;
    height: 31px;
  }
`

export const seminarItemLabelClose = css`
  ${seminarItemLabel};
  background: #727272;
`

export const seminarItemTitle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 10px;
  color: ${colorBase};
  ${mqPc} {
    margin-top: 12px;
  }
`

export const seminarItemInfo = css`
  margin-top: 5px;
  ${mqPc} {
    margin-top: 10px;
  }
  li {
    font-size: 14px;
    line-height: 2;
    color: ${colorBase};
    ${mqPc} {
      font-size: 16px;
    }
    span {
      color: #727272;
      margin-right: 8px;
      ${mqPc} {
        margin-right: 20px;
      }
    }
  }
`
