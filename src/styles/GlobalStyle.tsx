import { css } from '@emotion/react'
import { reset } from './resetStyle'
import { colorBase, mqPc } from './variables'

export const globals = css`
  ${reset}
  html {
    height: -webkit-fill-available;
  }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    color: ${colorBase};
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  a {
    text-decoration: none;
  }
  strong {
    font-weight: bold;
  }
  #__next {
    overflow: hidden;
  }
  @supports (-webkit-touch-callout: none) {
    body {
      /* The hack for Safari */
      height: -webkit-fill-available;
    }
  }
  /* ruby {
    -webkit-ruby-position: over;
    rt {
      font-weight: normal;
    }
  } */
  [data-ruby] {
    position: relative;
    &:before {
      content: attr(data-ruby);
      position: absolute;
      top: -8px;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 0.5em;
      font-weight: normal;
      letter-spacing: 0.2em;
      text-align: center;
      white-space: nowrap;
      ${mqPc} {
        top: -10px;
      }
    }
  }
`
