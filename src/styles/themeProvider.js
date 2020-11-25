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

// let theming = createMuiTheme(theme)

const ThemeWrapper = ({ children }) => {
  const [toggle, setToggle] = useState("light")
  function handleClick() {
    if (toggle === "light") {
      return setToggle("dark")
    }
    return setToggle("light")
  }
  const testtheme = {
    ...themetoggle,
    palette: { ...themetoggle.palette, type: toggle },
    themeToggle: () => handleClick(),
  }
  let theming = createMuiTheme(testtheme)
  theming = responsiveFontSizes(theming)

  return (
    <ThemeProvider theme={theming}>
      {console.log(testtheme)}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
