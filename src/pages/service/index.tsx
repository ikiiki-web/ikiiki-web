import { css } from '@emotion/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import HeadMeta from '@app/components/atoms/HeadMeta'
import CaseSlider from '@app/components/blocks/CaseSlider'
import PageHead from '@app/components/blocks/PageHead'
import ServiceNav from '@app/components/blocks/ServiceNav'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client2 } from '@app/libs/client'
import { line } from '@app/styles/animate'
import { colorPrimary, mqPc, onlyPc, onlySp } from '@app/styles/variables'
import { CaseArticle } from '@app/types/newt'

type Props = {
  caseArticles: CaseArticle[]
}

const ServicePage: React.FC<Props> = ({ caseArticles }) => {
  return (
    <PageLayout>
      <HeadMeta title='サービス｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />

      <PageHead title='サービス' breadcrumb={[{ name: 'サービス' }]} />
      <section css={serviceDesc}>
        <span css={serviceDescLine01} />
        <span css={serviceDescLine02} />
        <span css={serviceDescLine03} />
        <span css={serviceDescLine04} />
        <div css={serviceDescContent}>
          <div css={serviceDescImg}>
            <Image src='/img/top/service_img.png' alt='' fill sizes='100%' priority />
          </div>
          <h2 css={serviceDescTitle}>
            VUCA時代において、
            <br />
            成果の出る組織は
            <br css={onlySp} />
            「コミュニケーション」
            <br />
            「自律型人材育成」を通して、
            <br />
            「パーパスの共有」を
            <br css={onlySp} />
            することが重要です。
            <br />
          </h2>
        </div>
        <ul css={serviceDescList}>
          <li css={serviceDescListItem}>
            <img src='/img/service/desc_img01.svg' alt='パーパスの共有' />
            <ul>
              <li>
                <img src='/img/common/icon_leaf.svg' alt='' />
                <p>パーパス浸透ワークショップ</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf.svg' alt='' />
                <p>飽くなきパーパスの探究</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf.svg' alt='' />
                <p>パーパスの体現者（言行一致）</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf.svg' alt='' />
                <p>中長期ビジョンを指し示す</p>
              </li>
            </ul>
          </li>
          <li css={serviceDescListItem}>
            <img src='/img/service/desc_img02.svg' alt='自律型人材育成（個の力）' />
            <ul>
              <li>
                <img src='/img/common/icon_leaf_red.svg' alt='' />
                <p>セルフマネジメントワークショップ</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_red.svg' alt='' />
                <p>行動定着アプリ５自</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_red.svg' alt='' />
                <p>行動定着ＩＫ！ＩＫ！サポーター</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_red.svg' alt='' />
                <p>１ｏｎ１コーチング</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_red.svg' alt='' />
                <p>「社会人のための修学旅行」個人編</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_red.svg' alt='' />
                <p>女性リーダー支援プログラム</p>
              </li>
            </ul>
          </li>
          <li css={serviceDescListItem}>
            <img src='/img/service/desc_img03.svg' alt='コミュニケーション（関係の質）' />
            <ul>
              <li>
                <img src='/img/common/icon_leaf_green.svg' alt='' />
                <p>１ｏｎ１浸透・定着支援</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_green.svg' alt='' />
                <p>「社会人のための修学旅行」</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_green.svg' alt='' />
                <p>マネジメント力強化</p>
              </li>
              <li>
                <img src='/img/common/icon_leaf_green.svg' alt='' />
                <p>組織エンゲージメント向上プログラム</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section css={serviceFeature}>
        <h2 css={serviceFeatureTitle}>サービスの特徴</h2>
        <ul css={serviceFeatureList}>
          <li css={serviceFeatureItem}>
            <img src='/img/common/icon_leaf_yellow_red.svg' alt='' />
            <h3>
              <strong>「成果」</strong>
              にコミット
            </h3>
            <div>
              <Image src='/img/service/feature_img01.png' alt='' fill sizes='100%' />
            </div>
            <p>
              成果（ゴール）から逆算したプログラムを設計いたします。欠かせないのは、受講者の
              <strong>「気づき」</strong>と<strong>「自発的な行動」</strong>
              。そしてこの両者を支援する「しくみ」です。IK!IK!の提供価値でもあります。
            </p>
          </li>
          <li css={serviceFeatureItem}>
            <img src='/img/common/icon_leaf_yellow_red.svg' alt='' />
            <h3>
              自慢の
              <strong>講師陣・コーチ陣</strong>
            </h3>
            <div>
              <Image src='/img/service/feature_img02.png' alt='' fill sizes='100%' />
            </div>
            <p>
              ひと言でいえば、受講者の<strong>「やる気スイッチを押す達人」</strong>
              です。受講者に寄り添いながら、受講者が抱きそうな「モヤモヤ感」を、受講者視点に立って解決します。だから、「納得感」が生まれます。
            </p>
          </li>
          <li css={serviceFeatureItem}>
            <img src='/img/common/icon_leaf_yellow_red.svg' alt='' />
            <h3>
              <strong>変化</strong>
              対応力
            </h3>
            <div>
              <Image src='/img/service/feature_img03.png' alt='' fill sizes='100%' />
            </div>
            <p>
              <strong>お客様の状況</strong>
              や、
              <strong>環境の変化</strong>
              を察知し、きめ細やかに柔軟な対応をいたします。
            </p>
          </li>
        </ul>
      </section>
      <section css={serviceFlow}>
        <h2 css={serviceFlowTitle}>サービスの流れ</h2>
        <p css={serviceFlowHead}>
          <ruby data-ruby='イキイキ'>IK!IK!</ruby>は、
          <br css={onlySp} />
          <span css={{ color: '#E68635' }}>「気づく」</span>
          <span css={{ color: '#7BA333' }}>「行動」</span>
          <span css={{ color: '#2180AC' }}>「継続」</span>
          に
          <br />
          フォーカスし
          <br css={onlySp} />
          <span css={{ color: '#CE3C5E' }}>「成果」</span>にコミット。
        </p>
        <div css={serviceFlowImg}>
          <Image src='/img/service/flow_img.png' alt='' fill sizes='100%' />
        </div>
        <ul css={serviceFlowList}>
          <li css={serviceFlowItemLast}>
            <span>
              <img src='/img/service/icon_search.png' alt='' />
              ゴール設定
            </span>
            <p>
              お客様の「モヤモヤ」をしっかりお聞きし、問題の所在を見つけることで、
              <strong>解くべき課題</strong>
              を明確にします。お客様とともに
              <strong>共通のゴール（定性・定量）</strong>
              を設定した後に、ご予算に応じたプログラムを設計いたします。投資対効果以上の
              <strong>「成果」</strong>
              でお返しすることが私たちの役割です。
            </p>
          </li>
          <li css={serviceFlowItem}>
            <span>
              <img src='/img/service/icon_lite_w.png' alt='' />
              気づき
            </span>
            <h3>「気づき」のあるワークショップ</h3>
            <img src='/img/service/icon_lite.png' alt='' />
            <p>
              時代は、「研修」から「ワークショップ」へ、「学び」から「気づき」へ、「インプット」から「アウトプット」へと変わってきています。「講師」の役割も、「先生」から「ファシリテーター」へと変わってきています。IK!IK!では時代の変化に対応し、
              <strong>高いファシリテーション力</strong>
              を有した講師やコーチが、受講者のアウトプットと
              <strong>気づき</strong>
              を引き出します。
            </p>
          </li>
          <li css={serviceFlowItem}>
            <span>
              <img src='/img/service/icon_run_w.png' alt='' />
              行動
            </span>
            <h3>「挑戦行動」を支援するしくみ</h3>
            <img src='/img/service/icon_run.png' alt='' />
            <p>
              行動を変えること、今までやってこなかったことをやり始めることはエネルギーを要します。だからこそ、受講者の
              <strong>「挑戦行動」</strong>
              を後押しするしくみは、成果への第一歩です。ホスピタリティ溢れた
              <strong>「IK!IK!サポーター」</strong>、<strong>行動習慣化アプリ「５自」</strong>
              が一人ひとりの行動を力強くサポートします。
            </p>
          </li>
          <li css={serviceFlowItem}>
            <span>
              <img src='/img/service/icon_male_w.png' alt='' />
              継続
            </span>
            <h3>
              「行動継続」を
              <br css={onlySp} />
              マンネリ化させない仕掛け
            </h3>
            <img src='/img/service/icon_male.png' alt='' />
            <p>
              定期的な
              <strong>「振り返りワークショップ」</strong>
              や、効果測定とフィードバックにより成長実感を得てもらうことで、
              <strong>行動継続への動機づけ</strong>
              を促します。
            </p>
          </li>
          <li css={serviceFlowItem}>
            <span>
              <img src='/img/service/icon_leaf_w.png' alt='' />
              成果
            </span>
            <h3>「成果」を見える化</h3>
            <img src='/img/service/icon_leaf.png' alt='' />
            <p>
              ゴール設定とプログラム終了後の成果を照らし合わせることで、
              <strong>定性的・定量的に効果</strong>
              を測っていきます。
            </p>
          </li>
        </ul>
      </section>
      {/* <ServiceNav title='さらに詳しく知りたい方はこちら' /> */}
      {/* <CaseSlider title='成果事例' caseArticles={caseArticles} /> */}
      <section css={serviceComment} id='comment'>
        <div css={serviceCommentInner}>
          <div css={serviceCommentHead}>
            <img src='/img/service/comment_thumbnail.png' alt='' />
            <div>
              <span>
                <small>東北大学</small>
                <p>
                  川島隆太 教授
                  <img src='/img/common/icon_leaf_yellow_blue.svg' alt='' />
                </p>
              </span>
              <p>
                自分が決めたことを
                <br css={onlySp} />
                人々のサポートを借りてでも続ける。
                <br />
                続けた結果「自分は変われる」という
                <br css={onlySp} />
                成功体験ができる。
                <br />
                今の時代に生きる人にとって、
                <br css={onlySp} />
                そこに大きな価値があります。
              </p>
            </div>
          </div>
          <p css={serviceCommentDesc}>
            「自分の力で自分は何かできるんだ」という気持ち。
            <br />
            これが人が伸びていく、前を向いて登っていくためにはどうしても必要な気持ちであり、それを育むということができていない。
            <br />
            それを優しく気づかせることができるプログラムが重要だと思います。
            <br />
            身近なところ、誰でもできるところからスタートをして、成功体験をさせてそれを継続するようにサポートする。人は生き物なので、一人で何かしようとすると、よほど意識が強く、極めて限られた人達以外のほとんどの人が脱落してしまうのです。
          </p>
          <div css={serviceCommentImg}>
            <Image src='/img/service/comment_img.png' alt='' fill sizes='100%' />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // 成果事例一覧取得
  const caseArticles = await client2.getContents({
    appUid: 'case',
    modelUid: 'article',
    query: {
      limit: 3,
    },
  })

  return {
    props: {
      caseArticles: caseArticles.items,
    },
  }
}

const serviceDesc = css`
  padding: 40px 0 100px;
  position: relative;
  ${mqPc} {
    padding: 80px 0 100px;
  }
`

const serviceDescContent = css`
  ${mqPc} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1020px;
    margin: 0 auto;
  }
`

const serviceDescImg = css`
  width: 300px;
  margin: auto;
  position: relative;
  ${mqPc} {
    width: calc(100% - 540px);
  }
  img {
    position: unset !important;
  }
`

const serviceDescTitle = css`
  text-align: center;
  line-height: 1.5;
  font-size: 22px;
  font-weight: bold;
  margin-top: 30px;
  ${mqPc} {
    font-size: 26px;
    text-align: left;
    line-height: 1.8;
  }
  rt {
    font-weight: normal;
  }
`

const serviceDescList = css`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${mqPc} {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    max-width: 1100px;
    margin: 60px auto 0;
  }
`

const serviceDescListItem = css`
  ${mqPc} {
    width: calc(100% / 3 - 80px / 3);
  }
  & > img {
    display: block;
    width: 160px;
    height: 160px;
    margin: auto;
    ${mqPc} {
      width: 200px;
      height: 200px;
    }
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px 10px;
    z-index: 10;
    margin-top: 20px;
    ${mqPc} {
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 30px;
      gap: 24px 10px;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      ${mqPc} {
        width: 100%;
        justify-content: flex-start;
      }
      img {
        width: 10px;
        margin-right: 5px;
        ${mqPc} {
          width: 16px;
        }
      }
      p {
        font-size: 14px;
        font-weight: bold;
        position: relative;
        font-style: italic;
        ${mqPc} {
          font-size: 18px;
          width: calc(100% - 21px);
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 2px;
        }
      }
    }
  }

  &:nth-of-type(1) {
    li {
      p {
        &:before {
          background: #2180ac;
        }
      }
    }
  }
  &:nth-of-type(2) {
    li {
      p {
        &:before {
          background: #ce3c5e;
        }
      }
    }
  }
  &:nth-of-type(3) {
    li {
      p {
        &:before {
          background: #7ba333;
        }
      }
    }
  }
`

const serviceDescLine01 = css`
  ${line('#2180ac', 0)};
  top: 30px;
  left: -30px;
  ${mqPc} {
    top: 300px;
    left: -50px;
  }
`

const serviceDescLine02 = css`
  ${line('#E68635', 0.5)};
  top: 150px;
  right: -100px;
  ${mqPc} {
    right: auto;
    left: -50px;
    top: 600px;
  }
`

const serviceDescLine03 = css`
  ${line('#CE3C5E', 1)};
  bottom: 30px;
  right: -30px;
  ${mqPc} {
    bottom: auto;
    top: 200px;
    right: -50px;
  }
`

const serviceDescLine04 = css`
  ${line('#7BA333', 1.5)};
  top: 480px;
  left: -100px;
  ${mqPc} {
    left: auto;
    top: 600px;
    right: -50px;
  }
`

const serviceFeature = css`
  background: #fff2f6;
  padding: 40px 24px;
  text-align: center;
  ${mqPc} {
    padding: 80px 24px;
  }
`

const serviceFeatureTitle = css`
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
  border-bottom: 2px solid ${colorPrimary};
  line-height: 1.75;
  ${mqPc} {
    font-size: 28px;
  }
`

const serviceFeatureList = css`
  margin-top: 30px;
  ${mqPc} {
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    margin: 40px auto 0;
  }
`

const serviceFeatureItem = css`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  ${mqPc} {
    width: calc(100% / 3 - 40px / 3);
    padding: 36px 20px;
  }
  &:not(:first-of-type) {
    margin-top: 20px;
    ${mqPc} {
      margin-top: 0;
    }
  }
  & > img {
    position: absolute;
    width: 36px;
    left: 0;
    right: 0;
    margin: auto;
    top: -10px;
    ${mqPc} {
      width: 58px;
      top: -15px;
    }
  }
  h3 {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    strong {
      color: ${colorPrimary};
    }
  }
  & > div {
    width: 120px;
    margin: 12px auto 0;
    position: relative;
    ${mqPc} {
      width: 160px;
    }
    img {
      position: unset !important;
    }
  }
  p {
    text-align: left;
    line-height: 1.75;
    font-size: 14px;
    margin-top: 20px;
    strong {
      color: ${colorPrimary};
    }
  }
`

const serviceFlow = css`
  text-align: center;
  padding: 40px 20px;
  ${mqPc} {
    padding: 80px 20px 100px;
  }
`

const serviceFlowTitle = css`
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
  border-bottom: 2px solid ${colorPrimary};
  line-height: 1.75;
  ${mqPc} {
    font-size: 28px;
  }
`

const serviceFlowHead = css`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 30px;
  ${mqPc} {
    font-size: 28px;
  }
`

const serviceFlowImg = css`
  width: 100%;
  ${mqPc} {
    max-width: 640px;
    margin: auto;
  }
  img {
    position: unset !important;
  }
`

const serviceFlowList = css`
  margin-top: 30px;
  ${mqPc} {
    max-width: 1020px;
    margin: 40px auto 0;
  }
`

const serviceFlowItem = css`
  padding: 30px 20px;
  position: relative;
  border-radius: 12px;
  ${mqPc} {
    margin-left: 115px;
    padding: 44px 80px 40px;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -90px;
    margin: auto;
    width: 4px;
    height: 90px;
    z-index: -1;
    ${mqPc} {
      right: auto;
      left: -40px;
      height: 170px;
      bottom: -105px;
    }
  }
  &:not(:first-of-type) {
    margin-top: 90px;
    ${mqPc} {
      margin-top: 40px;
    }
  }
  &:nth-of-type(2) {
    background: #fff2e880;
    & > span {
      background: #e68635;
    }
    &:before {
      background: #e68635;
    }
    strong {
      color: #e68635;
    }
  }
  &:nth-of-type(3) {
    background: #f1f6e780;
    & > span {
      background: #7ba333;
    }
    &:before {
      background: #7ba333;
    }
    strong {
      color: #7ba333;
    }
  }
  &:nth-of-type(4) {
    background: #f1f7fa80;
    & > span {
      background: #2180ac;
    }
    &:before {
      background: #2180ac;
    }
    strong {
      color: #2180ac;
    }
  }
  &:nth-of-type(5) {
    background: #fff2f680;
    & > span {
      background: #ce3c5e;
    }
    strong {
      color: #ce3c5e;
    }
  }
  & > span {
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;
    margin: auto;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    ${mqPc} {
      right: auto;
      top: 0;
      bottom: 0;
      width: 160px;
      height: 160px;
      font-size: 22px;
      left: -115px;
    }
    img {
      width: 36px;
      margin-bottom: 5px;
      ${mqPc} {
        width: 60px;
        margin-bottom: 10px;
      }
    }
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    ${mqPc} {
      font-size: 22px;
      text-align: left;
      padding-left: 40px;
    }
  }
  & > img {
    width: 72px;
    margin-top: 12px;
    ${mqPc} {
      width: 40px;
      position: absolute;
      left: 80px;
      top: 40px;
      margin-top: 0;
    }
  }
  p {
    font-size: 14px;
    text-align: left;
    line-height: 1.75;
    margin-top: 12px;
    ${mqPc} {
      font-size: 16px;
      margin-top: 20px;
    }
  }
`

const serviceFlowItemLast = css`
  /* margin-top: 30px; */
  position: relative;
  ${mqPc} {
    margin-top: 60px;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -90px;
    margin: auto;
    width: 4px;
    height: 90px;
    z-index: -1;
    background: #ce3c5e;
    ${mqPc} {
      right: auto;
      left: 77px;
      height: 170px;
      bottom: -105px;
    }
  }
  strong {
    color: #ce3c5e;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ce3c5e;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border-radius: 12px 12px 0px 0px;
    height: 68px;
    ${mqPc} {
      height: 100px;
      font-size: 22px;
    }
    img {
      width: 36px;
      margin-right: 10px;
      ${mqPc} {
        width: 60px;
        margin-right: 20px;
      }
    }
  }
  p {
    background: #fff2f6;
    padding: 30px 20px;
    text-align: left;
    font-size: 14px;
    line-height: 1.75;
    border-radius: 0px 0px 12px 12px;
    ${mqPc} {
      padding: 40px;
      font-size: 16px;
    }
  }
`

const serviceComment = css`
  background: #f1f7fa;
  padding: 40px 0;
  ${mqPc} {
    padding: 60px 0;
  }
`

const serviceCommentInner = css`
  padding: 0 20px;
  ${mqPc} {
    max-width: 1020px;
    margin: 0 auto;
  }
`

const serviceCommentHead = css`
  position: relative;
  ${mqPc} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 135px;
    ${mqPc} {
      position: relative;
      width: 260px;
    }
  }
  & > div {
    ${mqPc} {
      width: calc(100% - 340px);
    }
    & > span {
      display: block;
      margin-left: 150px;
      padding-top: 70px;
      ${mqPc} {
        padding: 0;
        margin: 0;
      }
      small {
        font-size: 14px;
        ${mqPc} {
          font-size: 16px;
        }
      }
      p {
        display: flex;
        align-items: center;
        font-size: 22px;
        font-weight: bold;
        margin-top: 8px;
        ${mqPc} {
          font-size: 28px;
        }
        img {
          width: 36px;
          margin-left: 3px;
          ${mqPc} {
            width: 58px;
            margin-left: 5px;
          }
        }
      }
    }
    & > p {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.75;
      margin-top: 50px;
      ${mqPc} {
        font-size: 22px;
        margin-top: 30px;
      }
    }
  }
`

const serviceCommentDesc = css`
  font-size: 14px;
  text-align: left;
  line-height: 1.75;
  margin-top: 40px;
  ${mqPc} {
    max-width: 840px;
    margin: 40px auto 0;
    font-size: 16px;
  }
`

const serviceCommentImg = css`
  margin-top: 40px;
  ${mqPc} {
    margin-top: 60px;
  }
  img {
    position: unset !important;
  }
`

export default ServicePage
