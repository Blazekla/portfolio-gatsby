import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"

//Import MaterialUI Components
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  outerContainer: {
    height: "100vh",
  },
  ctaButton: {
    padding: "20px 28px",
  },
}))

function HeroUnit() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  const queryData = useStaticQuery(graphql`
    {
      allStrapiHeroSection {
        nodes {
          Greeting
          Name
          Description
        }
      }
    }
  `)

  const arrayData = Object.values(queryData.allStrapiHeroSection.nodes[0])

  const theme = useTheme()
  const classes = useStyles()
  const size = ["h6", "h1", "h5"]

  const timeoutValue = 500
  const transitionDelay = 200
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.outerContainer}
      >
        <div>
          {arrayData.map((data, id) => (
            <CSSTransition
              key={id}
              in={isMounted}
              timeout={timeoutValue + 100 * id}
              mountOnEnter
              classNames={{
                enter: "fadeup-enter",
                enterActive: "fadeup-enter-active",
                exit: "",
                exitActive: "",
              }}
            >
              <div
                style={{
                  transitionDelay: `${transitionDelay + 100 * id}ms`,
                }}
              >
                <Typography
                  variant={size[id]}
                  style={{
                    color:
                      id === 1
                        ? theme.palette.secondary.main
                        : // : theme.palette.primary.contrastText,
                          "",
                    marginBottom: id === 1 ? "2rem" : "1rem",
                  }}
                >
                  {data}
                </Typography>
              </div>
            </CSSTransition>
          ))}

          <Grid container spacing={4} justify="flex-start">
            <Grid item>
              <CSSTransition
                in={isMounted}
                timeout={timeoutValue + transitionDelay + 200}
                mountOnEnter
                classNames="fadeup"
              >
                <div
                  style={{
                    transitionDelay: `${transitionDelay + 300}ms`,
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="mailto:luiscristodev@gmail.com"
                    aria-label="send email"
                    className={classes.ctaButton}
                  >
                    <Typography>Get In Touch</Typography>
                  </Button>
                </div>
              </CSSTransition>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default HeroUnit
