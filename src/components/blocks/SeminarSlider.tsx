import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from '../atoms/Slick'
import {
  seminarItemInner,
  seminarItemBox,
  seminarItemLabel,
  seminarItem,
  seminarItemImg,
  seminarItemInfo,
  seminarItemTitle,
  seminarItemLabelClose,
} from '@app/styles/component/seminar'
import { mqPc, colorPrimary } from '@app/styles/variables'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SeminarArticle } from '@app/types/newt'

type Props = {
  top?: boolean
  seminarArticles: SeminarArticle[]
}

const SeminarSlider: React.FC<Props> = ({ top, seminarArticles }) => {
  const setting = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  const SliderWrapperStyle = css`
    margin: 30px auto 0;
    .slick-slide {
      padding-bottom: 10px;
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
      top: 120px;
    }
    .slick-prev {
      left: -24px;
      ${mqPc} {
        left: -80px;
      }
    }
    .slick-next {
      right: -24px;
      ${mqPc} {
        right: -80px;
      }
    }
  `

  const SliderWrapperStyleTop = css`
    ${SliderWrapperStyle};
    ${mqPc} {
      margin-top: 100px;
    }
    .slick-prev,
    .slick-next {
      ${mqPc} {
        top: -60px;
      }
    }
    .slick-prev {
      ${mqPc} {
        left: auto;
        right: 70px;
      }
    }
    .slick-next {
      ${mqPc} {
        right: 0;
      }
    }
  `

  return (
    <ul css={[topSeminarSlider, top ? SliderWrapperStyleTop : SliderWrapperStyle]}>
      <Slider {...setting}>
        {seminarArticles.map((article) => (
          <li key={article._id}>
            <Link css={seminarItem} href={`/seminar/detail/${article.slug}`}>
              <div css={seminarItemInner}>
                <img css={seminarItemImg} src={article.thumbnail?.src} alt='' />
                <div css={seminarItemBox}>
                  {article.accepting ? (
                    <p css={seminarItemLabel}>受付中</p>
                  ) : (
                    <p css={seminarItemLabelClose}>終了</p>
                  )}
                  <p css={seminarItemTitle}>{article.title}</p>
                  <ul css={seminarItemInfo}>
                    <li>
                      <span>日時</span>
                      {article.eventDate}
                    </li>
                    <li>
                      <span>会場</span>
                      {article.place}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </Slider>
    </ul>
  )
}

const topSeminarSlider = css`
  margin-top: 40px;
  ${mqPc} {
    max-width: 840px;
  }
`

export default SeminarSlider
