import { ReactNode } from 'react'
import MediaFooter from '../contents/media/MediaFooter'
import MediaHeader from '../contents/media/MediaHeader'
import { client } from '@app/libs/client'
import { Category } from '@app/types/newt'

type Props = {
  children: ReactNode
  categories: Category[]
}

export function MediaLayout({ children, categories, ...props }: Props) {
  return (
    <div {...props}>
      <MediaHeader categories={categories} />
      <main>{children}</main>
      <MediaFooter categories={categories} />
    </div>
  )
}
