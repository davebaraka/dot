import React from "react"
import styled from "styled-components"
import { Theme } from "../theme/Theme"
import { Link } from "react-router-dom"

const BadgeComponent = (props: { icon: React.ReactNode; text: string; backgroundColor: string; textColor: string; link: string }) => {

  const isUrl = props.link.startsWith('http')

  return (
    <ButtonLink to={{ pathname: props.link }} target={isUrl ? "_blank" : "" } backgroundcolor={props.backgroundColor} disabled={props.link.length === 0}>
      <Icon fill={props.textColor}>{props.icon}</Icon>
      <Text textColor={props.textColor}>{props.text}</Text>
    </ButtonLink>
  )
}

export default BadgeComponent

const ButtonLink = styled(Link)<{ backgroundcolor: string, disabled:boolean }>`
  all: unset;
  cursor: pointer;
  ${(props) =>props.disabled ? "pointer-events: none; opacity: 0.35;" : null}
  margin-right: 8px;
  margin-top: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.theme.layout.desktop.borderRadiusLarge};
`

const Icon = styled.span<{ fill: string }>`
  display: flex;
  padding-right: 8px;
  path {
    fill: ${(props) => props.fill};
  }
`

const Text = styled(Theme.Type.Body)<{ textColor: string }>`
  display: flex;
  font-weight: bold;
  color: ${(props) => props.textColor};
  padding: 0px;
  margin: 0px;
  padding-top: 4px;
`
