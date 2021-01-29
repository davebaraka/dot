import React from "react"
import styled from "styled-components"
import { ReactComponent as Logo } from "../../../assets/img/logo.svg"
import SocialComponent from "../../../components/SocialComponent"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
  return (
    <Header>
      <HeaderLogo to={{pathname: "/"}}>
        <Logo />
      </HeaderLogo>
      <SocialComponent />
    </Header>
  )
}

export default HeaderComponent

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const HeaderLogo = styled(Link)`
  all: unset;
  cursor: pointer;
`
