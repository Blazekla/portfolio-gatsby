import React, { useEffect, useRef } from "react"

//Material UI
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

//Gatsby
import { useStaticQuery, graphql } from "gatsby"

//Import custom components
import ContentCard from "./subcomponents/Cards"
import pageData from "../config/index"
import sr from "../utils/sr"

function Projects() {
  const revealContainer = useRef(null)

  useEffect(() => {
    const slideUp = {
      distance: "40px",
      origin: "bottom",
      duration: 1000,
      delay: 200,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      mobile: true,
      reset: false,
      useDelay: "always",
      viewOffset: { top: 0, right: 0, bottom: 300, left: 0 },
    }
    return sr.reveal(revealContainer.current, slideUp)
  }, [])

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
    <div ref={revealContainer}>
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
    </div>
  )
}

export default Projects
