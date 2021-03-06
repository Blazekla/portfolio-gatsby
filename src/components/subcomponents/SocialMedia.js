import React from "react"

//Import MaterialUI Components
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

function SocialMedia(props) {
  return (
    <Grid container justify="center" className={props.className}>
      <IconButton
        target="_blank"
        aria-label="View Twitter Account"
        rel="noopener"
        href="https://www.linkedin.com/in/luiscristo1/"
      >
        <LinkedInIcon color="secondary" />
      </IconButton>
      <IconButton
        target="_blank"
        aria-label="View Twitter Account"
        rel="noopener"
        href="https://github.com/Blazekla"
      >
        <GitHubIcon color="secondary" />
      </IconButton>
    </Grid>
  )
}

export default SocialMedia
