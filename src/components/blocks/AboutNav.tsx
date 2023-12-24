import { css } from '@emotion/react'
import { Button } from '../atoms/Button'
import { mqPc } from '@app/styles/variables'

const AboutNav = () => {
  return (
    <section css={aboutNavContainer}>
      <h2 css={aboutNavTitle}>IK!IK!についてもっと知りたい方はこちら</h2>
      <ul css={aboutNavList}>
        {/* <li>
          <Button href='/case'>成果事例</Button>
        </li> */}
        <li>
          <Button href='/partner'>パートナー紹介</Button>
        </li>
        {/* <li>
          <Button href='/seminar'>セミナー</Button>
        </li> */}
      </ul>
    </section>
  )
}

const aboutNavContainer = css`
  padding: 40px 0;
  ${mqPc} {
    padding: 60px 0 80px;
  }
`

const aboutNavTitle = css`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  ${mqPc} {
    font-size: 28px;
  }
`

const aboutNavList = css`
  margin: 30px auto 0;
  max-width: 280px;
  ${mqPc} {
    margin: 40px auto 0;
    max-width: 900px;
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
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

export default AboutNav
