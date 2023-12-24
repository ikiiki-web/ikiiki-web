import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import AboutNav from '@app/components/blocks/AboutNav'
import CaseSlider from '@app/components/blocks/CaseSlider'
import Cta from '@app/components/blocks/Cta'
import PageHead from '@app/components/blocks/PageHead'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2 } from '@app/libs/client'
import {
  serviceDetailDesc,
  serviceDetailDescContent,
  serviceDetailDescImg,
  serviceDetailDescLine01,
  serviceDetailDescLine02,
  serviceDetailExample,
  serviceDetailExampleDesc,
  serviceDetailExampleInner,
  serviceDetailExampleItem,
  serviceDetailExampleItemContent,
  serviceDetailExampleItemImg,
  serviceDetailExampleList,
  serviceDetailExampleTitle,
  serviceDetailInner,
  serviceDetailSolution,
  serviceDetailSolutionInner,
  serviceDetailSolutionLine01,
  serviceDetailSolutionLine02,
  serviceDetailSolutionLine03,
  serviceDetailSolutionLine04,
  serviceDetailSolutionList,
  serviceDetailSolutionMan,
  serviceDetailSolutionTitle,
  serviceDetailSolutionWood,
  serviceDetailTrouble,
  serviceDetailTroubleBottom,
  serviceDetailTroubleImg,
  serviceDetailTroubleInner,
  serviceDetailTroubleList,
  serviceDetailTroubleTitle,
} from '@app/styles/component/company'
import { onlyPc, onlySp } from '@app/styles/variables'
import { CaseArticle, Category } from '@app/types/newt'

type Props = {
  caseArticles: CaseArticle[]
}

const ServicePage: React.FC<Props> = ({ caseArticles }) => {
  return (
    <PageLayout>
      <HeadMeta title='企業向け｜サービス｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead
        title='企業向け'
        breadcrumb={[{ name: 'サービス', link: '/service' }, { name: '企業向け' }]}
      />
      <section css={serviceDetailDesc}>
        <span css={serviceDetailDescLine01('#CE3C5E')} />
        <span css={serviceDetailDescLine02('#CE3C5E')} />
        <div css={serviceDetailInner}>
          <div css={serviceDetailDescImg}>
            <Image src='/img/top/service_nav_img01.png' alt='' fill sizes='100%' priority />
          </div>
          <div css={serviceDetailDescContent('#CE3C5E')}>
            <h2>
              社員一人ひとりの
              <br css={onlySp} />
              <strong>”イキイキ”</strong>
              を引き出し、
              <br css={onlySp} />
              組織の
              <strong>”イキイキ”</strong>
              を実現します
            </h2>
            <p>
              ”イキイキ”を分解すると、
              <strong>ウェルネス（心身の健康）</strong>・<strong>ハピネス（幸福感）</strong>・
              <strong>エンゲージメント（働きがい）</strong>
              という言葉に置き換えられます。一人ひとりの”イキイキ”は、「外的な環境（人間関係）」と「内面的なあり方（物事への捉え方）」によってもたらされます。
              IK!IK!は、成果に向けて、両者へのアプローチをしていきます。
            </p>
          </div>
        </div>
      </section>
      <section css={serviceDetailTrouble}>
        <div css={serviceDetailTroubleInner}>
          <h2 css={serviceDetailTroubleTitle}>
            こんな
            <span>お悩み</span>
            ありませんか？
          </h2>
          <img css={serviceDetailTroubleImg} src='/img/service/trouble_man.png' alt='' />
          <ul css={serviceDetailTroubleList}>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              どうしたら一人ひとりが
              <br css={onlySp} />
              自律的に動いてくれるようになるのか？
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              どうしたら多様性を尊重しあえる組織になるか？
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              どうしたら風通しの良い組織になるか？
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              どうしたらが社員の主体性を
              <br css={onlySp} />
              引き出すマネジメントができるか？
            </li>
          </ul>
        </div>
        <img css={serviceDetailTroubleBottom} src='/img/service/trouble_bottom.png' alt='' />
      </section>
      <section css={serviceDetailSolution}>
        <span css={serviceDetailSolutionLine01} />
        <span css={serviceDetailSolutionLine02} />
        <span css={serviceDetailSolutionLine03} />
        <span css={serviceDetailSolutionLine04} />
        <div css={serviceDetailSolutionInner}>
          <h2 css={serviceDetailSolutionTitle}>
            その悩み
            <br css={onlySp} />
            <ruby data-ruby='イキイキ'>IK!IK!</ruby>が<span>解決</span>
            します
            <img src='/img/common/icon_leaf_red_yellow.svg' alt='' />
            <img src='/img/common/icon_leaf_blue_red.svg' alt='' />
          </h2>
          <img css={serviceDetailSolutionMan} src='/img/service/solution_man.png' alt='' />
          <img css={serviceDetailSolutionWood} src='/img/common/wood.svg' alt='' />
          <ul css={serviceDetailSolutionList}>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>自律型人財育成プログラム</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>1on1浸透・定着支援プログラム</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>
                マネジャーのための
                <br css={onlySp} />
                人財マネジメント向上プログラム
              </p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>関係の質向上プログラム</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>社会人のための修学旅行</p>
            </li>
          </ul>
        </div>
      </section>
      {/* <section css={serviceDetailExample}>
        <div css={serviceDetailExampleInner}>
          <h2 css={serviceDetailExampleTitle}>
            様々な
            <span>解決例</span>
            があります
          </h2>
          <p css={serviceDetailExampleDesc}>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
          </p>
          <ul css={serviceDetailExampleList}>
            <li css={serviceDetailExampleItem}>
              <div css={serviceDetailExampleItemContent}>
                <span>CASE01</span>
                <h3>
                  社員の働きがいの低下
                  <small>を解決！</small>
                </h3>
                <p>
                  この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
                </p>
              </div>
              <div css={serviceDetailExampleItemImg}>
                <Image src='/img/service/example_img01.png' alt=''fill sizes='100%' />
              </div>
            </li>
            <li css={serviceDetailExampleItem}>
              <div css={serviceDetailExampleItemContent}>
                <span>CASE02</span>
                <h3>
                  社員の働きがいの低下
                  <small>を解決！</small>
                </h3>
                <p>
                  この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
                </p>
              </div>
              <div css={serviceDetailExampleItemImg}>
                <Image src='/img/service/example_img01.png' alt=''fill sizes='100%' />
              </div>
            </li>
          </ul>
        </div>
      </section> */}
      {/* <CaseSlider title='企業向けの成果事例' caseArticles={caseArticles} type='company' /> */}
      <Cta />
      <AboutNav />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // カテゴリーID取得
  const category = await client2.getFirstContent<Category>({
    appUid: 'case',
    modelUid: 'category',
    query: {
      slug: 'company',
    },
  })

  // 成果事例一覧取得
  const caseArticles = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
    query: {
      limit: 3,
      category: category?._id,
    },
  })

  return {
    props: {
      caseArticles: caseArticles.items,
    },
  }
}

export default ServicePage
