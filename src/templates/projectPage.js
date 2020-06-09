import React from "react"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"

//import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

//import custom components
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    //
  }
}))
function projectPage() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography>Title here</Typography>
        </Grid>
        {/* <ReactMarkdown/>     */}
        Content Here
      </Grid>
    </Layout>
  )
}

export default projectPage
