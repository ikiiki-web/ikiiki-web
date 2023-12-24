import { ReactNode } from 'react'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

type Props = {
  children: ReactNode
}

export function PageLayout({ children, ...props }: Props) {
  return (
    <div {...props}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
