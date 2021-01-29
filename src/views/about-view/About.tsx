import React from "react"
import ScaffoldComponent from "../../components/ScaffoldComponent"
import styled from "styled-components"
import { Theme } from "../../theme/Theme"
import PortraitImg from "../../assets/img/portrait.jpg"

const AboutView = () => {
  return (
    <ScaffoldComponent>
      <Grid>
        <Content>
          <Title>Me</Title>
          <P>
            Hey, I can’t believe you’re here 😊 I’m David, a senior at Wesleyan University studying Computer Science and
            Integrated Design Engineering and Applied Sciences. I enjoy designing and developing software that enrich
            people’s lives.
          </P>
          <P>
            Lately, I’ve had an increasing interest in 📱 mobile app design and development - exploring how to fit a
            ‘desktop breadth’ experience on a 6” screen. I’ve also been tinkering with Flutter (a cross platform
            development framework) to quickly build performant iOS and android apps, and researching scalable
            architectural design, specifically with codebases and design systems.
          </P>
          <P>
            In searching for new and creative ideas, many times I find myself coming back to old ideas — expanding,
            extracting, and discovering things you only see when you ❤️ what you do.
          </P>
          <P>
            Wow, you’re still reading... Well, when I’m not pushing pixels, I’m just a guy doing random things like
            zoning out to music, reading, working out, taking pictures, traveling, enjoying my inner foodie 🌮 🥝 🥙 🥑
            🌯 or sitting in front of a washing machine and watching a whole wash cycle - because I did that.
          </P>
          <P>Oh and I like quotes so...</P>
          <P>
            <em>“Pay attention to what users do, not what they say”</em> — Jakob Nielsen
          </P>
        </Content>
        <Img src={PortraitImg}/>
      </Grid>
    </ScaffoldComponent>
  )
}

export default AboutView

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-top: ${(props) => props.theme.layout.desktop.spacingMedium};
  column-gap: ${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingLarge};
    row-gap: ${(props) => props.theme.layout.mobile.spacingMedium};
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled(Theme.Type.Title1)``

const P = styled(Theme.Type.Body)`
  line-height: 200%;
`

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.theme.layout.desktop.borderRadiusLarge};
  margin-top: ${(props) => props.theme.layout.desktop.spacingLarge};
  box-shadow: ${(props) => props.theme.effect.boxShadow};
  @media ${(props) => props.theme.layout.mobile.media} {
    margin-top: ${(props) => props.theme.layout.mobile.spacingSmall};
    border-radius: ${(props) => props.theme.layout.mobile.borderRadiusLarge};
  }
`
