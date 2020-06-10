import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

//import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

//import custom components
import Layout from "../components/layout"

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
          fluid {
            src
          }
        }
      }
      Tech
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "4rem",
  },
  textStyle: {
    color: theme.palette.primary.contrastText,
  },
}))
function ProjectPage({ data }) {
  console.log(data)
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography>{data.Title}</Typography>
        </Grid>
        <Grid item>
          <ReactMarkdown
            source={data.strapiProjects.Description}
            className={classes.textStyle}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ProjectPage
