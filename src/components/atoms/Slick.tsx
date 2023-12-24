import { css } from '@emotion/react'
import { hover, mqPc } from '@app/styles/variables'

export const PrevArrow = (props: any) => {
  const { className, onClick } = props
  return (
    <button className={className} css={arrowStyle} onClick={onClick} aria-label='前へ'>
      <img src='/img/common/slide_prev.svg' alt='' />
    </button>
  )
}

export const NextArrow = (props: any) => {
  const { className, onClick } = props
  return (
    <button className={className} css={arrowStyle} onClick={onClick} aria-label='次へ'>
      <img src='/img/common/slide_next.svg' alt='' />
    </button>
  )
}

const arrowStyle = css`
  width: 45px;
  height: 45px;
  z-index: 99;
  ${hover};
  ${mqPc} {
    width: 60px;
    height: 60px;
  }
  &:before {
    content: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
