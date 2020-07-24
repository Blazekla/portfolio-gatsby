import React from "react"

//Import MaterialUI Components
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"

//Import customer components
import SocialMedia from "./subcomponents/SocialMedia"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="textSecondary" href="https://github.com/Blazekla/">
        Luis Cristo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(6),
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  socialMedia: {
    marginBottom: "1rem",
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <footer id="footer" className={classes.footer}>
        <SocialMedia className={classes.socialMedia} />
        <Typography
          variant="subtitle1"
          align="center"
          color="textPrimary"
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
