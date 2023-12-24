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
  contactFormText,
  contactItemError,
  contactStep,
  contactStepItem,
} from '@app/styles/component/contact'

type FormProps = {
  name: string
  company: string
  email: string
  phone: string
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

    const { company, name, phone, email } = getValues()

    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `${email}`,
        userMessage: `${name}様<br /><br />

        この度はお問い合わせありがとうございました。<br />
        1営業日以内に、担当よりご連絡させていただきます。<br />
        今しばらくお待ちくださいませ。<br /><br />

        以下の内容でお問い合わせを受け付けいたしました。<br /><br />

        ----------------<br />
        お名前：${name}<br />
        会社名/屋号名：${company}<br />
        お電話番号：${phone}<br />
        メールアドレス：${email}<br />
        ----------------<br /><br />

        ※本メールはシステムからの自動返信メールとなっております。`,
        adminMessage: `差出人: ${name}様 &lt;${email}&gt;<br /><br />

        お問い合わせ内容は以下となります。<br />
        ----------------<br />
        お名前：${name}<br />
        会社名/屋号名：${company}<br />
        お電話番号：${phone}<br />
        メールアドレス：${email}<br />
        ----------------<br /><br />

        -- <br />
        このメールは【株式会社IK!IK!（イキイキ）】のお問い合わせフォームから送信されました。`,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          router.push('/document-contact/thanks')
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
      <HeadMeta title='セミナー申し込み｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='セミナー申し込み' breadcrumb={[{ name: 'セミナー申し込み' }]} />
      <div css={contactContainer}>
        <p css={contactDesc}>
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
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
