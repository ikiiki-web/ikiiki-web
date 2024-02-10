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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} }
  await sleep(Math.random() * 10)
  let columnArticle = await retry(`https://wp.kodoishin.com/wp-json/wp/v2/posts/${params.id}`)
  if (columnArticle === undefined) {
    await sleep(Math.random() * 10)
    columnArticle = await retry(`https://wp.kodoishin.com/wp-json/wp/v2/posts/${params.id}`)
  }
  if (columnArticle === undefined) {
    await sleep(Math.random() * 10)
    columnArticle = await retry(`https://wp.kodoishin.com/wp-json/wp/v2/posts/${params.id}`)
  }

  return {
    props: { columnArticle },
  }
}

async function retry(url: string) {
  await sleep(Math.random() * 10)
  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    })
    const a = await res.json()
    if (a === undefined) {
      throw new Error('error')
    }
    return a
  } catch (e) {
    retry(url)
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const columnArticles = await retry('https://wp.kodoishin.com/wp-json/wp/v2/posts/?per_page=500')
  return {
    paths: columnArticles.map((columnArticle: any) => ({
      params: { id: columnArticle.id.toString() },
    })),
    fallback: false,
  }
}

export default CasePage
