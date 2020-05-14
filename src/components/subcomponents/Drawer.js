import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import WorkIcon from "@material-ui/icons/Work"
import EmailIcon from "@material-ui/icons/Email"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import MoreIcon from "@material-ui/icons/MoreVert"

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    justifyContent: "center",
  },
  text: {
    flex: "1 1 50%",
    textAlign: "left",
  },
  listItem: {
    justifyContent: "center",
    marginBottom: "50px",
    "&:hover": {
      textAlign: "right",
    },
  },
  icon: {
    flex: "1 1 50%",
    minWidth: "30px",
    justifyContent: "flex-end",
    paddingRight: "5px",
  },
}))

export default function SideDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
    >
      <List>
        <ListItem
          classes={{ root: classes.listItem }}
          button
          // component="a"

          component={Link}
          to="/#projects"
          aria-label="Show Projects Section"
          // href="#projects"
        >
          <ListItemIcon classes={{ root: classes.icon }}>
            <WorkIcon color="secondary" />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.text }} primary="Projects" />
        </ListItem>
        <ListItem
          classes={{ root: classes.listItem }}
          button
          component="a"
          href="/#about"
          aria-label="Show About Section"
          color="secondary"
        >
          <ListItemIcon classes={{ root: classes.icon }}>
            <AccountBoxIcon color="secondary" />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.text }} primary="About" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="/#contact"
          aria-label="Show Contact Section"
          classes={{ root: classes.listItem }}
        >
          <ListItemIcon classes={{ root: classes.icon }}>
            <EmailIcon color="secondary" />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.text }} primary="Contact" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Button
        onClick={toggleDrawer("right", true)}
        color="inherit"
        aria-label="Expand Menu"
      >
        <MoreIcon />
      </Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        classes={{ paper: classes.root }}
      >
        {sideList("right")}
      </Drawer>
    </div>
  )
}
