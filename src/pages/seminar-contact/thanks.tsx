import Link from 'next/link'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { detailContent, detailContentBtn } from '@app/styles/component/detail'
import { pageBox, pageContainer } from '@app/styles/component/page'

const DocumentContactPage = () => {
  return (
    <PageLayout>
      <HeadMeta title='セミナー申し込み完了｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='セミナー申し込み完了' breadcrumb={[{ name: 'セミナー申し込み完了' }]} />
      <div css={pageContainer}>
        <div css={pageBox}>
          <div css={detailContent}>
            <h2>セミナーへのお申し込みありがとうございます。</h2>
            <p>
              このたびは、株式会社イキイキ（ＩＫ！ＩＫ！）のセミナーをお申し込み頂き誠にありがとうございます。
              <br />
              ご記入頂いたメールアドレスへ、自動返信の確認メールをお送りしております。
              <br />
              <br />
              しばらく経ってもメールが届かない場合は、入力頂いたメールアドレスが間違っているか、迷惑メールフォルダに振り分けられている可能性がございます。
              <br />
              また、ドメイン指定をされている場合は、「@XXXX.com」からのメールが受信できるようあらかじめ設定をお願いいたします。
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
