import React from "react"
import PropTypes from "prop-types"

// Import MaterialUI components
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

//Import custom components
import Header from "./Header"
import Footer from "./Footer"
import theme from "../styles/theme"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#333",
    display: "flex",
    flexDirection: "column",
  },
  innerContainer: {
    minHeight: "100vh",
  },
}))

let theming = createMuiTheme(theme)
theming = responsiveFontSizes(theming)

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={theming}>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <Container maxWidth="lg" className={classes.innerContainer}>
            <main>{children}</main>
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
