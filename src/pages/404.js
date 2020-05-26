import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CSSTransition } from "react-transition-group"
import "../styles/projects.css"

//Import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingTop: "70px",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "600px",
  },
  button: {
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "&:hover": {
      transform: "translateY(-3px)",
    },
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <CSSTransition
        in={isMounted}
        timeout={500}
        mountOnEnter
        classNames={{
          enter: "fadeup-enter",
          enterActive: "fadeup-enter-active",
          exit: "",
          exitActive: "",
        }}
      >
        <Grid container direction="column" className={classes.gridContainer}>
          <Grid item>
            <h1>NOT FOUND</h1>
          </Grid>
          <Grid item>
            <p>You just hit a route that doesn&#39;t exist.</p>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Go Home
            </Button>
          </Grid>
        </Grid>
      </CSSTransition>
    </Layout>
  )
}

export default NotFoundPage
