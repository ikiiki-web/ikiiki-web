import { css } from '@emotion/react'

// color
export const colorPrimary = '#CE3C5E'
export const colorSecondary = '#7BA333'
export const colorBase = '#1A1A1A'

// media queries
export const mqPc = '@media (min-width: 835px)'
export const mqSp = '@media (max-width: 834px)'
export const mqPcS = '@media (min-width: 835px) and (max-width: 1024px)'
export const mqSpL = '@media (min-width: 500px) and (max-width: 834px)'
export const mqSpS = '@media (max-width: 320px)'

export const mqHL = '@media (min-height: 835px)'

export const onlyPc = css`
  display: none;
  ${mqPc} {
    display: block;
  }
`

export const onlySp = css`
  display: block;
  ${mqPc} {
    display: none;
  }
`

export const hover = css`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
