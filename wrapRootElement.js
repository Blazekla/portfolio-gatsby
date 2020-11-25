import React from "react"
import ThemeProvider from "./src/styles/themeProvider"

const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export default wrapRootElement
