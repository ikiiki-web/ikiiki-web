import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import IconArw from './icons/IconArw'
import { mqPc } from '@app/styles/variables'

type Props = {
  breadcrumb: {
    name: string
    link?: string
  }[]
}

const Breadcrumb: React.FC<Props> = ({ breadcrumb }) => {
  return (
    <ul css={breadcrumbContainer}>
      <li>
        <Link href='/'>ホーム</Link>
      </li>
      {breadcrumb?.map((item) => (
        <>
          <li>
            <IconArw />
          </li>
          <li>{item.link ? <Link href={item.link}>{item.name}</Link> : <p>{item.name}</p>}</li>
        </>
      ))}
    </ul>
  )
}

const breadcrumbContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
  a,
  p {
    white-space: nowrap;
  }
  a {
    font-size: 13px;
    display: block;
    color: #ce3c5e;
    text-decoration: underline;
  }
  p {
    font-size: 13px;
    color: #727272;
    display: block;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${mqPc} {
      font-size: 13px;
      max-width: none;
    }
  }
  svg {
    width: 4px;
    stroke: #727272;
    margin-bottom: 2px;
  }
`

export default Breadcrumb
