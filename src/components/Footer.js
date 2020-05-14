import React from "react"

//Import MaterialUI Components
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { makeStyles, useTheme } from "@material-ui/core/styles"

function Copyright() {
  const theme = useTheme()
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: theme.palette.primary.contrastText }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Blazekla/">
        Luis Cristo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#020c1b",
    padding: theme.spacing(6),
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
}))

function Footer() {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <React.Fragment>
      <footer id="footer" className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          style={{ color: theme.palette.primary.contrastText }}
        >
          Live A Focused And Strenuous Life
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  )
}

export default Footer
