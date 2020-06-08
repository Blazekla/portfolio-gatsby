import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import ReactMarkDown from "react-markdown"

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

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

const useStyle = makeStyles(theme => ({
  textStyle: {
    color: theme.palette.primary.contrastText,
  },
}))

function About() {
  const classes = useStyle()

  const data = useStaticQuery(graphql`
    {
      strapiAboutSection {
        Title
        Description
        RichText
        TechInfo
      }
    }
  `)

  return (
    <ReusableContainer id="about" title={data.strapiAboutSection.Title}>
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
      <ReactMarkDown source={data.strapiAboutSection.RichText} />
    </ReusableContainer>
  )
}

export default About
