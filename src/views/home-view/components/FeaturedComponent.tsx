import React from "react"
import styled from "styled-components"
import { Theme } from "../../../theme/Theme"
import { getIcon } from "../../../utils/IconUtil"
import BadgeComponent from "../../../components/BadgeComponent"
import OurCampusJson from "../../../assets/projects/ourcampus/ourcampus.json"
import OurCampusLogo from "../../../assets/projects/ourcampus/logo.png"
import OurCampusImg from "../../../assets/projects/ourcampus/featured.png"
import PFPJson from "../../../assets/projects/pfp/pfp.json"
import PFPLogo from "../../../assets/projects/pfp/logo.png"
import PFPImg from "../../../assets/projects/pfp/featured.png"
import IDEASJson from "../../../assets/projects/ideas/ideas.json"
import IDEASLogo from "../../../assets/projects/ideas/logo.png"
import IDEASImg from "../../../assets/projects/ideas/featured.png"

const FeaturedComponent = () => {
  const projects = [
    {
      data: OurCampusJson,
      logo: OurCampusLogo,
      img: OurCampusImg,
    },
    {
      data: PFPJson,
      logo: PFPLogo,
      img: PFPImg,
    },
    {
      data: IDEASJson,
      logo: IDEASLogo,
      img: IDEASImg,
    },
  ]

  return (
    <Container>
      <Title>Select Work</Title>
      {projects.map((project, index) => (
        <Card key={index} color={project.data.secondaryColor}>
          <Info>
            <Logo src={project.logo} />
            <CardTitle>{project.data.title}</CardTitle>
            <Timeframe>{project.data.timeframe}</Timeframe>
            <Description>{project.data.description}</Description>
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
          </Info>
          <Img url={project.img} />
        </Card>
      ))}
    </Container>
  )
}

export default FeaturedComponent

const Container = styled.section`
  display: flex;
  flex-direction: column;
`

const Title = styled(Theme.Type.Title1)`
  padding-top: ${(props) => props.theme.layout.desktop.spacingLarge};
  margin-bottom: -${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingLarge};
    margin-bottom: -${(props) => props.theme.layout.mobile.spacingMedium};
  }
`

const Card = styled.div`
  display: flex;
  max-width: 100%;
  box-shadow: ${(props) => props.theme.effect.boxShadow};
  border-radius: ${(props) => props.theme.layout.desktop.borderRadiusLarge};
  background-color: ${(props) => props.color};
  margin-top: ${(props) => props.theme.layout.desktop.spacingMedium};
  padding: ${(props) => props.theme.layout.desktop.spacingMedium};
  max-height: 400px;
  height: 400px;
  @media ${(props) => props.theme.layout.mobile.media} {
    padding: ${(props) => props.theme.layout.mobile.spacingMedium};
    margin-top: ${(props) => props.theme.layout.mobile.spacingMedium};
    border-radius: ${(props) => props.theme.layout.mobile.borderRadiusLarge};
    flex-wrap: wrap;
    max-height: 100%;
    height: 100%;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 40%;
  @media ${(props) => props.theme.layout.mobile.media} {
    width: 100%;
  }
`

const Logo = styled.img`
  width: 64px;
  height: 64px;
`

const Img = styled.div<{ url: string }>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url});
  display: flex;
  flex-grow: 1;
  width: 60%;
  margin-left: ${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    margin-top: ${(props) => props.theme.layout.mobile.spacingMedium};
    margin-left: 0px;
    background-position: top;
    background-size: cover;
    width: 100%;
    min-height: 200px;
  }
`

const CardTitle = styled(Theme.Type.Subtitle)`
  color: black;
  padding-top: ${(props) => props.theme.layout.desktop.spacingSmall};
`

const Timeframe = styled(Theme.Type.Caption)`
  color: black;
`

const Description = styled(Theme.Type.Body)`
  color: black;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
`