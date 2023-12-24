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
      <HeadMeta title='学校向け｜サービス｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead
        title='学校向け'
        breadcrumb={[{ name: 'サービス', link: '/service' }, { name: '学校向け' }]}
      />
      <section css={serviceDetailDesc}>
        <span css={serviceDetailDescLine01('#7BA333')} />
        <span css={serviceDetailDescLine02('#7BA333')} />
        <div css={serviceDetailInner}>
          <div css={serviceDetailDescImg}>
            <Image src='/img/top/service_nav_img02.png' alt='' fill sizes='100%' />
          </div>
          <div css={serviceDetailDescContent('#7BA333')}>
            <h2>
              教員の
              <strong>”イキイキ”</strong>
              を引き出し、
              <br />
              学校の
              <strong>”イキイキ”</strong>
              を実現します
            </h2>
            {/* <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
            </p> */}
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
              社員の働きがい低下
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              リモートワークによるコミュニケーション不足
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              ハラスメントの増加
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              人手不足
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              マネージャーのリソース不足
            </li>
            <li>
              <img src='/img/common/icon_check.svg' alt='' />
              働くママ・Z世代・多様な人材とのバランス
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
              <p>組織エンゲージメント向上</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>イマドキ若手の育成</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>多様性を活かした組織開発</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>メンタル強化</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>ミドルマネジメント育成</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>ハラスメントの抑止</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>１ｏｎ１コーチング</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>ミドルマネジメント育成</p>
            </li>
            <li>
              <img src='/img/common/icon_leaf_red.svg' alt='' />
              <p>キャリア開発支援</p>
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
      {/* <CaseSlider title='学校向けの成果事例' caseArticles={caseArticles} type='school' /> */}
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
      slug: 'school',
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
