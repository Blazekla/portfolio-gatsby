import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// Import MaterialUI components
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

//Import custom components
import Header from "./Header"
import Footer from "./Footer"
import theme from "../styles/theme"

let theming = createMuiTheme(theme)
theming = responsiveFontSizes(theming)

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <ThemeProvider theme={theming}>
        <CssBaseline />
        <div
          style={{
            backgroundColor: "#333",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Container
            maxWidth="md"
            className="mainContent"
            style={{ minHeight: "100vh" }}
          >
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
