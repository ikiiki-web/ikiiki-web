import { css } from '@emotion/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import IconArw from './icons/IconArw'
import { colorBase, colorPrimary } from '@app/styles/variables'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
}

export const Button = ({ href, onClick, children }: ButtonProps) => {
  return href ? (
    <Link href={href} css={button}>
      {children}
      <IconArw />
    </Link>
  ) : (
    <button onClick={onClick} css={button}>
      {children}
      <IconArw />
    </button>
  )
}

const button = css`
  position: relative;
  width: 100%;
  height: 60px;
  border: 3px solid ${colorPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  color: ${colorBase};
  transition: 0.3s;
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: ${colorPrimary};
    z-index: -1;
    transition: 0.3s;
  }
  svg {
    transition: 0.3s;
    width: 8px;
    stroke: ${colorBase};
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
    svg {
      stroke: #fff;
      transform: translate(5px);
    }
  }
`

type ButtonMoreProps = {
  href?: string
  onClick?: () => void
}

export const ButtonMore = ({ href, onClick }: ButtonMoreProps) => {
  return href ? (
    <Link href={href} css={buttonMore}>
      VIEW MORE
      <IconArw color={colorPrimary} />
    </Link>
  ) : (
    <button onClick={onClick} css={buttonMore}>
      VIEW MORE
      <IconArw color={colorPrimary} />
    </button>
  )
}

const buttonMore = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  width: 135px;
  height: 36px;
  border-bottom: 2px solid #ce3c5e;
  color: #ce3c5e;
  letter-spacing: 1px;
  font-size: 16px;
  svg {
    width: 8px;
    transition: 0.3s;
  }
  &:hover {
    svg {
      transform: translate(5px);
    }
  }
`
