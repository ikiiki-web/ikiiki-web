import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from 'react-loading'
import HeadMeta from '@app/components/atoms/HeadMeta'
import { Pagination } from '@app/components/atoms/Pagination'
import CategoryNav from '@app/components/blocks/CategoryNav'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import ColumnList from '@app/components/contents/column/ColumnList'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { pageLoading } from '@app/styles/component/page'
import { WP_REST_API_Post } from '@app/types/wp'
import { columnCategories } from '@app/utils/constants'

const CasePage: React.FC = () => {
  const [columnArticles, setColumnArticles] = useState<WP_REST_API_Post[]>()
  const [total, setTotal] = useState<number | null>()
  const router = useRouter()
  const category = router.query.category as string
  const page = router.query.page as string

  useEffect(() => {
    const getColumnArticles = async () => {
      const columnArticles = await fetch(
        `https://ikiiki-column.v3x6y84f.work/wp-json/wp/v2/posts?categories=${category}&per_page=9&page=${page}`,
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
  }, [router.query])

  return (
    <PageLayout>
      <HeadMeta title='社長コラム｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='社長コラム' breadcrumb={[{ name: '社長コラム' }]} />
      {columnArticles && total ? (
        <PageContent>
          <CategoryNav categories={columnCategories} categorySlug={category} type='column' />
          <ColumnList columnArticles={columnArticles} />
          <Pagination
            url={`/column/category/${category}`}
            total={total}
            currentPage={Number(page)}
          />
        </PageContent>
      ) : (
        <div css={pageLoading}>
          <Loading type='spin' color='#ddd' width={50} height={50} />
        </div>
      )}
    </PageLayout>
  )
}

export default CasePage
