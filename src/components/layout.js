import React from "react"
import PropTypes from "prop-types"

// Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

//Import custom components
import Header from "./Header"
import Footer from "./Footer"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  innerContainer: {
    minHeight: "100vh",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Header />
        <Container maxWidth="lg" className={classes.innerContainer}>
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
