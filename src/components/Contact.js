import React from "react"
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

//Import custom components
import ReusableContainer from "./ReusableSection"

function Contact() {
  const theme = useTheme()
  const color = theme.palette.primary.contrastText
  return (
    <ReusableContainer id="contact" title="Contact">
      <Typography paragraph style={{ marginTop: "20px", color: color }}>
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
