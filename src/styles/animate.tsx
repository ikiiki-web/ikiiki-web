import { css } from '@emotion/react'
import { mqPc } from './variables'

export const line = (color: string, delay: number) => css`
  position: absolute;
  width: 200px;
  height: 20px;
  transform: rotate(140deg);
  z-index: -1;
  overflow: hidden;
  ${mqPc} {
    width: 400px;
    height: 30px;
  }
  @keyframes move {
    0% {
      left: 0;
    }
    33% {
      left: -100%;
      opacity: 1;
    }
    33.1% {
      opacity: 0;
    }
    65.9% {
      opacity: 0;
      left: 100%;
    }
    66% {
      opacity: 1;
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    background: ${color};
  }
  &:before {
    height: 4px;
    bottom: 0px;
    left: 0;
    animation: move 3s infinite;
    animation-delay: ${delay}s;
    ${mqPc} {
      height: 8px;
    }
  }
  &:after {
    height: 2px;
    bottom: 10px;
    left: 0;
    animation: move 3s infinite;
    animation-delay: ${delay + 0.2}s;
    ${mqPc} {
      bottom: 20px;
    }
  }
`

export const fadeIn = (inView: boolean, delay?: number) => css`
  transform: ${inView ? 'translateY(0)' : 'translateY(30px)'};
  opacity: ${inView ? 1 : 0};
  transition: 0.8s;
  transition-delay: ${delay ? delay : 0}s;
`
