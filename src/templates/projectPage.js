import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

//import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Conatiner from "@material-ui/core/Container"

//import custom components
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"

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
          fluid(maxWidth: 500) {
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
    paddingTop: "5rem"
  },
  title: {
    textAlign: "center"
  },
  reactMarkdown: {
    color: theme.palette.primary.contrastText,
    // textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1,h2,h3,h4,h5,h6": {
      marginBottom: "2rem"
    },
    "& p": {
      // backgroundColor: "pink"
    }
  }
}))
function ProjectPage({ data }) {
  const classes = useStyles()
  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Typography variant="h1" className={classes.title}>
              {data.strapiProjects.Title} Project Case
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReactMarkdown
              source={data.strapiProjects.Description}
              className={classes.reactMarkdown}
              renderers={{
                heading: props => (
                  <Typography color="secondary" variant={`h${props.level}`}>
                    {props.children}
                  </Typography>
                ),
                image: props => (
                  // <Grid item xs={12} sm={6} md={4}>
                  <img
                    src={props.src}
                    alt={props.alt}
                    style={{ maxWidth: "50vw" }}
                    title={props.alt}
                  />
                  // </Grid>
                )
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectPage
