import React from "react"

//Import MaterialUI Components
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"

function Copyright() {
  const dede = useStyles()
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={dede.textStyle}
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
    width: "100%",
  },
  textStyle: {
    color: theme.palette.primary.contrastText,
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <footer id="footer" className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          className={classes.textStyle}
        >
          Live A Focused And Strenuous Life
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  )
}

export default Footer
