import React from "react"
//Gatsby
import Img from "gatsby-image"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import {
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core"
import ButtonLink from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  card: {
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "&:hover": {
      transform: "translateY(-5px)",
      "& $title": {
        display: "none"
      },
      "& $backdrop": {
        opacity: "0.01"
      }
    }
    // paddingRight: "4px",
    // paddingLeft: "4px"
  },
  mediaSection: {
    // backgroundColor: "rgba(0,0,0,0.9)"
    position: "relative"
  },
  backdrop: {
    // opacity: "0.9"
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    backgroundColor: theme.palette.common.black,
    opacity: "0.65",
    zIndex: "1",
    transition: theme.transitions.create("opacity")
  },
  cardAction: {
    justifyContent: "space-between"
  },
  cardContent: {
    textAlign: "center",
    flexGrow: "1"
    // maxHeight: "50px"
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  projectLinkText: {
    textDecoration: "none",
    textOverflow: "ellipsis",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  title: {
    "&:hover": {
      backgroundColor: "pink"
    }
  }
}))

function ContentCard(props) {
  const classes = useStyles()
  const url = props.link
  return (
    <Card className={classes.card}>
      <CardActionArea
        disableRipple={true}
        component={Link}
        to={`/projects/${url}`}
        className={classes.mediaSection}
      >
        <span className={classes.backdrop}></span>
        <Typography
          color="secondary"
          style={{
            position: "absolute",
            top: "50%",
            zIndex: "1",
            textAlign: "center",
            width: "100%"
          }}
          className={classes.title}
        >
          {props.title}
        </Typography>
        <Img fluid={props.imageSource} alt={props.alt} title={props.title} />
      </CardActionArea>
      {/* //// */}
      <CardContent className={classes.cardContent}>
        {/* <Typography color="secondary" style={{ marginBottom: "1rem" }}>
          {props.title}
        </Typography> */}
        <Typography
          component={Link}
          to={`/projects/${url}`}
          color="textPrimary"
          className={classes.projectLinkText}
        >
          {/* See Project Case */}
          {props.desc}
          {/* {props.desc.substring(0, 50).concat("...see more")} */}
        </Typography>
      </CardContent>
      {/* //// */}
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">
          <ButtonLink
            color="textPrimary"
            href={props.code}
            target="_blank"
            className={classes.link}
            aria-label="View Code"
            rel="noopener"
          >
            View Code
          </ButtonLink>
        </Button>
        <Button size="small" color="primary">
          <ButtonLink
            color="textSecondary"
            href={props.external}
            target="_blank"
            aria-label="Live Demo"
            rel="noopener"
          >
            Live Demo
          </ButtonLink>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ContentCard
