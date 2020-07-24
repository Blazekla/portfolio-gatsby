import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { CSSTransition } from "react-transition-group"

//import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded"
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded"

//import custom components
import Layout from "../components/layout"
import SEO from "../components/seo"

export const data = graphql`
  query($slug: String!) {
    strapiProjects(Slug: { eq: $slug }) {
      Title
      ExternalLink
      Github
      Description
      ImgAlt
      MainImage {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Tech
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  title: {
    textAlign: "center",
    paddingBottom: "5rem",
  },
  buttonContainer: {
    marginTop: "2rem",
  },
  buttonsNavigation: {
    marginTop: "2rem",
    justifyContent: props => (props.previous ? "space-between" : "flex-end"),
  },
  liveSite: {
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  reactMarkdown: {
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headingTypography: {
    marginBottom: "4rem",
    marginTop: "4rem",
    textAlign: "center",
  },
  listItem: {
    listStyleType: "none",
  },
  gridMainImage: {
    width: "inherit",
  },
  navButtonBottom: {
    flexGrow: 1,
  },
  navButtonStyle: {
    height: "100%",
    textAlign: "center",
  },
  nextButtonItem: {
    textAlign: "end",
  },
}))
function ProjectPage({ data, pageContext }) {
  const classes = useStyles(pageContext)
  const { previous, next } = pageContext

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Layout>
      <SEO title={data.strapiProjects.Title} />
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
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.root}
          >
            <Grid item>
              <Typography variant="h2" component="h1" className={classes.title}>
                {data.strapiProjects.Title} Case Study
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={10}
              lg={10}
              className={classes.gridMainImage}
            >
              <Img
                fluid={data.strapiProjects.MainImage.childImageSharp.fluid}
                alt={data.strapiProjects.ImgAlt}
                title={data.strapiProjects.Title}
              />
            </Grid>
            <Grid
              container
              justify="space-between"
              item
              xs={12}
              sm={12}
              md={10}
              lg={10}
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  href={data.strapiProjects.ExternalLink}
                  className={classes.liveSite}
                >
                  <Typography>Live Site</Typography>
                </Button>
              </Grid>
              {data.strapiProjects.Github === "#" ||
              data.strapiProjects.Github === null ? (
                ""
              ) : (
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    href={data.strapiProjects.Github}
                  >
                    <Typography>View Code</Typography>
                  </Button>
                </Grid>
              )}
            </Grid>
            <Grid item>
              <ReactMarkdown
                source={data.strapiProjects.Description}
                className={classes.reactMarkdown}
                renderers={{
                  heading: props => (
                    <Typography
                      color="secondary"
                      variant={`h${props.level}`}
                      className={classes.headingTypography}
                    >
                      {props.children}
                    </Typography>
                  ),
                  image: props => (
                    <img
                      src={props.src}
                      alt={props.alt}
                      style={{ maxWidth: "50vw" }}
                      title={props.alt}
                    />
                  ),
                  listItem: props => {
                    return (
                      <li className={classes.listItem}>{props.children}</li>
                    )
                  },
                }}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={10}
              lg={10}
              className={classes.buttonsNavigation}
            >
              {previous && (
                <Grid item xs={6} className={classes.navButtonBottom}>
                  <Button
                    component={Link}
                    to={`/projects/${previous.Slug}`}
                    className={classes.navButtonStyle}
                    startIcon={<NavigateBeforeRoundedIcon />}
                    aria-label="previous project"
                    color="secondary"
                  >
                    <Grid container direction="column">
                      <Typography>Previous Project</Typography>
                    </Grid>
                  </Button>
                </Grid>
              )}
              {next && (
                <Grid
                  item
                  xs={6}
                  className={`${classes.navButtonBottom} ${classes.nextButtonItem}`}
                >
                  <Button
                    component={Link}
                    to={`/projects/${next.Slug}`}
                    endIcon={<NavigateNextRoundedIcon />}
                    className={classes.navButtonStyle}
                    aria-label="next project"
                  >
                    <Grid container direction="column">
                      <Typography>Next Project</Typography>
                    </Grid>
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </CSSTransition>
    </Layout>
  )
}

export default ProjectPage
