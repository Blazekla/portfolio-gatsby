import React, { useState, useEffect } from "react"

//Import MaterialUI Components
import makeStyles from "@material-ui/core/styles/makeStyles"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { CSSTransition } from "react-transition-group"

//Import custom components
import Drawer from "./subcomponents/Drawer"

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbarContainer: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",

    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1280px",
    },
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    backgroundColor: "transparent",
  },
}))

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const [isAlive, setIsAlive] = useState(false)

  const classes = useStyles()

  return (
    <React.Fragment>
      <CSSTransition
        in={isMounted}
        timeout={1000}
        mountOnEnter
        classNames="fadedown"
        onEntered={() => setIsAlive(true)}
      >
        <div>
          <AppBar position="fixed">
            <ToolBar className={classes.toolbarContainer}>
              <div>
                <CSSTransition
                  in={isAlive}
                  timeout={1500}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      display: "block",
                      transitionDelay: "500ms",
                    }}
                  >
                    <Button color="inherit" href="/" aria-label="Home Page">
                      <Typography>LC</Typography>
                    </Button>
                  </span>
                </CSSTransition>
              </div>

              <div className={classes.sectionDesktop}>
                <CSSTransition
                  in={isAlive}
                  timeout={1700}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "700ms",
                    }}
                  >
                    <IconButton
                      aria-label="Show Projects section"
                      color="inherit"
                      href="/#projects"
                    >
                      <Typography>1. Projects</Typography>
                    </IconButton>
                  </span>
                </CSSTransition>

                <CSSTransition
                  in={isAlive}
                  timeout={1800}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "800ms",
                    }}
                  >
                    <IconButton
                      aria-label="Show About section"
                      color="inherit"
                      href="/#about"
                    >
                      <Typography>2. About</Typography>
                    </IconButton>
                  </span>
                </CSSTransition>

                <CSSTransition
                  in={isAlive}
                  timeout={1900}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "900ms",
                    }}
                  >
                    <IconButton
                      aria-label="Show Contact section"
                      color="inherit"
                      href="/#contact"
                    >
                      <Typography>3. Contact</Typography>
                    </IconButton>
                  </span>
                </CSSTransition>
              </div>
              <div className={classes.sectionMobile}>
                <CSSTransition
                  in={isAlive}
                  timeout={1700}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: "700ms",
                    }}
                  >
                    <Drawer />
                  </span>
                </CSSTransition>
              </div>
            </ToolBar>
          </AppBar>
        </div>
      </CSSTransition>
    </React.Fragment>
  )
}

export default Header
