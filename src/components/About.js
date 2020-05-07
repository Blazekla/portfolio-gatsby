import React, { useEffect, useRef } from "react"
import Typography from "@material-ui/core/Typography"

//Import custom components
import sr from "../utils/sr"

function About() {
  const revealContainer = useRef(null)
  useEffect(() => {
    const slideUp = {
      distance: "20px",
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
      viewOffset: { top: 0, right: 0, bottom: 250, left: 0 },
    }
    return sr.reveal(revealContainer.current, slideUp)
  }, [])

  return (
    <div
      id="about"
      style={{
        backgroundColor: "inherit",
        textAlign: "center",
        marginBottom: "100px",
        paddingTop: "70px",
      }}
      ref={revealContainer}
    >
      <Typography
        variant="h4"
        color="secondary"
        style={{ marginBottom: "20px" }}
      >
        About Me
      </Typography>
      <Typography paragraph>
        Ever since I came across computers as a kid, I've been mesmerized by
        their potential. I've always found myself taking opportunites to learn
        more about computers by tinkering and building with them. I have decided
        to take this passion and turn it into a career.
      </Typography>

      <Typography>Here are some technologies I've been using:</Typography>

      <Typography>
        React, ES6+, HTML, CSS, Material-UI, Redux, Axios, Netlify, Node.js,
        Express.
      </Typography>
    </div>
  )
}

export default About
