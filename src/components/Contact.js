import React, { useEffect, useRef } from "react"
// import ScrollReveal from "scrollreveal";
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

//Import custom components
import sr from "../utils/sr"

function Contact() {
  const revealContainer = useRef(null)
  useEffect(() => {
    const slideUp = {
      distance: "30px",
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
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }
    sr.reveal(revealContainer.current, slideUp)
  }, [])

  const theme = useTheme()
  const color = theme.palette.primary.contrastText
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "inherit",
        textAlign: "center",
        marginBottom: "100px",
      }}
      ref={revealContainer}
    >
      <Typography
        style={{ marginBottom: "10px" }}
        color="secondary"
        variant="h4"
      >
        Contact
      </Typography>
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
    </div>
  )
}

export default Contact
