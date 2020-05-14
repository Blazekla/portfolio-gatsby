import React from "react"
import Typography from "@material-ui/core/Typography"

//Import custom components
import ReusableContainer from "./ReusableSection"

function About() {
  return (
    <ReusableContainer id="about">
      <Typography
        variant="h3"
        color="secondary"
        style={{ marginBottom: "50px" }}
      >
        About Me
      </Typography>
      <Typography paragraph color="inherit">
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
    </ReusableContainer>
  )
}

export default About
