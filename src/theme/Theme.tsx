import React, { useState } from "react"
import { createGlobalStyle, DefaultTheme, ThemeProvider as Provider } from "styled-components"
import Type, { MarkdownTypography } from "./components/type"
import colors from "./components/colors"
import layout from "./components/layout"
import motion from "./components/motion"

const ThemeContext = React.createContext({ toggle: () => {} })

const ThemeProvider = (props: { children: React.ReactNode }) => {
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      document.getElementById("root")?.setAttribute("style", "visibility: visible;")
    } else {
      document
        .getElementById("root")
        ?.setAttribute("style", "animation: fadeIn ease-in-out 250ms 125ms both; visibility: visible;")
    }
  })
  const [mode, setMode] = useState(false)
  const toggleAppearance = () => {
    setMode((mode) => !mode)
  }
  return (
    <ThemeContext.Provider value={{ toggle: toggleAppearance }}>
      <Provider theme={!mode ? lightTheme : darkTheme}>
        <GlobalTheme />
        {props.children}
      </Provider>
    </ThemeContext.Provider>
  )
}

export const Theme = {
  Type: Type,
  Markdown: MarkdownTypography,
}

export { ThemeContext }
export default ThemeProvider

const lightTheme: DefaultTheme = {
  effect: {
    boxShadow: "box-shadow: 0px 0px 32px -16px rgba(0, 0, 0, 0.15)",
  },
  motion: motion,
  layout: layout,
  colors: {
    background: colors.background.light,
    secondaryBackground: colors.secondaryBackground.light,
    tertiaryBackground: colors.tertiaryBackground.light,
    label: colors.label.light,
    secondaryLabel: colors.secondaryLabel.light,
  },
}

const darkTheme: DefaultTheme = {
  effect: {
    boxShadow: "box-shadow: 0px 0px 32px -16px rgba(0, 0, 0, 0.15)",
  },
  motion: motion,
  layout: layout,
  colors: {
    background: colors.background.dark,
    secondaryBackground: colors.secondaryBackground.dark,
    tertiaryBackground: colors.tertiaryBackground.dark,
    label: colors.label.dark,
    secondaryLabel: colors.secondaryLabel.dark,
  },
}

const GlobalTheme = createGlobalStyle`
  html, body {
    min-height:100vh;
  }

  body {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
      margin-bottom: 0;
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.label};
      max-width: 1366px;
      min-width: 320px;
      font-family: 'Tajawal', sans-serif;
      transition: ${(props) => props.theme.motion.easeInOut};
      display: flex;
  }

  #root {
    display: flex;
    visibility: hidden;
    flex-direction: column;
    width: 100%;
    padding: ${(props) => props.theme.layout.desktop.spacingMedium}
    
  }

  @media ${(props) => props.theme.layout.mobile.media} {
    #root {
      padding: ${(props) => props.theme.layout.mobile.spacingMedium};
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
