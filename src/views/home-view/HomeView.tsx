import React from "react"
import ScaffoldComponent from "../../components/ScaffoldComponent"
import FeaturedComponent from "./components/FeaturedComponent"
import HeroComponent from "./components/HeroComponent"
import WorkComponent from "./components/WorkComponent"

const HomeView = () => {
  return (
    <ScaffoldComponent>
      <HeroComponent />
      <FeaturedComponent />
      <WorkComponent />
    </ScaffoldComponent>
  )
}

export default HomeView
