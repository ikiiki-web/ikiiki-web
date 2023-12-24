import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import { Button } from '@app/components/atoms/Button'
import { PrevArrow, NextArrow } from '@app/components/atoms/Slick'
import { dateFormat } from '@app/components/modules/dateFormat'
import { fadeIn } from '@app/styles/animate'
import { colorBase, colorPrimary, hover, mqPc, onlySp } from '@app/styles/variables'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MediaArticle } from '@app/types/newt'
import { basicAnimation } from '@app/utils/animation'

type Props = {
  mediaArticles: MediaArticle[]
}

const TopMedia: React.FC<Props> = ({ mediaArticles }) => {
  const [ref01, inView01] = useInView(basicAnimation())
  const [ref02, inView02] = useInView(basicAnimation())

  const setting = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '250px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 835,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1,
        },
      },
    ],
  }

  const SliderWrapperStyle = css`
    .slick-slide {
      padding-bottom: 20px;
      & > div {
        margin: 0 10px;
        ${mqPc} {
          margin: 0 15px;
        }
      }
    }
    .slick-dots li {
      margin: 0;
      ${mqPc} {
        margin: 0 5px;
      }
    }
    .slick-dots li button:before {
      ${mqPc} {
        font-size: 16px;
      }
    }
    .slick-dots li.slick-active button:before {
      color: ${colorPrimary};
    }
    .slick-prev,
    .slick-next {
      top: 90px;
      ${mqPc} {
        top: -60px;
      }
    }
    .slick-prev {
      left: 25px;
      ${mqPc} {
        left: auto;
        right: calc(11.5vw + 70px);
      }
    }
    .slick-next {
      right: 25px;
      ${mqPc} {
        right: 11.5vw;
      }
    }
  `

  return (
    <section css={topMediaContainer}>
      <div css={[topMediaTitle, fadeIn(inView01)]} ref={ref01}>
        <p>
          <span>M</span>
          EDIA
        </p>
        <h2>
          人が”イキイキする”ための
          <br css={onlySp} />
          組織開発のヒントを発信しています
        </h2>
      </div>
      <ul css={[topMediaList, SliderWrapperStyle, fadeIn(inView02)]} ref={ref02}>
        <Slider {...setting}>
          {mediaArticles.map((article) => (
            <li key={article._id}>
              <Link href={`/media/detail/${article.slug}`} css={topMediaItem}>
                <img css={topMediaItemImg} src={article.thumbnail?.src} alt='' />
                <p css={topMediaItemCategory}>{article.category.name}</p>
                <p css={topMediaItemTitle}>{article.title}</p>
                <p css={topMediaItemDate}>{dateFormat(article._sys.updatedAt)}</p>
              </Link>
            </li>
          ))}
        </Slider>
      </ul>
      <div css={topMediaBtnContainer}>
        <Button href='/media'>メディアTOP</Button>
      </div>
    </section>
  )
}

const topMediaContainer = css`
  padding: 60px 0;
  ${mqPc} {
    padding: 80px 0;
  }
`

const topMediaTitle = css`
  text-align: center;
  ${mqPc} {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
  }
  p {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 5px;
    font-size: 60px;
    ${mqPc} {
      font-size: 80px;
    }
    span {
      color: ${colorPrimary};
    }
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    position: relative;
    margin-top: 15px;
    display: inline-block;
    font-style: italic;
    ${mqPc} {
      font-size: 22px;
      margin-top: 0;
      margin-left: 35px;
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: -25px;
      margin: auto;
      width: 16px;
      height: 1px;
      background: ${colorBase};
    }
    &:after {
      right: -25px;
      left: auto;
    }
  }
`

const topMediaList = css`
  margin-top: 40px;
  ${mqPc} {
    margin-top: 100px;
  }
`

const topMediaItem = css`
  position: relative;
  display: block;
  ${hover};
`

const topMediaItemImg = css`
  width: 100%;
  aspect-ratio: 1.5;
  object-fit: cover;
`

const topMediaItemCategory = css`
  position: absolute;
  left: 0;
  top: 0;
  background: ${colorPrimary};
  color: #fff;
  font-size: 14px;
  padding: 8px 10px;
`

const topMediaItemTitle = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 10px;
  color: ${colorBase};
`

const topMediaItemDate = css`
  text-align: right;
  font-size: 14px;
  color: #727272;
  margin-top: 15px;
`

const topMediaBtnContainer = css`
  max-width: 280px;
  margin: 50px auto 0;
  ${mqPc} {
    margin: 80px auto 0;
  }
`

export default TopMedia
