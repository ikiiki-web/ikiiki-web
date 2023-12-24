import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { mqPc, colorPrimary, hover } from '@app/styles/variables'
import { Category } from '@app/types/newt'

type Props = {
  categories: Category[]
  categorySlug?: string
  type: 'case' | 'column'
}

const CategoryNav: React.FC<Props> = ({ categories, type, categorySlug = 'all' }) => {
  return (
    <ul css={categoryNav}>
      <li>
        <Link href={`/${type}`} css={categoryNavItem(categorySlug === 'all')}>
          すべて
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <Link
            href={`/${type}/category/${category.slug}`}
            css={categoryNavItem(categorySlug === category.slug)}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const categoryNav = css`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 30px;
  ${mqPc} {
    gap: 10px;
    margin-bottom: 80px;
  }
`

export const categoryNavItem = (active: boolean) => css`
  color: ${active ? '#fff' : colorPrimary};
  border: 2px solid ${colorPrimary};
  border-radius: 60px;
  background: ${active ? colorPrimary : '#fff'};
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  ${hover};
  ${mqPc} {
    font-size: 18px;
    padding: 8px 16px 9px;
  }
`

export default CategoryNav
