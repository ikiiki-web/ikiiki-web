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
      <HeadMeta title='スポーツ向け｜サービス｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead
        title='スポーツ向け'
        breadcrumb={[{ name: 'サービス', link: '/service' }, { name: 'スポーツ向け' }]}
      />
      <section css={serviceDetailDesc}>
        <span css={serviceDetailDescLine01('#2180AC')} />
        <span css={serviceDetailDescLine02('#2180AC')} />
        <div css={serviceDetailInner}>
          <div css={serviceDetailDescImg}>
            <Image src='/img/top/service_nav_img03.png' alt='' fill sizes='100%' />
          </div>
          <div css={serviceDetailDescContent('#2180AC')}>
            <h2>
              <strong>「気づく」</strong>
              こと、
              <br css={onlySp} />
              <strong>「行動する」</strong>
              ことにフォーカスし
              <br css={onlySp} />
              <strong>「成果」</strong>
              にコミットする
            </h2>
            <p>
              パフォーマンスを発揮するには、一人ひとりの
              <strong>「心の持ちよう」</strong>
              も重要なポイントになります。パフォーマンスを発揮するための「心のもちよう」に気づいてもらうための支援をします。
              {'　'}また、チームとして成果を出すためには
              <strong>「コミュニケーション」</strong>
              も重要なポイントになります。成果を出すためのコミュニケーション活性化に向けた支援をいたします。
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
              なかなかパフォーマンスが上がらない
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              チームとして成果が上がらない
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              習慣化が定着しない
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              コミュニケーションがうまくいかない
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
              <p>選手のモチベーション向上</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>コミュニケーション活性化</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>メンタル強化</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>行動習慣化アプリ「5自」</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>１ｏｎ１コーチング</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>自主性の向上</p>
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
      {/* <CaseSlider title='スポーツ向けの成果事例' caseArticles={caseArticles} type='sports' /> */}
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
      slug: 'sports',
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
