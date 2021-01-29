import React from "react"
import styled from "styled-components"
import { Theme } from "../../../theme/Theme"
import { ReactComponent as ArrowRight } from "../../../assets/img/arrow-right.svg"
import { Link } from "react-router-dom"

const HeroComponent = () => {
  return (
    <Container>
      <Title>Hi, I’m David 👋🏾</Title>
      <Byline>I’m a designer and developer who brings ideas to life through code.</Byline>
      <ButtonLink to={{pathname: "/about"}}>
        <Text>Get to know me</Text>
        <Icon>
          <ArrowRight />
        </Icon>
      </ButtonLink>
    </Container>
  )
}

export default HeroComponent

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.theme.layout.desktop.spacingLarge};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingMedium};
  }
`

const Title = styled(Theme.Type.Title1)`
  margin-top: auto;
  padding-top: ${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingMedium};
  }
`

const Byline = styled(Theme.Type.Title2)`
  padding-top: ${(props) => props.theme.layout.desktop.spacingMedium};
  width: 75%;
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingMedium};
    width: 100%;
  }
`

const ButtonLink = styled(Link)`
  all: unset;
  cursor: pointer;
  margin-right: 8px;
  width: fit-content;
  margin-top: 8px;
  padding-top: 6px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 0px;
  display: inline-flex;
  align-items: center;
  background: conic-gradient(from 144.46deg at 33.11% 130.91%, #00ffff 0deg, #ff008a 151.87deg, #00ffff 360deg);
  border-radius: ${(props) => props.theme.layout.desktop.borderRadiusLarge};
`

const Icon = styled.span`
  display: flex;
  padding-right: 8px;
  path {
    fill: white;
  }
`

const Text = styled(Theme.Type.Body)`
  display: flex;
  font-weight: bold;
  color: white;
  padding: 0px;
  margin: 0px;
  padding-top: 4px;
`
