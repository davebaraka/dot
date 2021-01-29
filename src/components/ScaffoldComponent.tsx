import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const ScaffoldComponent = (props: { children: React.ReactNode }) => {
  const history = useHistory()
  useEffect(() => {
    history.action === "PUSH" && window.scrollTo(0, 0)
  }, [history.action])
  return <Scaffold animate={history.action === "PUSH"}>{props.children}</Scaffold>
}

export default ScaffoldComponent

const Scaffold = styled.main<{ animate: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) => props.animate && `animation: fadeIn ease-in-out 250ms 125ms both;`}
`
