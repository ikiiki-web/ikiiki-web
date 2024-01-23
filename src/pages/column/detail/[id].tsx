import { GetStaticPaths, GetStaticProps } from 'next'
import Loading from 'react-loading'
import HeadMeta from '@app/components/atoms/HeadMeta'
import DetailWp from '@app/components/blocks/DetailWp'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { pageLoading } from '@app/styles/component/page'
import { WP_REST_API_Post } from '@app/types/wp'

type Props = {
  columnArticle: WP_REST_API_Post
}

const CasePage = (props: Props) => {
  const { columnArticle } = props

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} }
  const res = await fetch(`https://wp.kodoishin.com/wp-json/wp/v2/posts/${params.id}`, {
    headers: {
      Accept: 'application/json',
    },
  })
  const columnArticle = await res.json()

  return {
    props: { columnArticle },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://wp.kodoishin.com/wp-json/wp/v2/posts/?per_page=500`, {
    headers: {
      Accept: 'application/json',
    },
  })
  const columnArticles = await res.json()
  return {
    paths: columnArticles.map((columnArticle: any) => ({
      params: { id: columnArticle.id.toString() },
    })),
    fallback: false,
  }
}

export default CasePage
