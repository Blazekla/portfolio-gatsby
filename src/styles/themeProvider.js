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
const testtheme = {
  ...themetoggle,
  palette: { ...themetoggle.palette, type: "light" },
}
let theming = createMuiTheme(testtheme)
theming = responsiveFontSizes(theming)

const ThemeWrapper = ({ children }) => {
  // const [toggle, setToggle] = useState()

  function handleClick() {
    // if (toggle === "light") {
    //   return setToggle("dark")
    // }
    // return setToggle("light")
  }
  return (
    <ThemeProvider theme={theming}>
      {console.log(testtheme)}
      <CssBaseline />
      <button style={{ marginTop: "4rem" }} onClick={handleClick}>
        Press To Change Theme
      </button>
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
