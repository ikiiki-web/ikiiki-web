import { GetServerSideProps, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from 'react-loading'
import HeadMeta from '@app/components/atoms/HeadMeta'
import DetailWp from '@app/components/blocks/DetailWp'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { pageLoading } from '@app/styles/component/page'
import { WP_REST_API_Post } from '@app/types/wp'

const CasePage: React.FC = () => {
  const [columnArticle, setColumnArticle] = useState<WP_REST_API_Post>()
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (router.isReady) {
      const getColumnArticles = async () => {
        const columnArticle = await fetch(
          `https://ikiiki-column.v3x6y84f.work/wp-json/wp/v2/posts/${id}`,
        ).then((res) => res.json())
        setColumnArticle(columnArticle)
      }
      getColumnArticles()
    }
  }, [router.isReady, id])

  return (
    <PageLayout>
      <HeadMeta
        title={`${columnArticle?.title?.rendered}｜社長コラム｜株式会社IK!IK!（イキイキ）`}
      />
      <PageHead
        title='社長コラム'
        breadcrumb={[
          { name: '社長コラム', link: '/column' },
          { name: columnArticle?.title?.rendered as string },
        ]}
        detail
      />
      {columnArticle ? (
        <DetailWp article={columnArticle} />
      ) : (
        <div css={pageLoading}>
          <Loading type='spin' color='#ddd' width={50} height={50} />
        </div>
      )}
    </PageLayout>
  )
}

export default CasePage
