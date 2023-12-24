import { GetStaticProps } from 'next'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import { Pagination } from '@app/components/atoms/Pagination'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import SeminarList from '@app/components/contents/seminar/SeminarList'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2 } from '@app/libs/client'
import { seminarListTitle } from '@app/styles/component/seminar'
import { SeminarArticles } from '@app/types/newt'
import { contentsDisplay } from '@app/utils/constants'

type Props = {
  seminarArticles: SeminarArticles
}

const SeminarPage: React.FC<Props> = ({ seminarArticles }) => {
  return (
    <PageLayout>
      <HeadMeta title='セミナー｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='セミナー' breadcrumb={[{ name: 'セミナー' }]} />
      <PageContent>
        <h2 css={seminarListTitle}>開催予定のセミナー</h2>
        <SeminarList seminarArticles={seminarArticles} />
        <Pagination url='/case' total={seminarArticles.total} />
      </PageContent>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // セミナー一覧取得
  const seminarArticles = await client2.getContents({
    appUid: 'seminar',
    modelUid: 'article',
    query: {
      limit: contentsDisplay,
    },
  })

  return {
    props: {
      seminarArticles,
    },
  }
}

export default SeminarPage
