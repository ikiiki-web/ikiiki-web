import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import IconArw from './icons/IconArw'
import { colorPrimary, mqPc } from '@app/styles/variables'
import { contentsDisplay } from '@app/utils/constants'

type Props = {
  url: string
  total: number
  currentPage?: number
}

export const Pagination: React.FC<Props> = ({ url, total, currentPage = 1 }) => {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const router = useRouter()
  const totalPage = Math.ceil(total / contentsDisplay)

  return (
    <div css={pagination}>
      <button
        css={paginationArwFirst}
        onClick={() => router.push(`${url}/1`)}
        disabled={currentPage === 1}
      >
        <IconArw />
        <IconArw />
      </button>

      <button
        css={paginationArwPrev}
        onClick={() => router.push(`${url}/${currentPage - 1}`)}
        disabled={currentPage === 1}
      >
        <IconArw />
      </button>

      {currentPage >= 3 && <p>･･･</p>}

      {currentPage === 1 || currentPage === 2
        ? range(1, totalPage <= 3 ? totalPage : 3).map((pageNum, i) => (
            <Link key={i} href={`${url}/${pageNum}`} css={paginationItem(currentPage === pageNum)}>
              {pageNum}
            </Link>
          ))
        : currentPage === totalPage || currentPage === totalPage - 1
        ? range(totalPage - 2, totalPage).map((pageNum, i) => (
            <Link key={i} href={`${url}/${pageNum}`} css={paginationItem(currentPage === pageNum)}>
              {pageNum}
            </Link>
          ))
        : range(currentPage - 1, currentPage + 1).map((pageNum, i) => (
            <Link key={i} href={`${url}/${pageNum}`} css={paginationItem(currentPage === pageNum)}>
              {pageNum}
            </Link>
          ))}

      {currentPage <= totalPage - 3 && <p>･･･</p>}

      <button
        css={paginationArwNext}
        onClick={() => router.push(`${url}/${currentPage + 1}`)}
        disabled={!(total / contentsDisplay > currentPage)}
      >
        <IconArw />
      </button>

      <button
        css={paginationArwLast}
        onClick={() => router.push(`${url}/${Math.ceil(total / contentsDisplay)}`)}
        disabled={!(total / contentsDisplay > currentPage)}
      >
        <IconArw />
        <IconArw />
      </button>
    </div>
  )
}

const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: calc(100% + 32px);
  margin-left: -16px;
  ${mqPc} {
    margin-top: 80px;
  }
`

const paginationItem = (active: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  width: 42px;
  height: 42px;
  border: 1px solid ${active ? colorPrimary : '#DDDDDD'};
  background: ${active ? colorPrimary : '#fff'};
  color: ${active ? '#fff' : colorPrimary};
  border-radius: 4px;
  transition: 0.5s;
  ${mqPc} {
    margin: 0 4px;
    width: 48px;
    height: 48px;
  }
  &:hover {
    background: ${colorPrimary};
    color: #fff;
  }
`

const paginationArw = css`
  width: 42px;
  height: 42px;
  background: #fff;
  margin: 0 2px;
  border-radius: 4px;
  position: relative;
  border: 1px solid #dddddd;
  background: #fff;
  ${mqPc} {
    margin: 0 4px;
    width: 48px;
    height: 48px;
  }
  svg {
    width: 6px;
    stroke: #727272;
    position: absolute;
    inset: 0;
    margin: auto;
  }
  &:disabled {
    background: #dddddd;
  }
`

const paginationArwPrev = css`
  ${paginationArw};
  ${mqPc} {
    margin-right: 40px;
  }
  svg {
    transform: scale(-1, 1);
  }
`

const paginationArwFirst = css`
  ${paginationArw};
  svg {
    transform: scale(-1, 1);
  }
  svg {
    &:nth-of-type(1) {
      left: -5px;
    }
    &:nth-of-type(2) {
      right: -5px;
    }
  }
`

const paginationArwNext = css`
  ${paginationArw};
  ${mqPc} {
    margin-left: 40px;
  }
`

const paginationArwLast = css`
  ${paginationArw};
  svg {
    &:nth-of-type(1) {
      left: -5px;
    }
    &:nth-of-type(2) {
      right: -5px;
    }
  }
`
