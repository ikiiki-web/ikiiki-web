import { css } from '@emotion/react'
import { line } from '../animate'
import { colorPrimary, mqPc } from '../variables'

export const serviceDetailDesc = css`
  padding: 40px 0;
  position: relative;
  ${mqPc} {
    padding: 100px 0;
  }
`

export const serviceDetailDescLine01 = (color: string) => css`
  ${line(color, 0)};
  top: 200px;
  left: -100px;
  ${mqPc} {
    top: 300px;
    left: -120px;
  }
`

export const serviceDetailDescLine02 = (color: string) => css`
  ${line(color, 1)};
  top: 100px;
  right: -100px;
  ${mqPc} {
    right: -150px;
  }
`

export const serviceDetailInner = css`
  padding: 0 20px;
  ${mqPc} {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const serviceDetailDescImg = css`
  width: 280px;
  margin: 0 auto;
  position: relative;
  ${mqPc} {
    width: 480px;
    margin: 0;
  }
  & > img {
    position: unset !important;
  }
`

export const serviceDetailDescContent = (color: string) => css`
  ${mqPc} {
    width: calc(100% - 500px);
  }
  strong {
    color: ${color};
  }
  h2 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.5;
    margin-top: 20px;
    ${mqPc} {
      font-size: 28px;
      margin: 0;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.75;
    margin-top: 30px;
    ${mqPc} {
      font-size: 16px;
    }
  }
`

export const serviceDetailTrouble = css`
  background: #f7f7f7;
  padding: 40px 0;
  position: relative;
  ${mqPc} {
    padding: 80px 0 100px;
  }
`

export const serviceDetailTroubleInner = css`
  padding: 0 20px;
  ${mqPc} {
    max-width: 1020px;
    margin: 0 auto;
    position: relative;
  }
`

export const serviceDetailTroubleTitle = css`
  font-size: 22px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
  span {
    color: #ce3c5e;
  }
`

export const serviceDetailTroubleList = css`
  margin-top: 30px;
  ${mqPc} {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 40px;
    margin-top: 40px;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 2px dashed #d9d9d9;
    padding: 10px;
    line-height: 1.4;
    ${mqPc} {
      font-size: 22px;
      /* border-bottom: none; */
    }
    img {
      width: 16px;
      margin-right: 3px;
      ${mqPc} {
        width: 30px;
      }
    }
  }
`

export const serviceDetailTroubleImg = css`
  position: absolute;
  width: 42px;
  right: 23px;
  top: 23px;
  ${mqPc} {
    width: 100px;
    right: 0;
    top: 20px;
  }
`

export const serviceDetailTroubleBottom = css`
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 100%;
  height: 20px;
  ${mqPc} {
    height: 60px;
    bottom: -60px;
  }
`

export const serviceDetailSolution = css`
  padding: 60px 0 200px;
  text-align: center;
  position: relative;
  ${mqPc} {
    padding: 160px 0 200px;
  }
`

export const serviceDetailSolutionInner = css`
  ${mqPc} {
    max-width: 950px;
    margin: 0 auto;
    position: relative;
  }
`

export const serviceDetailSolutionTitle = css`
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  border-bottom: 2px solid #7ba333;
  position: relative;
  ${mqPc} {
    font-size: 36px;
    line-height: 1.75;
  }
  span {
    color: ${colorPrimary};
  }
  img {
    width: 36px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    ${mqPc} {
      width: 58px;
      top: 10px;
    }
    &:nth-of-type(1) {
      left: -40px;
      ${mqPc} {
        left: -65px;
      }
    }
    &:nth-of-type(2) {
      right: -40px;
      ${mqPc} {
        right: -65px;
      }
    }
  }
  [data-ruby] {
    &:before {
      ${mqPc} {
        top: -15px;
      }
    }
  }
`

export const serviceDetailSolutionList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 8px;
  margin-top: 40px;
  padding: 0 30px;
  ${mqPc} {
    margin-top: 60px;
    gap: 36px 40px;
    padding: 0 120px;
  }
  li {
    display: flex;
    img {
      width: 10px;
      margin-right: 3px;
      margin-top: -3px;
      ${mqPc} {
        width: 16px;
        margin-right: 5px;
      }
    }
    p {
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
      padding-bottom: 3px;
      border-bottom: 2px solid ${colorPrimary};
      line-height: 1.4;
      ${mqPc} {
        font-size: 22px;
      }
    }
  }
`

export const serviceDetailSolutionMan = css`
  position: absolute;
  width: 46px;
  bottom: 30px;
  left: -100px;
  right: 0;
  margin: auto;
  ${mqPc} {
    width: 105px;
    right: auto;
    top: 250px;
  }
`

export const serviceDetailSolutionWood = css`
  position: absolute;
  width: 100px;
  bottom: 50px;
  left: 0;
  right: -100px;
  margin: auto;
  ${mqPc} {
    width: 210px;
    left: auto;
    right: -200px;
    top: 300px;
  }
`

export const serviceDetailSolutionLine01 = css`
  ${line('#2180AC', 0)};
  top: 70px;
  left: -80px;
`

export const serviceDetailSolutionLine02 = css`
  ${line('#7BA333', 0.5)};
  bottom: 50px;
  left: -80px;
`

export const serviceDetailSolutionLine03 = css`
  ${line('#E68635', 1)};
  top: 80px;
  right: -100px;
`

export const serviceDetailSolutionLine04 = css`
  ${line('#CE3C5E', 1.5)};
  bottom: 120px;
  right: -100px;
`

export const serviceDetailExample = css`
  text-align: center;
  padding: 40px 0;
  background: #fff2e866;
  ${mqPc} {
    padding: 100px 0;
  }
`

export const serviceDetailExampleInner = css`
  padding: 0 20px;
  ${mqPc} {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export const serviceDetailExampleTitle = css`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  border-bottom: 2px solid #7ba333;
  display: inline-block;
  position: relative;
  ${mqPc} {
    font-size: 36px;
    line-height: 1.75;
  }
  span {
    color: ${colorPrimary};
  }
`

export const serviceDetailExampleDesc = css`
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  margin-top: 24px;
  ${mqPc} {
    font-size: 16px;
    max-width: 1020px;
    margin: 50px auto 0;
  }
`

export const serviceDetailExampleList = css`
  margin-top: 20px;
  ${mqPc} {
    margin-top: 60px;
  }
`

export const serviceDetailExampleItem = css`
  position: relative;
  ${mqPc} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

  &:not(:first-of-type) {
    margin-top: 40px;
    ${mqPc} {
      margin-top: 80px;
    }
  }
`

export const serviceDetailExampleItemContent = css`
  text-align: left;
  ${mqPc} {
    width: 500px;
  }
  span {
    display: block;
    color: #e68635;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 1px;
    ${mqPc} {
      font-size: 28px;
    }
  }
  h3 {
    background: #e68635;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 10px;
    margin-top: 5px;
    ${mqPc} {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 28px;
    }
    small {
      font-size: 14px;
      ${mqPc} {
        font-size: 16px;
      }
    }
  }
  p {
    font-size: 14px;
    text-align: left;
    line-height: 1.75;
    margin-top: 185px;
    ${mqPc} {
      margin-top: 30px;
      font-size: 16px;
    }
  }
`

export const serviceDetailExampleItemImg = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  margin: auto;
  width: 280px;
  border: 2px solid #e68635;
  ${mqPc} {
    position: relative;
    width: calc(100% - 580px);
    top: 0;
    margin: 0;
    margin-top: 80px;
  }
  img {
    width: 100%;
    display: block;
    position: unset !important;
  }
`
