import React from "react"

//Material UI
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

//Gatsby
import { useStaticQuery, graphql } from "gatsby"

//Import custom components
import ContentCard from "./subcomponents/Card"
import ReusableContainer from "./ReusableSection"
import pageData from "../config/index"

function Projects() {
  //Gatsby Image query//
  const data = useStaticQuery(graphql`
    query {
      homepage: file(relativePath: { eq: "homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MERN: file(relativePath: { eq: "MERN-project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pinterest: file(relativePath: { eq: "Pinterest-project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  //End of query//

  return (
    <ReusableContainer id="projects">
      <Container maxWidth="md">
        <Typography
          align="center"
          variant="h3"
          color="secondary"
          style={{ marginBottom: "50px" }}
        >
          Projects
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
          style={{
            margin: "0px auto 100px",
          }}
        >
          {pageData.project.map(
            ({ title, github, external, tech, src, alt, description }, id) => {
              return (
                <Grid
                  item
                  key={id}
                  xs={12}
                  sm={6}
                  md={6}
                  style={{ padding: "16px" }}
                >
                  <ContentCard
                    title={title}
                    code={github}
                    external={external}
                    technology={tech}
                    imageSource={data[src].childImageSharp.fluid}
                    alt={alt}
                    desc={description}
                  />
                </Grid>
              )
            }
          )}
        </Grid>
      </Container>
    </ReusableContainer>
  )
}

export default Projects
