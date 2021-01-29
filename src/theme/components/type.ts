import styled, { css } from "styled-components"

const Type = {
  Title1: styled.h1`
    font-size: 64px;
    font-weight: bold;
    line-height: 100%;
    margin: 0;
    @media ${(props) => props.theme.layout.mobile.media} {
      font-size: 32px;
    }
  `,
  Title2: styled.h1`
    font-size: 64px;
    font-weight: 300;
    line-height: 100%;
    margin: 0;
    @media ${(props) => props.theme.layout.mobile.media} {
      font-size: 32px;
    }
  `,
  Subtitle: styled.h2`
    font-size: 36px;
    font-weight: 700;
    line-height: 100%;
    margin: 0;
    @media ${(props) => props.theme.layout.mobile.media} {
      font-size: 24px;
    }
  `,
  Body: styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
  `,
  Caption: styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
  `,
}

export default Type

export const MarkdownTypography = css`
  h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 100%;
    margin: 0;
    @media ${(props) => props.theme.layout.mobile.media} {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 200%;
  }
`
