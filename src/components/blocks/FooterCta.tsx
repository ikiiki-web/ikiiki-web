import { css } from '@emotion/react'
import Link from 'next/link'
import IconArw from '../atoms/icons/IconArw'
import IconDocument from '../atoms/icons/IconDocument'
import IconMail from '../atoms/icons/IconMail'
import { colorPrimary, colorSecondary, mqPc, onlyPc } from '@app/styles/variables'

const FooterCta = () => {
  return (
    <section css={footerCta}>
      <div css={footerCtaBox}>
        <div css={footerCtaBoxInner}>
          <p css={footerCtaTitle}>
            <IconDocument />
            資料請求
          </p>
          <p css={footerCtaDesc}>
            IK!IK!のサービス資料をダウンロードいただけます。
            <br />
            人財開発・組織開発支援・研修などのサービスを
            <br />
            ご検討の方は、ぜひご一読ください。
          </p>
          <Link href='/document-contact' css={footerCtaBtn} data-gtm-click='cta-footer-document'>
            資料を見てみる
            <IconArw />
          </Link>
        </div>
      </div>
      <div css={footerCtaBox}>
        <div css={footerCtaBoxInner}>
          <p css={footerCtaTitle}>
            <IconMail />
            お問い合わせ
          </p>
          <p css={footerCtaDesc}>
            まずはあなたの「モヤモヤ」をご相談ください。
            <br />
            お客様一人ひとりの課題に「傾聴の姿勢」で
            <br css={onlyPc} />
            最適なご提案をいたします。
          </p>
          <Link href='/contact' css={footerCtaBtn} data-gtm-click='cta-footer-contact'>
            相談してみる
            <IconArw />
          </Link>
        </div>
      </div>
    </section>
  )
}

const footerCta = css`
  ${mqPc} {
    display: flex;
  }
  & > div {
    &:nth-of-type(1) {
      background: ${colorSecondary};
      a {
        color: ${colorSecondary};
        ${mqPc} {
          color: #fff;
          &:hover {
            color: ${colorSecondary};
            svg {
              stroke: ${colorSecondary};
            }
          }
        }
        svg {
          stroke: ${colorSecondary};
          ${mqPc} {
            stroke: #fff;
          }
        }
      }
    }
    &:nth-of-type(2) {
      background: ${colorPrimary};
      a {
        color: ${colorPrimary};
        ${mqPc} {
          color: #fff;
          &:hover {
            color: ${colorPrimary};
            svg {
              stroke: ${colorPrimary};
            }
          }
        }
        svg {
          stroke: ${colorPrimary};
          ${mqPc} {
            stroke: #fff;
          }
        }
      }
    }
  }
`

const footerCtaBox = css`
  padding: 30px 25px;
  ${mqPc} {
    padding: 80px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const footerCtaBoxInner = css`
  max-width: 450px;
`

const footerCtaTitle = css`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
  svg {
    width: 32px;
    margin-right: 5px;
    stroke: #fff;
    ${mqPc} {
      width: 50px;
    }
  }
`

const footerCtaDesc = css`
  color: #fff;
  font-size: 13px;
  line-height: 1.8;
  margin-top: 25px;
  ${mqPc} {
    font-size: 16px;
  }
`

const footerCtaBtn = css`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 60px;
  margin-top: 30px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  z-index: 10;
  transition: 0.3s;
  ${mqPc} {
    background: transparent;
    border: 3px solid #fff;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #fff;
    transition: 0.3s;
    z-index: -1;
  }
  svg {
    width: 8px;
    transition: 0.3s;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`

export default FooterCta
