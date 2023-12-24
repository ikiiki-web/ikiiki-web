import { css } from '@emotion/react'
import { colorPrimary, hover, mqPc } from '../variables'

export const contactContainer = css`
  background: #f9f9f9;
  padding: 40px 16px 80px;
`

export const contactDesc = css`
  font-size: 14px;
  line-height: 2;
  ${mqPc} {
    max-width: 740px;
    margin: 0 auto;
    font-size: 16px;
    text-align: center;
  }
`
export const contactStep = css`
  display: flex;
  justify-content: space-between;
  max-width: 166px;
  margin: 40px auto 0;
  position: relative;
  z-index: 10;
  ${mqPc} {
    max-width: 226px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 2px;
    width: 100%;
    background: #dddddd;
    z-index: -1;
  }
`

export const contactStepItem = (active: boolean) => css`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 13px;
  font-weight: bold;
  background: ${active ? colorPrimary : '#DDDDDD'};
  color: ${active ? '#fff' : '#727272'};
  ${mqPc} {
    width: 62px;
    height: 62px;
    font-size: 16px;
  }
`

export const contactContent = css`
  margin-top: 20px;
  ${mqPc} {
    max-width: 580px;
    margin: 20px auto 0;
  }
`

export const contactFormItem = css`
  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    ${mqPc} {
      font-size: 16px;
    }
    span {
      background: #ce3c5e;
      color: #fff;
      margin-left: 4px;
      padding: 2px 6px;
      font-size: 12px;
      ${mqPc} {
        margin-left: 10px;
        font-size: 13px;
        padding: 4px 10px;
      }
    }
  }
  &:not(:first-of-type) {
    margin-top: 30px;
    ${mqPc} {
      margin-top: 40px;
    }
  }
`

export const contactFormSelect = css`
  width: 100%;
  height: 60px;
  border: 1px solid #dddddd;
  margin-top: 8px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 4px;
  box-sizing: border-box;
`

export const contactFormText = css`
  width: 100%;
  height: 60px;
  border: 1px solid #dddddd;
  margin-top: 8px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  &::placeholder {
    color: #1a1a1a4d;
  }
`

export const contactFormTextArea = css`
  ${contactFormText};
  height: 200px;
`

export const contactItemError = css`
  color: #ce3c5e;
  font-size: 12px;
  margin-top: 8px;
`

export const contactFormConsent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  ${mqPc} {
    margin-top: 40px;
    justify-content: flex-start;
  }
  input {
    transform: scale(1.4);
  }
  label {
    margin-left: 5px;
    font-size: 16px;
    ${mqPc} {
      margin-left: 8px;
    }
    a {
      color: ${colorPrimary};
      text-decoration: underline;
    }
  }
`

export const contactFormBtn = css`
  background: ${colorPrimary};
  color: #fff;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  font-size: 14px;
  font-weight: bold;
  ${hover};
  ${mqPc} {
    max-width: 520px;
    margin: 40px auto 0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const contactComfirmItem = css`
  padding: 20px 0;
  border-top: 1px solid #ddd;
  &:last-of-type {
    border-bottom: 1px solid #ddd;
  }
  p {
    &:nth-of-type(1) {
      display: flex;
      align-items: center;
      font-size: 14px;
      ${mqPc} {
        font-size: 16px;
      }
      span {
        background: #ce3c5e;
        color: #fff;
        margin-left: 4px;
        padding: 2px 6px;
        ${mqPc} {
          margin-left: 10px;
          font-size: 13px;
          padding: 4px 10px;
        }
      }
    }
    &:nth-of-type(2) {
      font-size: 16px;
      font-weight: bold;
      margin-top: 15px;
      ${mqPc} {
        font-size: 18px;
      }
    }
  }
`
