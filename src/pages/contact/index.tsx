import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import {
  contactComfirmItem,
  contactContainer,
  contactContent,
  contactDesc,
  contactFormBtn,
  contactFormConsent,
  contactFormItem,
  contactFormSelect,
  contactFormText,
  contactFormTextArea,
  contactItemError,
  contactStep,
  contactStepItem,
} from '@app/styles/component/contact'

type FormProps = {
  type: string
  name: string
  company: string
  email: string
  phone: string
  content: string
}

const DocumentContactPage = () => {
  const router = useRouter()
  const [isComfirm, setIsComfirm] = useState(false)
  const [isConsent, setIsConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormProps>()

  const onConfirm = (data: FormProps) => {
    console.log(data)
    setIsComfirm(true)
    window.scrollTo(0, 0)
  }

  const onSubmit = () => {
    setIsLoading(true)

    const { type, company, name, phone, email, content } = getValues()

    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `${email}`,
        userSubject: '【株式会社イキイキ（ＩＫ！ＩＫ！）】お問い合わせありがとうございます。',
        userMessage: `${name}様<br /><br />

        お問い合わせをいただきまして、ありがとうございました。<br />
        以下の内容でお問い合わせを受付いたしました。<br /><br />

        お問い合わせ項目：${type}<br />
        お名前：${name}<br />
        会社名/団体名：${company}<br />
        メールアドレス:${email}<br />
        お電話番号：${phone}<br />
        お問い合わせ内容：${content}<br /><br />

        後ほど担当者よりご連絡させていただきます。<br />
        ご不明な点がございましたら、お気軽にお問い合わせください。<br /><br />

        ＝＝＝＝＝＝＝＝<br />
        株式会社イキイキ（ＩＫ！ＩＫ！）<br />
        〒100-0004<br />
        東京都千代田区大手町1-6-1<br />
        大手町ビル1F-3F Spaces大手町<br />
        ＝＝＝＝＝＝＝＝`,

        adminSubject: '【お問い合わせ】IK!IK!サイトからのお問い合わせがありました。',
        adminMessage: `IK!IK!サイトから、お問い合わせがありました。<br /><br />

        お問い合わせ項目：${type}<br />
        お名前：${name}<br />
        会社名/団体名：${company}<br />
        メールアドレス:${email}<br />
        お電話番号：${phone}<br />
        お問い合わせ内容：${content}<br /><br /><br />
        
        
        このメールは [株式会社IK!IK!（イキイキ）] (https://www.ikiiki-e.com) のお問い合わせフォームから送信されました`,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          router.push('/contact/thanks')
        } else {
          setErrorText(
            'メール送信に失敗しました。大変お手数ですが<eiki@kodoishin.com>までご連絡のほどお願い申し上げます。',
          )
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <PageLayout>
      <HeadMeta title='お問い合わせ｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='お問い合わせ' breadcrumb={[{ name: 'お問い合わせ' }]} />
      <div css={contactContainer}>
        <p css={contactDesc}>
          こちらのフォームより、必要事項をご記載くださいませ。
          <br />
          ※同業他社の方、売り込み等のお問い合わせはお断り申し上げます。
        </p>
        <ul css={contactStep}>
          <li css={contactStepItem(!isComfirm)}>入力</li>
          <li css={contactStepItem(isComfirm)}>確認</li>
          <li css={contactStepItem(false)}>完了</li>
        </ul>
        <div css={contactContent}>
          {!isComfirm ? (
            <form onSubmit={handleSubmit(onConfirm)}>
              <div css={contactFormItem}>
                <label htmlFor='type'>
                  お問い合わせ内容
                  <span>必須</span>
                </label>
                <select
                  css={contactFormSelect}
                  {...register('type', {
                    required: 'お問い合わせ項目を選択してください。',
                  })}
                  id='type'
                >
                  <option value=''>ご選択ください</option>
                  <option value='一度、相談に乗ってほしい（オンライン）'>
                    一度、相談に乗ってほしい（オンライン）
                  </option>
                  <option value='サービス内容を教えてほしい'>サービス内容を教えてほしい</option>
                  <option value='提案をしてほしい'>提案をしてほしい</option>
                  <option value='その他'>その他</option>
                </select>
                {errors.type && <p css={contactItemError}>{errors.type.message}</p>}
              </div>
              <div css={contactFormItem}>
                <label htmlFor='name'>
                  お名前
                  <span>必須</span>
                </label>
                <input
                  css={contactFormText}
                  type='text'
                  id='name'
                  placeholder='例）山田　太郎'
                  {...register('name', {
                    required: 'お名前を入力してください。',
                  })}
                />
                {errors.name && <p css={contactItemError}>{errors.name.message}</p>}
              </div>
              <div css={contactFormItem}>
                <label htmlFor='company'>
                  会社名/団体名
                  <span>必須</span>
                </label>
                <input
                  css={contactFormText}
                  type='text'
                  id='company'
                  placeholder='例）株式会社イキイキ（ＩＫ！ＩＫ！）'
                  {...register('company', {
                    required: '会社名/団体名を入力してください。',
                  })}
                />
                {errors.company && <p css={contactItemError}>{errors.company.message}</p>}
              </div>
              <div css={contactFormItem}>
                <label htmlFor='email'>
                  メールアドレス
                  <span>必須</span>
                </label>
                <input
                  css={contactFormText}
                  type='text'
                  id='email'
                  placeholder='例）info@example.com'
                  {...register('email', {
                    required: 'メールアドレスを入力してください。',
                    pattern: {
                      value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                      message: '入力形式がメールアドレスではありません。',
                    },
                  })}
                />
                {errors.email && <p css={contactItemError}>{errors.email.message}</p>}
              </div>
              <div css={contactFormItem}>
                <label htmlFor='phone'>お電話番号</label>
                <input
                  css={contactFormText}
                  type='text'
                  id='phone'
                  placeholder='例）0012345678'
                  {...register('phone')}
                />
              </div>
              <div css={contactFormItem}>
                <label htmlFor='content'>お問い合わせ内容</label>
                <textarea css={contactFormTextArea} id='content' {...register('content')} />
              </div>
              <div css={contactFormConsent}>
                <input
                  type='checkbox'
                  id='consent'
                  onChange={(e) => setIsConsent(e.target.checked)}
                />
                <label htmlFor='consent'>
                  <a href='/privacy' target='_blank'>
                    個人情報の取扱い
                  </a>
                  について同意する
                </label>
              </div>
              <button type='submit' css={contactFormBtn} disabled={!isConsent}>
                確認画面へ
              </button>
            </form>
          ) : (
            <div>
              <div css={contactComfirmItem}>
                <p>
                  お問い合わせ項目
                  <span>必須</span>
                </p>
                <p>{getValues('type')}</p>
              </div>
              <div css={contactComfirmItem}>
                <p>
                  お名前
                  <span>必須</span>
                </p>
                <p>{getValues('name')}</p>
              </div>
              <div css={contactComfirmItem}>
                <p>
                  会社名/団体名
                  <span>必須</span>
                </p>
                <p>{getValues('company')}</p>
              </div>
              <div css={contactComfirmItem}>
                <p>
                  メールアドレス
                  <span>必須</span>
                </p>
                <p>{getValues('email')}</p>
              </div>
              <div css={contactComfirmItem}>
                <p>電話番号</p>
                <p>{getValues('phone')}</p>
              </div>
              <div css={contactComfirmItem}>
                <p>お問い合わせ内容</p>
                <p>{getValues('content')}</p>
              </div>
              <button onClick={onSubmit} css={contactFormBtn} disabled={isLoading}>
                この内容で送信する
              </button>
              {errorText && <p css={contactItemError}>{errorText}</p>}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default DocumentContactPage
