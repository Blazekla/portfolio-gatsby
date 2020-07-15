import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkDown from "react-markdown"

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles"

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
    // color: theme.palette.primary.contrastText
    color: theme.palette.text.primary,
    textAlign: "start"
  },
  listItem: {
    listStyleType: "none"
  }
}))

function About() {
  const classes = useStyle()

  const data = useStaticQuery(graphql`
    {
      strapiAboutSection {
        Title
        Description
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
      <ReactMarkDown
        source={data.strapiAboutSection.Description}
        className={classes.textStyle}
        renderers={{
          list: props => {
            return <ul style={{ textAlign: "center" }}>{props.children}</ul>
          },
          listItem: props => {
            return <li className={classes.listItem}>{props.children}</li>
          }
        }}
      />
    </ReusableContainer>
  )
}

export default About
