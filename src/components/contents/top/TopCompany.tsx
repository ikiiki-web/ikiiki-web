import { css } from '@emotion/react'
import { Button } from '@app/components/atoms/Button'
import { mqPc } from '@app/styles/variables'

const TopCompany = () => {
  return (
    <section css={topCompanyContainer}>
      <img css={topCompanyWood} src='/img/top/company_wood.svg' alt='' />
      <div css={topCompanyInner}>
        <div css={topCompanyTitle}>
          <p>
            <span>C</span>OMPANY
          </p>
          <h2>会社案内</h2>
        </div>
        <ul css={topCompanyNav}>
          <li>
            <Button href='/mission'>ミッション</Button>
          </li>
          <li>
            <Button href='/column'>社長コラム</Button>
          </li>
          <li>
            <Button href='/company'>会社概要</Button>
          </li>
        </ul>
      </div>
    </section>
  )
}

const topCompanyContainer = css`
  background: #fff2e8;
  padding: 40px 20px;
  position: relative;
  ${mqPc} {
    padding: 60px 20px 100px;
    z-index: 10;
  }
`

const topCompanyWood = css`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 80px;
  ${mqPc} {
    width: 250px;
    right: 30px;
    top: auto;
    bottom: 0;
    z-index: -1;
  }
`

const topCompanyInner = css`
  ${mqPc} {
    max-width: 1020px;
    margin: 0 auto;
  }
`

const topCompanyTitle = css`
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
      color: #e68635;
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

const topCompanyNav = css`
  margin: 40px auto 0;
  max-width: 280px;
  ${mqPc} {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
  }
  li {
    ${mqPc} {
      width: calc(100% / 3 - 60px / 3);
    }
    &:not(:first-of-type) {
      margin-top: 20px;
      ${mqPc} {
        margin-top: 0;
      }
    }
  }
`

export default TopCompany
