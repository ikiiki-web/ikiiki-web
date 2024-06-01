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
                  〒100-0004
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
              <p>代表取締役</p>
              <p>栄木 憲太郎</p>
              <p>
                おかげさまで、当社は2024年5月1日に5期目を迎えました。
                <br />
                この一年間で、私たちは東京へと拠点を移し、個人事業主からチーム体制へという大きな転換を遂げました。
                <br />
                新たに仲間が加わり、私たちは真のチームとしての力を発揮し始めています。
                <br />
                <br />
                昨年度、多くの方々から「栄木さんは、経営者（マネジメント）よりも、講師やコーチ業（プレイヤー）に向いているんじゃない？」とのご意見を頂きました。
                <br />
                確かに、私は“一球入魂”でワークショップ（研修）とコーチングを行ってきて、おかげさまで、多くのお客様からリピートでのご指名を頂くことができました。
                <br />
                <br />
                しかし、私が独立したきっかけは、自身の原体験に基づく社会への問題意識からであり、「今の世の中をより良くしたい」という思いが根底にあります。
                <br />
                <br />
                私たちが真に追求するのは、「動機づけ」を超えた実際の「成果」を伴うこと。
                <br />
                この目標を達成するためには、同じ熱量と志を共有する仲間と力を合わせることが不可欠です。
                <br />
                <br />
                私たちのソリューションはいたってシンプルです。
                <br />
                人と組織の活性化に向けて、お客様の課題を丁寧にヒアリングし、最適なプログラムをご提案します。
                <br />
                ワークショップやコーチングで「動機づけ」を行い、行動変容を継続的に支援し、成果に貢献しプログラムの効果を測定します。
                <br />
                この「質」を高め続けるとともに、サービスラインナップも拡充していきます。
                <br />
                <br />
                新しいプログラム「社会人のための修学旅行🄬」では、47都道府県を行き尽くした「旅のプロ」がコーディネートし、非日常体験と他流試合を通じて新たな気づきと成長への動機づけを行います。
                <br />
                また、「IK! IK!
                サポーター」では、質の高いホスピタリティとコーチングを通じて、行動継続と行動変容を後押しします。
                <br />
                さらに、習慣力強化アプリ「５自」は、シンプルでライトな操作性で「習慣力」の形成を支援し、動機づけに特化したワークショップは、集合研修の価値を「知識のインプット」から「気づき・動機づけ」へとシフトさせています。机上の学びだけで終わらせない、「現場での実践に役立つ内容」として好評を博しています。
                <br />
                <br />
                これまでのみなさまからの温かい支援と信頼に心から感謝するとともに、「よりよい社会づくり」を進めるため、未来に向けたこの旅に、どうぞ引き続き一緒に乗り出していただければと思います。
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
