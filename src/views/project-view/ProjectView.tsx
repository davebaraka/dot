import React, { useEffect, useState } from "react"
import { useRouteMatch } from "react-router-dom"
import styled from "styled-components"
import ScaffoldComponent from "../../components/ScaffoldComponent"
import { Theme } from "../../theme/Theme"
import BadgeComponent from "../../components/BadgeComponent"
import { getIcon } from "../../utils/IconUtil"
import ReactMarkdown from "react-markdown"
import OurCampusJson from "../../assets/projects/ourcampus/ourcampus.json"
import OurCampusMD from "../../assets/projects/ourcampus/ourcampus.md"
import PFPMD from "../../assets/projects/pfp/pfp.md"
import PFPJson from "../../assets/projects/pfp/pfp.json"
import IDEASJson from "../../assets/projects/ideas/ideas.json"
import IDEASMD from "../../assets/projects/ideas/ideas.md"
import SketchPluginJson from "../../assets/projects/sketchplugin/sketchplugin.json"
import SketchPluginMD from "../../assets/projects/sketchplugin/sketchplugin.md"

const ProjectView = () => {
  const params: { [key: string]: string } = useRouteMatch().params
  const project = getProject(params["projectId"])
  const isValid = project != null
  const [markdown, setMarkdown] = useState("")
  const actions = isValid ? project.json.actions.filter((action) => action.icon !== "info-icon") : []

  useEffect(() => {
    if (isValid)
      fetch(project.md)
        .then((data) => data.text())
        .then((text) => {
          setMarkdown(text)
        })
  }, [project?.md, isValid])

  return isValid ? (
    <ScaffoldComponent>
      <ScaffoldWrapper>
        <Title>{project.json.title}</Title>
        <Timeframe>{project.json.timeframe}</Timeframe>
        <Actions empty={actions.length === 0}>
          {actions.map((action, index) =>
            action.icon !== "info-icon" ? (
              <BadgeComponent
                key={index}
                link={action.link}
                icon={getIcon(action.icon)}
                text={action.text}
                textColor={project.json.textColor}
                backgroundColor={project.json.primaryColor}
              />
            ) : null
          )}
        </Actions>
        <Markdown linkTarget={"_blank"} primarycolor={project.json.primaryColor} children={markdown} />
      </ScaffoldWrapper>
    </ScaffoldComponent>
  ) : (
    <ScaffoldComponent>
      <ScaffoldWrapper />
    </ScaffoldComponent>
  )
}

export default ProjectView

const getProject = (projectId: string) => {
  type Project = { json: typeof OurCampusJson; md: string }

  const projects: { [key: string]: Project } = {
    ourcampus: {
      json: OurCampusJson,
      md: OurCampusMD,
    },
    pfp: {
      json: PFPJson,
      md: PFPMD,
    },
    ideas: {
      json: IDEASJson,
      md: IDEASMD,
    },
    sketchplugin: {
      json: SketchPluginJson,
      md: SketchPluginMD,
    },
  }
  return projects[projectId]
}

const ScaffoldWrapper = styled.div`
  max-width: 680px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`

const Title = styled(Theme.Type.Title1)`
  padding-top: ${(props) => props.theme.layout.desktop.spacingMedium};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingMedium};
  }
`

const Timeframe = styled(Theme.Type.Caption)`
  padding-bottom: ${(props) => props.theme.layout.desktop.spacingSmall};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-bottom: ${(props) => props.theme.layout.mobile.spacingSmall};
  }
`

const Actions = styled.div<{ empty: boolean }>`
  display: ${(props) => (props.empty ? "none" : "flex")};
  flex-wrap: wrap;
  padding-bottom: ${(props) => props.theme.layout.desktop.spacingSmall};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-bottom: ${(props) => props.theme.layout.mobile.spacingSmall};
  }
`

const Markdown = styled(ReactMarkdown)<{ primarycolor: string }>`
  ${Theme.Markdown}
  img {
    width: 100%;
  }
`
