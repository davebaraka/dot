import React from "react"
import styled from "styled-components"
import { Theme } from "../../../theme/Theme"
import { getIcon } from "../../../utils/IconUtil"
import BadgeComponent from "../../../components/BadgeComponent"
import SketchPluginLogo from "../../../assets/projects/sketchplugin/logo.png"
import SketchPluginJson from "../../../assets/projects/sketchplugin/sketchplugin.json"
import DuinoLogo from "../../../assets/projects/duino/logo.png"
import DuinoJson from "../../../assets/projects/duino/duino.json"
import ObfuscatorLogo from "../../../assets/projects/obfuscator/logo.png"
import ObfuscatorJson from "../../../assets/projects/obfuscator/obfuscator.json"
import OptMeowtLogo from "../../../assets/projects/optmeowt/logo.png"
import OptMeowtJson from "../../../assets/projects/optmeowt/optmeowt.json"
import SunlightLogo from "../../../assets/projects/sunlight/logo.png"
import SunlightJson from "../../../assets/projects/sunlight/sunlight.json"
import WebsiteV1Logo from "../../../assets/projects/websitev1/logo.png"
import WebsiteV1Json from "../../../assets/projects/websitev1/websitev1.json"

const WorkComponent = () => {
  const projects = [
    {
      data: SketchPluginJson,
      logo: SketchPluginLogo,
    },
    {
      data: DuinoJson,
      logo: DuinoLogo,
    },
    {
      data: ObfuscatorJson,
      logo: ObfuscatorLogo,
    },
    {
      data: OptMeowtJson,
      logo: OptMeowtLogo,
    },
    {
      data: SunlightJson,
      logo: SunlightLogo,
    },
    {
      data: WebsiteV1Json,
      logo: WebsiteV1Logo,
    },
  ]

  return (
    <Container>
      <Title>Other Work</Title>
      <Grid>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContainer>
              <HeaderContainer>
                <Icon src={project.logo} />
                <Date>{project.data.timeframe}</Date>
              </HeaderContainer>
              <ProjectTitle underlineColor={project.data.primaryColor}>{project.data.title}</ProjectTitle>
              <Description>{project.data.description} </Description>
            </CardContainer>
            <Actions>
              {project.data.actions.map((action, index) => (
                <BadgeComponent
                  key={index}
                  link={action.link}
                  icon={getIcon(action.icon)}
                  text={action.text}
                  textColor={project.data.textColor}
                  backgroundColor={project.data.primaryColor}
                />
              ))}
            </Actions>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default WorkComponent

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Title = styled(Theme.Type.Title1)`
  width: 100%;
  padding-top: ${(props) => props.theme.layout.desktop.spacingLarge};
  margin-bottom: -${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingLarge};
    margin-bottom: -${(props) => props.theme.layout.mobile.spacingMedium};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  column-gap: ${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    row-gap: ${(props) => props.theme.layout.mobile.spacingMedium};
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  box-sizing: border-box;
  padding: ${(props) => props.theme.layout.desktop.spacingSmall};
  box-shadow: ${(props) => props.theme.effect.boxShadow};
  border-radius: ${(props) => props.theme.layout.desktop.borderRadius};
  background-color: ${(props) => props.theme.colors.tertiaryBackground};
  margin-top: ${(props) => props.theme.layout.desktop.spacingMedium};
  flex-wrap: wrap;
  @media ${(props) => props.theme.layout.mobile.media} {
    padding: ${(props) => props.theme.layout.mobile.spacingMedium};
    margin-top: ${(props) => props.theme.layout.mobile.spacingMedium};
    border-radius: ${(props) => props.theme.layout.mobile.borderRadius};
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  height: fit-content;
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`

const Date = styled(Theme.Type.Caption)``

const Icon = styled.img`
  height: 64px;
`

const ProjectTitle = styled(Theme.Type.Subtitle)<{ underlineColor: string }>`
  margin-top: ${(props) => props.theme.layout.desktop.spacingSmall};
  border-bottom: 4px solid ${(props) => props.underlineColor};
  line-height: 0.75;
  @media ${(props) => props.theme.layout.mobile.media} {
    margin-top: ${(props) => props.theme.layout.mobile.spacingMedium};
  }
`

const Description = styled(Theme.Type.Body)`
  margin-bottom: auto;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  flex-grow: 1;
`
