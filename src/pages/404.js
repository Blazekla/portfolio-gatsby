import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//Import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Grid
      container
      direction="column"
      style={{
        paddingTop: "70px",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "600px",
      }}
    >
      <Grid item>
        <h1>NOT FOUND</h1>
      </Grid>
      <Grid item>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Grid>
      <Grid item>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
      </Grid>
    </Grid>
  </Layout>
)

export default NotFoundPage
