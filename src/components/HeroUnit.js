import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

//Import MaterialUI Components
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { useTheme } from "@material-ui/core/styles"

//Import custom components
import pageData from "../config/index"
import "../styles/projects.css"

function HeroUnit() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3000)
    return () => clearTimeout(timeout)
  }, [])

  const theme = useTheme()

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        style={{
          minHeight: "100vh",
        }}
      >
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
          <Typography
            variant="h6"
            style={{
              transitionDelay: "200ms",
              color: theme.palette.primary.contrastText,
              marginBottom: "20px",
            }}
          >
            {pageData.hero.title}
          </Typography>
        </CSSTransition>

        <CSSTransition
          in={isMounted}
          timeout={600}
          mountOnEnter
          classNames="fadeup"
        >
          <Typography
            variant="h1"
            color="secondary"
            style={{
              transitionDelay: "300ms",
              marginBottom: "10px",
            }}
          >
            {pageData.hero.name}
          </Typography>
        </CSSTransition>

        <CSSTransition
          in={isMounted}
          timeout={700}
          mountOnEnter
          classNames="fadeup"
        >
          <Typography
            variant="h5"
            style={{
              color: theme.palette.primary.contrastText,
              transitionDelay: "400ms",
              marginTop: "25px",
            }}
          >
            {pageData.hero.description}
          </Typography>
        </CSSTransition>
        <Grid
          container
          spacing={4}
          justify="flex-start"
          style={{ marginTop: "20px" }}
        >
          <Grid item>
            <CSSTransition
              in={isMounted}
              timeout={900}
              mountOnEnter
              classNames="fadeup"
            >
              <div
                style={{
                  transitionDelay: "600ms",
                  marginTop: "30px",
                }}
              >
                {/* div element necessary to apply transition since Button component
                has existing transition that conflicts */}
                <Button
                  variant="contained"
                  color="primary"
                  href="mailto:luiscristodev@gmail.com"
                  aria-label="send email"
                  style={{ padding: "20px 28px" }}
                >
                  Get In Touch
                </Button>
              </div>
            </CSSTransition>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default HeroUnit
