import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
import pageData from "../config/index"

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
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    backgroundColor: "transparent",

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
  },
}))

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(
      () => setIsMounted(true),
      pageData.animationValue.timeoutDelay
    )
    return () => clearTimeout(timeout)
  }, [])

  const [isAlive, setIsAlive] = useState(false)

  const navLinks = useStaticQuery(graphql`
    {
      allStrapiNavLinks {
        nodes {
          Title
          Url
        }
      }
    }
  `)

  const classes = useStyles()
  const timeoutValue = pageData.animationValue.timeoutValue
  const transDelay = pageData.animationValue.transitionDelay
  return (
    <React.Fragment>
      <CSSTransition
        in={isMounted}
        timeout={timeoutValue}
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
                  timeout={timeoutValue + transDelay}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      display: "block",
                      transitionDelay: `${transDelay}ms`,
                    }}
                  >
                    <Button color="inherit" href="/" aria-label="Home Page">
                      <Typography>LC</Typography>
                    </Button>
                  </span>
                </CSSTransition>
              </div>

              <div className={classes.sectionDesktop}>
                {navLinks.allStrapiNavLinks.nodes.map((link, id) => (
                  <CSSTransition
                    key={id}
                    in={isAlive}
                    timeout={timeoutValue + transDelay + 200 + 100 * id}
                    mountOnEnter
                    classNames="fadedown"
                  >
                    <span
                      style={{
                        transitionDelay: `${transDelay + 200 + 100 * id}ms`,
                      }}
                    >
                      <IconButton
                        aria-label={"Show " + link.Title + " Section"}
                        color="inherit"
                        href={link.Url}
                      >
                        <Typography>{link.Title}</Typography>
                      </IconButton>
                    </span>
                  </CSSTransition>
                ))}
                {/* {pageData.navLinks.map((link, id) => (
                  <CSSTransition
                    key={id}
                    in={isAlive}
                    timeout={timeoutValue + transDelay + 200 + 100 * id}
                    mountOnEnter
                    classNames="fadedown"
                  >
                    <span
                      style={{
                        transitionDelay: `${transDelay + 200 + 100 * id}ms`,
                      }}
                    >
                      <IconButton
                        aria-label={"Show " + link.name + " Section"}
                        color="inherit"
                        href={link.url}
                      >
                        <Typography>{link.name}</Typography>
                      </IconButton>
                    </span>
                  </CSSTransition>
                ))} */}
              </div>
              <div className={classes.sectionMobile}>
                <CSSTransition
                  in={isAlive}
                  timeout={timeoutValue + transDelay + 200}
                  mountOnEnter
                  classNames="fadedown"
                >
                  <span
                    style={{
                      transitionDelay: `${transDelay + 100}ms`,
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
