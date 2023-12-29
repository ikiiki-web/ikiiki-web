import React, { useEffect, useState } from 'react'
import Loading from 'react-loading'
import { Button } from '@app/components/atoms/Button'
import HeadMeta from '@app/components/atoms/HeadMeta'
import { Pagination } from '@app/components/atoms/Pagination'
import CategoryNav from '@app/components/blocks/CategoryNav'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import ColumnList from '@app/components/contents/column/ColumnList'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { columnNavContainer, columnNavTitle, columnNavList } from '@app/styles/component/column'
import { pageLoading } from '@app/styles/component/page'
import { WP_REST_API_Post } from '@app/types/wp'
import { columnCategories } from '@app/utils/constants'

const ColumnPage: React.FC = () => {
  const [columnArticles, setColumnArticles] = useState<WP_REST_API_Post[]>()
  const [total, setTotal] = useState<number | null>()

  useEffect(() => {
    const getColumnArticles = async () => {
      const columnArticles = await fetch(
        'https://wp.kodoishin.com/wp-json/wp/v2/posts?categories=1&per_page=9',
      ).then((res) => {
        return res.json().then((data) => ({
          total: res.headers.get('X-WP-Total'),
          data,
        }))
      })
      setColumnArticles(columnArticles.data)
      setTotal(Number(columnArticles.total))
    }
    getColumnArticles()
  }, [])

  return (
    <PageLayout>
      <HeadMeta title='社長コラム｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='社長コラム' breadcrumb={[{ name: '社長コラム' }]} />
      {columnArticles && total ? (
        <PageContent>
          <CategoryNav categories={columnCategories} type='column' />
          {columnArticles && <ColumnList columnArticles={columnArticles} />}
          {total && <Pagination url='/column' total={total} />}
        </PageContent>
      ) : (
        <div css={pageLoading}>
          <Loading type='spin' color='#ddd' width={50} height={50} />
        </div>
      )}
      <section css={columnNavContainer}>
        <h2 css={columnNavTitle}>IK!IK!についてもっと知りたい方はこちら</h2>
        <ul css={columnNavList}>
          <li>
            <Button href='/mission'>ミッション</Button>
          </li>
          <li>
            <Button href='/company'>会社概要</Button>
          </li>
        </ul>
      </section>
    </PageLayout>
  )
}

export default ColumnPage
