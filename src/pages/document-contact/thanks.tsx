import Link from 'next/link'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { detailContent, detailContentBtn } from '@app/styles/component/detail'
import { pageBox, pageContainer } from '@app/styles/component/page'

const DocumentContactPage = () => {
  return (
    <PageLayout>
      <HeadMeta title='資料請求完了｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='資料請求完了' breadcrumb={[{ name: '資料請求完了' }]} />
      <div css={pageContainer}>
        <div css={pageBox}>
          <div css={detailContent}>
            <h2>資料請求ありがとうございます。</h2>
            <p>
              このたびは、株式会社イキイキ（ＩＫ！ＩＫ！）の資料請求をお申し込み頂き誠にありがとうございます。
              <br />
              お送り頂きました内容を確認の上、数日中に折り返しご連絡させて頂きます。
              <br />
              <br />
              しばらく経ってもメールが届かない場合は、入力頂いたメールアドレスが間違っているか、迷惑メールフォルダに振り分けられている可能性がございます。
              <br />
              また、ドメイン指定をされている場合は、「@kodoishin.com」からのメールが受信できるようあらかじめ設定をお願いいたします。
              <br />
              以上の内容をご確認の上、お手数ですがもう一度フォームよりお申し込み頂きますようお願い申し上げます。
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

export default DocumentContactPage
