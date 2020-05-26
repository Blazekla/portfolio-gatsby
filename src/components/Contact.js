import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

//Import custom components
import ReusableContainer from "./ReusableSection"

const useStyles = makeStyles(theme => ({
  textStyle: {
    color: theme.palette.primary.contrastText,
    marginTop: "20px",
  },
}))

function Contact() {
  const classes = useStyles()

  return (
    <ReusableContainer id="contact" title="Contact">
      <Typography paragraph className={classes.textStyle}>
        I'm excited to work with you. Looking forward to hearing from you!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="mailto:luiscristodev@gmail.com"
        style={{ padding: "20px 28px", marginTop: "30px" }}
        aria-label="Send Email"
      >
        Say Hello
      </Button>
    </ReusableContainer>
  )
}

export default Contact
