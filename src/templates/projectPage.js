import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { CSSTransition } from "react-transition-group"
import Img from "gatsby-image"

//import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

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
    paddingBottom: "5rem"
  },
  title: {
    textAlign: "center",
    paddingBottom: "5rem"
  },
  reactMarkdown: {
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      // marginBottom: "1rem"
    }
  },
  headingTypography: {
    marginBottom: "4rem",
    marginTop: "4rem",
    textAlign: "center"
  },
  listItem: {
    listStyleType: "none"
  },
  gridMainImage: {
    width: "inherit"
  }
}))
function ProjectPage({ data }) {
  const classes = useStyles()
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
          exitActive: ""
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
                alt="test image"
                title="test image title"
              />
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
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </CSSTransition>
    </Layout>
  )
}

export default ProjectPage
