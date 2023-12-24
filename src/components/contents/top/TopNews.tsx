import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ButtonMore } from '@app/components/atoms/Button'
import { dateFormat } from '@app/components/modules/dateFormat'
import { fadeIn } from '@app/styles/animate'
import { colorBase, mqPc } from '@app/styles/variables'
import { NewsArticle } from '@app/types/newt'
import { basicAnimation } from '@app/utils/animation'

type Props = {
  newsArticles: NewsArticle[]
}

const TopNews: React.FC<Props> = ({ newsArticles }) => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())

  return (
    <section css={topNewsContainer}>
      <div css={[topNewsTitle, fadeIn(inView01)]} ref={ref01}>
        <p>
          <span>N</span>EWS
        </p>
        <h2>お知らせ</h2>
      </div>
      <ul css={[topNewsList, fadeIn(inView02)]} ref={ref02}>
        {newsArticles.map((article) => (
          <li css={topNewsItem} key={article._id}>
            <Link href={`/news/detail/${article.slug}`}>
              <p css={topNewsItemDate}>{dateFormat(article.createdAt)}</p>
              <p css={topNewsItemTitle}>{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div css={topNewsBtnContainer}>
        <ButtonMore href='/news' />
      </div>
    </section>
  )
}

const topNewsContainer = css`
  padding: 40px 20px 60px;
  ${mqPc} {
    padding: 80px 20px;
    max-width: 1020px;
    margin: 0 auto;
  }
`

const topNewsTitle = css`
  display: flex;
  align-items: center;
  p {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 3px;
    font-size: 40px;
    ${mqPc} {
      font-size: 100px;
      letter-spacing: 5px;
    }
    span {
      color: #2180ac;
    }
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
    ${mqPc} {
      font-size: 18px;
      margin-left: 20px;
    }
  }
`

const topNewsList = css`
  margin-top: 30px;
  border-bottom: 1px solid #dddddd;
  ${mqPc} {
    max-width: 840px;
    margin: 40px auto 0;
  }
`

const topNewsItem = css`
  border-top: 1px solid #dddddd;
  padding: 20px 0;
  a {
    &:hover {
      p {
        &:nth-of-type(2) {
          color: #2180ac;
          text-decoration-color: rgba(33, 128, 172, 1);
        }
      }
    }
  }
`

const topNewsItemDate = css`
  font-size: 13px;
  color: #727272;
`

const topNewsItemTitle = css`
  font-size: 14px;
  line-height: 1.8;
  color: ${colorBase};
  margin-top: 10px;
  transition: 0.3s;
  text-decoration: underline 0.1em rgba(33, 128, 172, 0);
`

const topNewsBtnContainer = css`
  a {
    margin-left: auto;
    margin-top: 20px;
    ${mqPc} {
      margin-top: 40px;
      margin-right: 80px;
    }
  }
`

export default TopNews
