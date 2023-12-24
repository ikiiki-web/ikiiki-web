import { css } from '@emotion/react'
import { GetStaticProps } from 'next'
import React from 'react'
import { Link as Scroll } from 'react-scroll'
import HeadMeta from '@app/components/atoms/HeadMeta'
import PageContent from '@app/components/blocks/PageContent'
import PageHead from '@app/components/blocks/PageHead'
import PartnerList from '@app/components/contents/partner/PartnerList'
import { PageLayout } from '@app/components/layouts/PageLayout'
import { client } from '@app/libs/client'
import { colorPrimary, hover, mqPc, onlyPc, onlySp } from '@app/styles/variables'
import { Category, PartnerArticle } from '@app/types/newt'

type Props = {
  partnerExecutiveArticles: PartnerArticle[]
  partnerProjectLeaderArticles: PartnerArticle[]
  partnerTeacherArticles: PartnerArticle[]
  partnerSupporterArticles: PartnerArticle[]
}

const PartnerPage: React.FC<Props> = ({
  partnerExecutiveArticles,
  partnerProjectLeaderArticles,
  partnerTeacherArticles,
  partnerSupporterArticles,
}) => {
  return (
    <PageLayout>
      <HeadMeta title='パートナー紹介｜株式会社IK!IK!（イキイキ）｜人財開発・組織開発支援のコンサルティングファーム' />
      <PageHead title='パートナー紹介' breadcrumb={[{ name: 'パートナー紹介' }]} />
      <PageContent>
        <section css={partnerIntro}>
          <h2>
            <ruby data-ruby='イキイキ'>IK!IK!</ruby>
            は、
            <br css={onlySp} />
            <strong>顧客視点を持ったパートナー</strong>
            と、
            <br />
            <strong>成果</strong>
            に向けて
            <br css={onlySp} />
            フォローするしくみがあります。
          </h2>
          <ul>
            <li>
              <Scroll to='project-leader' smooth={true} duration={600}>
                <img src='/img/partner/icon01.svg' alt='' />
                <p>
                  プロジェクト
                  <br css={onlyPc} />
                  リーダー
                </p>
                <img src='/img/common/arw-w.svg' alt='' />
              </Scroll>
            </li>
            <li>
              <Scroll to='teacher' smooth={true} duration={600}>
                <img src='/img/partner/icon02.svg' alt='' />
                <p>
                  ファシリテーター
                  <br css={onlyPc} />
                  （講師）
                </p>
                <img src='/img/common/arw-w.svg' alt='' />
              </Scroll>
            </li>
            <li>
              <Scroll to='supporter' smooth={true} duration={600}>
                <img src='/img/partner/icon03.svg' alt='' />
                <p>サポーター</p>
                <img src='/img/common/arw-w.svg' alt='' />
              </Scroll>
            </li>
          </ul>
        </section>
        <section css={partnerBox} id='executive'>
          <h2
            css={partnerBoxTitle}
            style={{ background: '#FFF2E8', borderLeft: '3px solid #E68635' }}
          >
            エグゼクティブパートナー
          </h2>
          <p css={partnerBoxText}>
            エグゼクティブパートナーとは、当社に関わっているパートナーの中でも、
            <br />
            特に、人財・組織開発に関する専門的な知見と経験知を有した方々です。
          </p>
          <PartnerList
            partnerArticles={partnerExecutiveArticles}
            color='#E68635'
            name='エグゼクティブパートナー'
          />
        </section>
        <section css={partnerBox} id='project-leader'>
          <h2
            css={partnerBoxTitle}
            style={{ background: '#FFF2F6', borderLeft: '3px solid #CE3C5E' }}
          >
            プロジェクトリーダー
          </h2>
          <p css={partnerBoxText}>顧客の成果にコミットするリーダーです。</p>
          <PartnerList
            partnerArticles={partnerProjectLeaderArticles}
            color='#CE3C5E'
            name='プロジェクトリーダー'
          />
        </section>
        <section css={partnerBox} id='teacher'>
          <h2
            css={partnerBoxTitle}
            style={{ background: '#F1F7FA', borderLeft: '3px solid #2180AC' }}
          >
            ファシリテーター（講師）
          </h2>
          <p css={partnerBoxText}>
            一般的に言われるところの「講師」です。
            <br />
            IK!IK!では「ファシリテーター」という呼称にこだわっています。
          </p>
          <PartnerList
            partnerArticles={partnerTeacherArticles}
            color='#2180AC'
            name='ファシリテーター'
          />
        </section>
        <section css={partnerBox} id='supporter'>
          <h2
            css={partnerBoxTitle}
            style={{ background: '#F1F6E7', borderLeft: '3px solid #7BA333' }}
          >
            サポーター
          </h2>
          <p css={partnerBoxText}>
            定期的な1on1を通じて、顧客の行動継続→成果をサポートしていきます。
          </p>
          <PartnerList
            partnerArticles={partnerSupporterArticles}
            color='#7BA333'
            name='サポーター'
          />
        </section>
      </PageContent>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // 成果事例カテゴリー一覧取得
  const { items: categories } = await client.getContents<Category>({
    appUid: 'partner',
    modelUid: 'category',
  })

  // エグゼクティブパートナー一覧取得
  const categoryExecutiveId = categories.find((category) => category.slug === 'executive')?._id
  const partnerExecutiveArticles = await client.getContents({
    appUid: 'partner',
    modelUid: 'article',
    query: {
      category: categoryExecutiveId,
      order: ['-_sys.customOrder'],
    },
  })
  // メインパートナー一覧取得
  const categoryProjectLeaderId = categories.find(
    (category) => category.slug === 'project-leader',
  )?._id
  const partnerProjectLeaderArticles = await client.getContents({
    appUid: 'partner',
    modelUid: 'article',
    query: {
      category: categoryProjectLeaderId,
      order: ['-_sys.customOrder'],
    },
  })

  // 講師一覧取得
  const categoryTeacherId = categories.find((category) => category.slug === 'teacher')?._id
  const partnerTeacherArticles = await client.getContents({
    appUid: 'partner',
    modelUid: 'article',
    query: {
      category: categoryTeacherId,
      order: ['-_sys.customOrder'],
    },
  })

  // サポーター一覧取得
  const categorySupporterId = categories.find((category) => category.slug === 'supporter')?._id
  const partnerSupporterArticles = await client.getContents({
    appUid: 'partner',
    modelUid: 'article',
    query: {
      category: categorySupporterId,
      order: ['-_sys.customOrder'],
    },
  })

  return {
    props: {
      partnerExecutiveArticles: partnerExecutiveArticles.items,
      partnerProjectLeaderArticles: partnerProjectLeaderArticles.items,
      partnerTeacherArticles: partnerTeacherArticles.items,
      partnerSupporterArticles: partnerSupporterArticles.items,
    },
  }
}

const partnerIntro = css`
  h2 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;

    ${mqPc} {
      font-size: 28px;
    }
    strong {
      color: ${colorPrimary};
    }
    rt {
      font-weight: normal;
    }
  }
  ul {
    margin: 30px auto 0;
    max-width: 300px;
    ${mqPc} {
      margin: 60px auto 0;
      max-width: 680px;
      display: flex;
      justify-content: space-between;
    }
    li {
      ${mqPc} {
        width: calc(100% / 3 - 80px / 3);
        aspect-ratio: 1;
      }
      a {
        width: 100%;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        ${hover};
        ${mqPc} {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          flex-direction: column;
          justify-content: center;
        }
        p {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          ${mqPc} {
            order: 1;
            text-align: center;
            display: flex;
            align-items: center;
            font-size: 20px;
            height: 53px;
            line-height: 1.3;
            margin-top: 20px;
          }
        }
        img {
          &:first-of-type {
            width: 40px;
            margin-left: 10px;
            ${mqPc} {
              order: 2;
              width: 60px;
              margin-left: 0;
              margin-top: 12px;
            }
          }
          &:last-of-type {
            width: 12px;
            margin-right: 20px;
            ${mqPc} {
              order: 3;
              margin-right: 0;
              margin-top: 10px;
            }
          }
        }
      }
      &:not(:first-of-type) {
        margin-top: 16px;
        ${mqPc} {
          margin-top: 0;
        }
      }
      &:nth-of-type(1) {
        a {
          background: ${colorPrimary};
        }
      }
      &:nth-of-type(2) {
        a {
          background: #2180ac;
        }
      }
      &:nth-of-type(3) {
        a {
          background: #7ba333;
        }
      }
    }
  }
`

const partnerBox = css`
  padding-top: 60px;
  ${mqPc} {
    padding-top: 80px;
  }
`

const partnerBoxTitle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  padding: 10px 15px;
  ${mqPc} {
    font-size: 22px;
    padding: 16px 20px;
  }
`

const partnerBoxText = css`
  font-size: 14px;
  line-height: 1.75;
  margin-top: 30px;
  ${mqPc} {
    font-size: 16px;
    margin-top: 40px;
  }
`

export default PartnerPage
