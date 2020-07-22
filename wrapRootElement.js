import React from "react"

// Import MaterialUI components
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import theme from "./src/styles/theme"

let theming = createMuiTheme(theme)
theming = responsiveFontSizes(theming)

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theming}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}

export default wrapRootElement
