import Head from 'next/head'
import Link from 'next/link'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { detailContent, detailContentBtn } from '@app/styles/component/detail'
import { pageBox, pageContainer } from '@app/styles/component/page'

const PrivacyPage = () => {
  return (
    <PageLayout>
      <HeadMeta title='ページが見つかりませんでした | 株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='404エラー' breadcrumb={[{ name: '404エラー' }]} />
      <div css={pageContainer}>
        <div css={pageBox}>
          <div css={detailContent}>
            <h2>お探しのページが見つかりませんでした。</h2>
            <p>
              指定されたURLのページは存在しません。
              <br />
              サイト更新などによってURLが変更になったか、URLが正しく入力されていない可能性があります。
              <br />
              ブラウザの再読込を行ってもこのページが表示される場合は、TOPページへお戻りください。
            </p>
          </div>
          <Link href='/' css={detailContentBtn}>
            TOPページ
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default PrivacyPage
