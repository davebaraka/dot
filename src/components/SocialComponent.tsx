import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../theme/Theme"
import { Link } from "react-router-dom"
import { ReactComponent as GithubIcon } from "../assets/img/github-icon.svg"
import { ReactComponent as LinkedinIcon } from "../assets/img/linkedin-icon.svg"
import { ReactComponent as MailIcon } from "../assets/img/mail-icon.svg"
import { ReactComponent as BulbIcon } from "../assets/img/bulb-icon.svg"

const SocialComponent = () => {
  return (
    <NavGroup>
      <Link to={{ pathname: "https://github.com/davebaraka" }} target={"_blank"}>
        <NavItem>
          <GithubIcon />
        </NavItem>
      </Link>
      <Link to={{ pathname: "https://www.linkedin.com/in/davebaraka/" }} target={"_blank"}>
        <NavItem>
          <LinkedinIcon />
        </NavItem>
      </Link>
      <a href="mailto:dbaraka@wesleyan.edu">
        <NavItem>
          <MailIcon />
        </NavItem>
      </a>
      <ThemeContext.Consumer>
        {(context) => (
          <NavItem onClick={context.toggle}>
            <BulbIcon />
          </NavItem>
        )}
      </ThemeContext.Consumer>
    </NavGroup>
  )
}

export default SocialComponent

const NavGroup = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  margin-left: -12px;
`

const NavItem = styled.li`
  display: flex;
  transition: ${(props) => props.theme.motion.easeInOut};
  padding-left: 12px;
  cursor: pointer;
  path {
    fill: ${(props) => props.theme.colors.label};
  }
  :hover {
    transform: scale(1.25);
  }
`
