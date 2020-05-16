import React from "react"
import Typography from "@material-ui/core/Typography"

//Import MaterialUI Components
import { useTheme } from "@material-ui/core/styles"

//Import custom components
import ReusableContainer from "./ReusableSection"
// import Python from "./icons/python"
// import Apollo from "./icons/apollo"
// import Django from "./icons/django"
// import Gatsby from "./icons/gatsby"
// import GraphQL from "./icons/graphql"
// import Netlify from "./icons/netlify"
// import Node from "./icons/node"
// import Nodemon from "./icons/nodemon"
// import Now from "./icons/now"
// import Re from "./icons/react"

function About() {
  const theme = useTheme()
  const color = theme.palette.primary.contrastText
  return (
    <ReusableContainer id="about" title="About Me">
      <Typography paragraph style={{ color: color }}>
        Ever since I came across computers as a kid, I've been mesmerized by
        their potential. I've always found myself taking opportunites to learn
        more about computers by tinkering and building with them. I have decided
        to take this passion and turn it into a career.
      </Typography>
      {/* <Python />
      <Apollo />
      <Django />
      <Gatsby />
      <GraphQL />
      <Netlify />
      <Node />
      <Nodemon />
      <Now />
      <Re /> */}
      <Typography style={{ color: color }}>
        Here are some technologies I've been using:
      </Typography>

      <Typography style={{ color: color }}>
        React, ES6+, HTML, CSS, Material-UI, Redux, Axios, Netlify, Node.js,
        Express.
      </Typography>
    </ReusableContainer>
  )
}

export default About
