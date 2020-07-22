import React from "react"

//Material UI
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

//Gatsby
import { useStaticQuery, graphql } from "gatsby"

//Import custom components
import ContentCard from "./subcomponents/Card"
import ReusableContainer from "./ReusableSection"

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
  outerGrid: {
    margin: "0px auto 100px",
  },
  singleProjectGrid: {
    padding: "4px",
  },
}))

function Projects() {
  //Gatsby Image & Data query//
  const data = useStaticQuery(graphql`
    query {
      projects: allStrapiProjects(
        sort: { fields: Order, order: ASC }
        filter: { Production: { eq: true } }
      ) {
        nodes {
          Order
          Title
          Github
          ExternalLink
          ImgAlt
          Description
          Tech
          MainImage {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Slug
          SEODescription
        }
      }
    }
  `)
  //End of query//

  const classes = useStyles()

  return (
    <ReusableContainer id="projects" title="Projects">
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
          className={classes.outerGrid}
        >
          {data.projects.nodes.map((project, id) => {
            return (
              <Grid
                item
                key={id}
                xs={12}
                sm={6}
                md={4}
                className={classes.singleProjectGrid}
              >
                <ContentCard
                  title={project.Title}
                  code={project.Github}
                  external={project.ExternalLink}
                  technology={project.Tech}
                  imageSource={project.MainImage.childImageSharp.fluid}
                  alt={project.ImgAlt}
                  desc={project.SEODescription}
                  link={project.Slug}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </ReusableContainer>
  )
}

export default Projects
