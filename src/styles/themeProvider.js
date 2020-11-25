import React, { useState } from "react"

// Import MaterialUI components
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// import theme from "./theme"
import themetoggle from "./themetoggle"

const ThemeWrapper = ({ children }) => {
  const [toggle, setToggle] = useState("light")

  const lightTheme = themetoggle.light
  const darkTheme = themetoggle.dark

  function handleClick() {
    if (toggle === "light") {
      return setToggle("dark")
    }
    return setToggle("light")
  }

  const appTheme = {
    ...(toggle === "light" ? lightTheme : darkTheme),
    themeToggle: () => handleClick(),
  }

  let theming = createMuiTheme(appTheme)
  theming = responsiveFontSizes(theming)

  return (
    <ThemeProvider theme={theming}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
