import { css } from '@emotion/react'
import { mqPc, colorBase, colorSecondary, colorPrimary, hover } from '../variables'

export const detail = css`
  padding: 40px 0;
  ${mqPc} {
    padding: 20px 0;
    background: #f9f9f9;
  }
`

export const detailInner = css`
  padding: 0 22px;
  ${mqPc} {
    padding: 0 22px 150px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`

export const detailInnerS = css`
  ${detailInner};
  ${mqPc} {
    max-width: 860px;
    display: block;
  }
`

export const detailMain = css`
  ${mqPc} {
    width: calc(100% - 340px);
  }
`

export const detailBox = css`
  padding-bottom: 60px;
  ${mqPc} {
    background: #fff;
    border-radius: 20px;
    padding: 40px 60px 100px;
  }
`

export const detailHead = css`
  display: flex;
  align-items: center;
`

export const detailLabel = css`
  background: ${colorSecondary};
  color: #fff;
  font-size: 12px;
  width: 44px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  ${mqPc} {
    margin-right: 10px;
    margin-top: 0;
    font-size: 14px;
    width: 88px;
    height: 31px;
  }
`

export const detailLabelClose = css`
  ${detailLabel};
  background: #727272;
`

export const detailCategory = css`
  background: #1a1a1a;
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  margin-right: 5px;
  ${mqPc} {
    margin-right: 10px;
  }
`

export const detailCategoryMedia = css`
  ${detailCategory};
  background: ${colorPrimary};
`

export const detailDate = css`
  font-size: 14px;
  color: #727272;
`

export const detailCategoryBlue = css`
  ${detailCategory};
  background: #2180ac;
`

export const detailTitle = css`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 15px;
  ${mqPc} {
    font-size: 32px;
  }
`

export const detailThumbnail = css`
  width: 100%;
  display: block;
  margin-top: 30px;
  ${mqPc} {
    max-width: 600px;
    margin: 40px auto 0;
  }
`

export const detailContactBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  margin: 30px auto 0;
  color: #fff;
  background: ${colorPrimary};
  font-size: 14px;
  font-weight: bold;
  ${hover};
  ${mqPc} {
    max-width: 520px;
    margin: 40px auto 0;
    font-size: 16px;
  }
`

export const detailContent = css`
  & > p {
    font-size: 14px;
    line-height: 2;
    margin-top: 30px;
    ${mqPc} {
      font-size: 16px;
      margin-top: 40px;
    }
  }
  & > h2 {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    border-bottom: 2px solid ${colorPrimary};
    padding-bottom: 5px;
    margin-top: 40px;
    ${mqPc} {
      font-size: 28px;
      margin-top: 80px;
    }
  }
  & > h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    border-left: 2px solid ${colorPrimary};
    padding-left: 10px;
    margin-top: 30px;
    ${mqPc} {
      border-left: 4px solid ${colorPrimary};
      font-size: 22px;
      margin-top: 60px;
    }
  }
  & > h4 {
    background: #f7f7f7;
    padding: 8px 12px;
    line-height: 1.5;
    border-radius: 10px;
    margin-top: 30px;
    ${mqPc} {
      font-size: 18px;
      padding: 10px 16px;
      margin-top: 40px;
    }
  }
  & > ul {
    padding-left: 25px;
    margin-top: 20px;
    ${mqPc} {
      margin-top: 30px;
    }
    li {
      list-style: disc;
      line-height: 1.8;
      font-size: 14px;
      ${mqPc} {
        font-size: 16px;
      }
    }
  }
  & > ol {
    padding-left: 25px;
    margin-top: 20px;
    ${mqPc} {
      margin-top: 30px;
    }
    li {
      list-style: decimal;
      line-height: 1.8;
      font-size: 14px;
      ${mqPc} {
        font-size: 16px;
      }
    }
  }
  a {
    color: #2180ac;
    ${hover};
  }
  img {
    width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    aspect-ratio: 1.7;
  }
`

export const detailContentLink = css`
  color: #ce3c5e !important;
  text-decoration: underline;
  ${hover};
`

export const detailContentBtn = css`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colorPrimary};
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-top: 30px;
  ${hover};
  ${mqPc} {
    max-width: 520px;
    margin: 40px auto 0;
    font-size: 16px;
  }
`

export const detailContentTable = css`
  width: 100%;
  border-bottom: 1px solid #dddddd;
  margin-top: 30px;
  ${mqPc} {
    margin-top: 40px;
  }
  th,
  td {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    ${mqPc} {
      display: table-cell;
      font-size: 16px;
      text-align: left;
    }
  }
  th {
    background: #f9f9f9;
    font-weight: bold;
    border-top: 1px solid #dddddd;
    padding: 12px 0;
    ${mqPc} {
      width: 160px;
      padding: 12px 20px;
    }
  }
  td {
    padding: 16px 0px;
    ${mqPc} {
      padding: 16px 20px;
      border-top: 1px solid #dddddd;
    }
  }
`

export const detailBanners = css`
  width: 100%;
  margin-top: 40px;
  ${mqPc} {
    margin-top: 80px;
  }
  a {
    display: block;
    ${hover};
    &:not(:first-of-type) {
      margin-top: 6px;
      ${mqPc} {
        margin-top: 12px;
      }
    }
    img {
      width: 100%;
    }
  }
`

export const detailTags = css`
  margin-top: 30px;
  ${mqPc} {
    margin-top: 40px;
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
    ${mqPc} {
      font-size: 18px;
    }
    span {
      color: ${colorPrimary};
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
    li {
      background: #fff2f6;
      color: ${colorPrimary};
      display: block;
      padding: 10px 10px;
      border-radius: 8px;
      /* a {
        background: #fff2f6;
        color: ${colorPrimary};
        display: block;
        padding: 10px 10px;
        border-radius: 8px;
      } */
    }
  }
`

export const detailRelated = css`
  border-top: 1px solid #dddddd;
  width: calc(100% + 32px);
  margin-left: -16px;
  padding: 40px 0;
  ${mqPc} {
    padding: 0;
    border-top: none;
    width: 100%;
    margin: 100px 0 0;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    ${mqPc} {
      margin-bottom: 40px;
      text-align: left;
    }
  }
  & > div {
    max-width: 280px;
    margin: 40px auto 0;
  }
`

export const detailRelatedSeminar = css`
  ${detailRelated};
  ul {
    max-width: 315px;
    margin: 0 auto;
    ${mqPc} {
      max-width: none;
    }
  }
`

export const detailSide = css`
  border-top: 1px solid #dddddd;
  width: calc(100% + 32px);
  margin-left: -16px;
  padding: 30px 37.5px;
  ${mqPc} {
    width: 300px;
    margin: 0;
    border-top: none;
    padding: 0;
  }
`

export const detailSideCategory = css`
  ${mqPc} {
    background: #fff;
    padding: 30px 0;
    border-radius: 20px;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  ul {
    border-bottom: 1px solid #dddddd;
    margin-top: 15px;
    a {
      font-size: 14px;
      padding: 15px 20px;
      color: ${colorBase};
      display: block;
      border-top: 1px solid #dddddd;
      ${hover};
    }
  }
`

export const detailSideBanner = css`
  margin-top: 50px;
  ${mqPc} {
    margin-top: 20px;
  }
  a {
    display: block;
    ${hover};
    &:not(:first-of-type) {
      margin-top: 10px;
    }
    img {
      display: block;
      width: 100%;
    }
  }
`

export const detailSideSns = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 14px;
  a {
    display: block;
    width: 46px;
    ${hover};
    img {
      width: 100%;
      display: block;
    }
  }
`

export const detailFixedSns = css`
  display: none;
  ${mqPc} {
    display: block;
    position: fixed;
    left: 20px;
    top: 280px;
    a {
      display: block;
      width: 46px;
      margin-bottom: 14px;
      ${hover};
      img {
        width: 100%;
        display: block;
      }
    }
  }
`

export const detailWriter = css`
  background: #f9f9f9;
  padding: 20px 16px;
  margin-top: 30px;
  border-radius: 10px;
  ${mqPc} {
    padding: 25px 40px;
    margin-top: 40px;
  }
`

export const detailWriterTitle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  ${mqPc} {
    font-size: 18px;
    justify-content: flex-start;
  }
  img {
    width: 18px;
    margin-right: 4px;
    ${mqPc} {
      margin-right: 8px;
    }
  }
`

export const detailWriterContent = css`
  ${mqPc} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }
`

export const detailWriterIcon = css`
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  border: 2px solid ${colorPrimary};
  border-radius: 50%;
  display: block;
  margin: 12px auto 3px;
  ${mqPc} {
    width: 120px;
    margin: 0;
  }
`

export const detailWriterInfo = css`
  ${mqPc} {
    width: calc(100% - 150px);
  }
  p {
    &:nth-of-type(1) {
      font-size: 14px;
      text-align: center;
      color: #727272;
      line-height: 1.5;
      ${mqPc} {
        text-align: left;
      }
    }
    &:nth-of-type(2) {
      font-size: 16px;
      text-align: center;
      line-height: 1.5;
      margin-top: 5px;
      ${mqPc} {
        text-align: left;
      }
    }
    &:nth-of-type(3) {
      font-size: 14px;
      line-height: 1.75;
      color: #727272;
      margin-top: 12px;
    }
  }
`

export const detailSpeaker = css`
  margin: 30px 0;
  ${mqPc} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 40px 0 80px;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 0 auto;
    border: 2px solid ${colorPrimary};
    border-radius: 50%;
    display: block;
    ${mqPc} {
      width: 120px;
      height: 120px;
      margin: 0;
    }
  }
  & > div {
    text-align: center;
    margin-top: 15px;
    ${mqPc} {
      width: calc(100% - 150px);
      text-align: left;
      margin-top: 10px;
    }
    p {
      &:nth-of-type(1) {
        font-size: 14px;
        color: #727272;
      }
      &:nth-of-type(2) {
        font-size: 16px;
        margin-top: 10px;
        span {
          font-size: 14px;
          color: #727272;
          margin-right: 10px;
        }
      }
      &:nth-of-type(3) {
        font-size: 14px;
        text-align: left;
        line-height: 1.75;
        margin-top: 20px;
      }
    }
  }
`

export const detailBackLink = css`
  max-width: 280px;
  margin: 40px auto;
  ${mqPc} {
    margin: 100px auto 0;
  }
`
