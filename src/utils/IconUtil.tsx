import React from "react"
import { ReactComponent as GithubIcon } from "../assets/img/github-icon.svg"
import { ReactComponent as AppleIcon } from "../assets/img/apple-icon.svg"
import { ReactComponent as PlayStoreIcon } from "../assets/img/playstore-icon.svg"
import { ReactComponent as InfoIcon } from "../assets/img/info-icon.svg"
import { ReactComponent as NewsIcon } from "../assets/img/news-icon.svg"

export const getIcon = (icon: string): React.ReactNode => {
  switch (icon) {
    case "news-icon":
      return <NewsIcon />
    case "github-icon":
      return <GithubIcon />
    case "apple-icon":
      return <AppleIcon />
    case "playstore-icon":
      return <PlayStoreIcon />
    default:
      return <InfoIcon />
  }
}
