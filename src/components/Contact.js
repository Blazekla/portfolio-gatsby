import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//import MaterialUI Components
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

//Import custom components
import ReusableContainer from "./ReusableSection"

const useStyles = makeStyles(theme => ({
  textStyle: {
    marginTop: "20px",
  },
  ctaButton: {
    padding: "20px 28px",
    marginTop: "30px",
  },
}))

function Contact() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      strapiContactSection {
        Title
        Description
      }
    }
  `)

  return (
    <ReusableContainer id="contact" title={data.strapiContactSection.Title}>
      <Typography paragraph color="textPrimary" className={classes.textStyle}>
        {data.strapiContactSection.Description}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="mailto:luiscristodev@gmail.com"
        className={classes.ctaButton}
        aria-label="Send Email"
      >
        <Typography>Let's work together</Typography>
      </Button>
    </ReusableContainer>
  )
}

export default Contact
