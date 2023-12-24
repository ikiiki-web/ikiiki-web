import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@app/components/atoms/Button'
import { fadeIn } from '@app/styles/animate'
import { colorBase, hover, mqPc } from '@app/styles/variables'
import { CaseArticle } from '@app/types/newt'
import { basicAnimation } from '@app/utils/animation'

type Props = {
  title?: string
  top?: boolean
  caseArticles: CaseArticle[]
  type?: 'company' | 'sports' | 'school'
}

const CaseSlider: React.FC<Props> = ({ title, top, caseArticles, type }) => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())

  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  }

  const SliderWrapperStyle = css`
    .slick-slide {
      & > div {
        margin: 0 10px;
        ${mqPc} {
          margin: 0 15px;
        }
      }
    }
  `
  return (
    <div css={caseSliderContainer} style={{ background: top ? '#f1f6e7' : '' }}>
      {top && (
        <>
          <p css={[topCaseEng, fadeIn(inView01)]} ref={ref01}>
            <span>C</span>
            ASE
          </p>
          <h2 css={[topCaseTitle, fadeIn(inView01)]}>成果事例</h2>
        </>
      )}
      {title && <h2 css={caseSliderTitle}>{title}</h2>}
      <ul css={[caseList, SliderWrapperStyle, fadeIn(inView02)]} ref={ref02}>
        <Slider {...setting}>
          {caseArticles.map((article) => (
            <li key={article._id}>
              <Link href={`/case/detail/${article.slug}`} css={caseItem}>
                <img css={caseItemImg} src={article.thumbnail?.src} alt='' />
                <p css={caseItemInfo}>
                  <span>{article.category.name}</span>
                  {article.company}
                </p>
                <p css={caseItemTitle}>{article.title}</p>
              </Link>
            </li>
          ))}
        </Slider>
      </ul>
      <div css={caseBtnContainer}>
        {type ? (
          <Button href={`/case/category/${type}`}>{title}の一覧</Button>
        ) : (
          <Button href='/case'>成果事例の一覧</Button>
        )}
      </div>
    </div>
  )
}

const caseSliderContainer = css`
  padding: 40px 0 60px;
  ${mqPc} {
    padding: 60px 20px 80px;
  }
`

const topCaseEng = css`
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  letter-spacing: 3px;
  text-align: center;
  ${mqPc} {
    font-size: 100px;
    letter-spacing: 5px;
  }
  span {
    color: #7ba333;
  }
`

const topCaseTitle = css`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
  ${mqPc} {
    font-size: 18px;
  }
`

const caseSliderTitle = css`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
`

const caseList = css`
  margin-top: 30px;
  ${mqPc} {
    max-width: 1120px;
    margin: 40px auto 0;
  }
`

const caseItem = css`
  ${hover};
`

const caseItemImg = css`
  width: 100%;
  aspect-ratio: 1.5;
  object-fit: cover;
`

const caseItemInfo = css`
  font-size: 14px;
  margin-top: 15px;
  color: ${colorBase};
  span {
    color: #727272;
    margin-right: 10px;
  }
`

const caseItemTitle = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 10px;
  color: ${colorBase};
`

const caseBtnContainer = css`
  width: 280px;
  margin: 40px auto 0;
  ${mqPc} {
    margin: 60px auto 0;
  }
`

export default CaseSlider
