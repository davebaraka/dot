import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ThemeProvider from "../../theme/Theme"
import AboutView from "../about-view/About"
import HomeView from "../home-view/HomeView"
import ProjectView from "../project-view/ProjectView"
import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"

const AppView = () => (
  <Router>
    <ThemeProvider>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/about" exact component={AboutView} />
        <Route path="/:projectId" component={ProjectView} />
      </Switch>
      <FooterComponent />
    </ThemeProvider>
  </Router>
)

export default AppView
