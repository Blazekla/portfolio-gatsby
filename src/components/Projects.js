import React, { useEffect, useRef } from "react"
import ContentCard from "./subcomponents/Cards"
import pageData from "../config/index"
import { Grid } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

//Import custom components
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
      // viewFactor: 1,
      viewOffset: { top: 0, right: 0, bottom: 300, left: 0 },
    }
    return sr.reveal(revealContainer.current, slideUp)
  }, [])

  //Code below to import dynamic images used for project
  function importAll(r) {
    let images = {}
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item)
    })
    return images
  }
  const imageGallery = importAll(
    require.context("./static/images", false, /\.(jpg?g|png)$/)
  )
  //end of dynamic image import

  return (
    <div ref={revealContainer}>
      <Typography align="center" variant="h4" color="secondary">
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
                  imageSource={imageGallery[src]}
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
