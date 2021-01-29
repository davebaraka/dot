import React from "react"
import styled from "styled-components"
import profileImg from "../../../assets/img/profile-circle.png"
import SocialComponent from "../../../components/SocialComponent"
import { Theme } from "../../../theme/Theme"

const FooterComponent = () => {
  return (
    <Footer>
      <ProfileContainer>
        <ProfileImg />
        <ProfileDescription>
          <ProfileItem>David Baraka</ProfileItem>
          <ProfileSubItem>Designer & Developer</ProfileSubItem>
          <ProfileSubItem>Built with React - TypeScript and Styled Components</ProfileSubItem>
        </ProfileDescription>
      </ProfileContainer>
      <SocialComponent />
    </Footer>
  )
}

export default FooterComponent

const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.theme.layout.desktop.spacingLarge};
  @media ${(props) => props.theme.layout.mobile.media} {
    padding-top: ${(props) => props.theme.layout.mobile.spacingLarge};
  }
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const ProfileImg = styled.div`
  background-image: url(${profileImg});
  border-radius: 50%;
  min-width: 64px;
  min-height: 64px;
  max-width: 64px;
  max-height: 64px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`

const ProfileItem = styled(Theme.Type.Body)`
  padding: 0;
  margin: 0;
  font-weight: bold;
  line-height: 100%;
`
const ProfileSubItem = styled(Theme.Type.Body)`
  padding: 0;
  margin: 0;
  line-height: 100%;
`
