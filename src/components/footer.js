import React from "react"
import Typography from "@material-ui/core/Typography"

function footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <Typography>Typography!</Typography>
    </footer>
  )
}

export default footer
