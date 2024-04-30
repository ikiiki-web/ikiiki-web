import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@app/components/atoms/Button'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { columnNavContainer, columnNavTitle, columnNavList } from '@app/styles/component/column'
import { colorPrimary, mqPc } from '@app/styles/variables'

const CompanyPage: React.FC = () => {
  return (
    <PageLayout>
      <HeadMeta title='会社概要｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='会社概要' breadcrumb={[{ name: '会社概要' }]} />
      <PageContent>
        <section css={companyInfo}>
          <h2 css={companyHead}>会社概要</h2>
          <table>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社イキイキ（通称：ＩＫ！ＩＫ！）</td>
              </tr>
              <tr>
                <th>代表者名</th>
                <td>栄木 憲太郎</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2020年5月1日</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>1,000万円</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  企業・学校・スポーツチームへの「行動定着」支援
                  <br />
                  （ワークショップ・フォローアップ・効果測定）
                </td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  〒104-0004
                  <br />
                  東京都千代田区大手町1-6-1
                  <br />
                  大手町ビル1F-3F Spaces大手町
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.617880901016!2d139.76222831136184!3d35.68640982957505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0795dc61fd%3A0x77de4804ccd3d437!2z44K544Oa44O844K344K6IOWkp-aJi-eUuiBTcGFjZXMg5aSn5omL55S6!5e0!3m2!1sja!2sjp!4v1714518932024!5m2!1sja!2sjp'
              width='600'
              height='450'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </section>
        <section css={companyGreeting}>
          <h2 css={companyHead}>代表挨拶</h2>
          <div css={companyGreetingContent}>
            <div css={companyGreetingImg}>
              <Image src='/img/company/representative.png' alt='' fill sizes='100%' />
            </div>
            <div css={companyGreetingBox}>
              <p>代表者名</p>
              <p>栄木 憲太郎</p>
              <p>
                おかげさまで、当社は２０２３年５月１日をもって４期目に突入しました。
                <br />
                今の仕事をするにあたって、私自身、周囲の方から質問されることが大きく３つあります。
                <br />
                <br />
                １つ目は、「なぜ、コロナの渦中に独立したの？」というものです。
                <br />
                創業したのは２０２０年５月１日、コロナ禍の真っ只中にありました。
                <br />
                正直、先が見えていた訳でも、成功への道筋があったわけではありません。
                <br />
                ですが、あえてこのタイミングで起業したことには理由があります。
                <br />
                それは、過去の経験から「順風よりも逆風の方が、大きく高く羽ばたける」という実感があったからです。
                <br />
                振り返ると、自身を成長させたのは「順境」よりも「逆境」のときでした。
                <br />
                独立してから３年。試行錯誤がありましたが、企業としてやっていくための「基礎体力」は身についたと思います。
                <br />
                <br />
                ２つ目に質問されること。
                <br />
                それは、「長年培ったキャリア（旅行業界）を放棄して、なぜまったくの異業種（ＨＲ業界）に転身したの？」というものです。
                <br />
                旅を通じて、お客様に価値を提供することにはやりがいを感じていました。
                <br />
                一方で、働いていてずっとモヤモヤ感を抱き続けていたのも事実です。
                <br />
                人との関係性、そもそもの働くことの目的、働くことへの意欲は？…といったものです。
                <br />
                これは私の一人よがりな想いではなく、どこの企業組織に属する人たちにも共通している想いであることが分かりました。
                <br />
                <br />
                働く人たちがイキイキすることで、お客様にも良いインパクトをもたらす。
                <br />
                それが結果として、自社の利益にもつながる…。
                <br />
                そんな世の中のサイクルを回していきたい…という想いが、キャリアを変えるきっかけにもなり、今の私の仕事の原動力になっています。
                <br />
                <br />
                ３つめに質問されること。
                <br />
                それは、「じゃあ、なぜ独立起業したの？」というものです。
                <br />
                世の中、人材派遣会社・人事コンサル・研修会社・転職支援会社・HRクラウドサービスなど、「人」に関する企業が活況です。
                <br />
                一方で、「じゃあ、日本の企業は元気になったか？」と言われると疑問符がつきます。
                <br />
                それは、日本企業のエンゲージメントスコアの低さ、日本人の幸福度スコアの低さなどからも見て取れます。
                <br />
                つまり、「人に関わる企業が、満足のいくような価値を提供できていないのでは？」という問題意識を持っていました。
                <br />
                <br />
                ただ、今ほど「人が大事」と言われている時代はありません。
                <br />
                裏を返せば、顧客が満足のいくような価値を提供できれば、世の中に大きなインパクトをもたらすと思います。
                <br />
                <br />
                「これまでのＨＲ業界の『常識』に風穴を開けたい」
                <br />
                それが、独立するに至った想いであります。
                <br />
                <br />
                独立してから３年間で、つくづく感じることがあります。
                <br />
                それは、人財開発や組織の活性化支援は「効率的」に行えるものではないということです。
                <br />
                一人ひとり、一社一社と丁寧に向き合い、「対話」を通じて、人として働きかけていく中でこそなされるものと思います。
                <br />
                ですので、当社は何よりも「質」を追い求めていきます。
                <br />
                そして、時間をかけてでも、本気で「顧客の成果」にこだわる企業でありたいと思っています。
              </p>
              <Link href='/column'>社長コラム</Link>
            </div>
          </div>
        </section>
      </PageContent>
      <section css={columnNavContainer}>
        <h2 css={columnNavTitle}>IK!IK!についてもっと知りたい方はこちら</h2>
        <ul css={columnNavList}>
          <li>
            <Button href='/mission'>ミッション</Button>
          </li>
          <li>
            <Button href='/column'>社長コラム</Button>
          </li>
        </ul>
      </section>
    </PageLayout>
  )
}

const companyHead = css`
  font-size: 22px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
`

const companyInfo = css`
  ${mqPc} {
    max-width: 840px;
    margin: 0 auto;
  }
  table {
    width: 100%;
    margin-top: 30px;
    border-bottom: 1px solid #dddddd;
    ${mqPc} {
      margin-top: 40px;
    }
    th,
    td {
      display: block;
      font-size: 16px;
      font-weight: normal;
      text-align: left;
      line-height: 1.75;
      ${mqPc} {
        display: table-cell;
        border-top: 1px solid #dddddd;
      }
    }
    th {
      border-top: 1px solid #dddddd;
      padding-top: 15px;
      ${mqPc} {
        width: 220px;
        padding: 24px 20px;
      }
    }
    td {
      padding: 15px 0 15px;
      ${mqPc} {
        padding: 24px 0;
      }
    }
  }
  & > div {
    margin-top: 40px;
    ${mqPc} {
      max-width: 840px;
      margin: 80px auto 0;
    }
    iframe {
      width: 100%;
      height: 50vw;
      ${mqPc} {
        height: 450px;
      }
    }
  }
`

const companyGreeting = css`
  margin-top: 80px;
  ${mqPc} {
    margin-top: 160px;
  }
`

const companyGreetingContent = css`
  margin-top: 30px;
  ${mqPc} {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const companyGreetingImg = css`
  width: 160px;
  margin: 0 auto;
  position: relative;
  ${mqPc} {
    width: 280px;
    margin: 0;
  }
  img {
    position: unset !important;
  }
`

const companyGreetingBox = css`
  margin-top: 30px;
  ${mqPc} {
    width: calc(100% - 340px);
    margin-top: 0;
  }
  p {
    &:nth-of-type(1) {
      font-size: 13px;
      ${mqPc} {
        font-size: 16px;
        line-height: 1.5;
      }
    }
    &:nth-of-type(2) {
      font-size: 18px;
      font-weight: bold;
      margin-top: 14px;
      ${mqPc} {
        font-size: 22px;
      }
    }
    &:nth-of-type(3) {
      font-size: 14px;
      line-height: 1.75;
      margin-top: 30px;
      ${mqPc} {
        font-size: 16px;
        margin-top: 40px;
      }
    }
  }
  a {
    color: ${colorPrimary};
    text-decoration: underline;
    font-size: 14px;
    margin-top: 30px;
    display: inline-block;
    ${mqPc} {
      font-size: 16px;
      margin-top: 40px;
    }
  }
`

export default CompanyPage
