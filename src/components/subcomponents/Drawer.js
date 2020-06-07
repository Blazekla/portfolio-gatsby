import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
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
    textAlign: "center",
  },
  listItem: {
    justifyContent: "center",
    marginBottom: "50px",
    "&:hover": {
      textAlign: "right",
    },
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

  const navLinks = useStaticQuery(graphql`
    {
      allStrapiNavLinks {
        nodes {
          Title
          Url
        }
      }
    }
  `)

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
    >
      <List>
        {navLinks.allStrapiNavLinks.nodes.map((link, id) => (
          <ListItem
            key={id}
            classes={{ root: classes.listItem }}
            button
            component={Link}
            to={link.Url}
            aria-label={`Show ${link.Title} Section`}
          >
            <ListItemText
              classes={{ root: classes.text }}
              primary={link.Title}
            />
          </ListItem>
        ))}
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
