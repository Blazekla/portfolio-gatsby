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
        display: "block"
      },
      "& $backdrop": {
        // opacity: "0.01",
        opacity: "0.65"
      }
    }
  },
  mediaSection: {
    position: "relative"
  },
  backdrop: {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    backgroundColor: theme.palette.common.black,
    // opacity: "0.65",
    opacity: "0.01",
    zIndex: "1",
    transition: theme.transitions.create("opacity")
  },
  cardAction: {
    justifyContent: props =>
      props.code === "#" || props.code === null ? "flex-end" : "space-between"
  },
  cardContent: {
    textAlign: "center",
    flexGrow: "1"
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  projectLinkText: {
    textDecoration: "none",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "block",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  title: {
    position: "absolute",
    display: "none",
    top: "50%",
    zIndex: "1",
    textAlign: "center",
    width: "100%",
    transform: "TranslateY(-50%)"
  }
}))

function ContentCard(props) {
  const classes = useStyles(props)
  const url = props.link
  const { imageSource } = props
  return (
    <Card className={classes.card}>
      <CardActionArea
        disableRipple={true}
        component={Link}
        to={`/projects/${url}`}
        className={classes.mediaSection}
      >
        <span className={classes.backdrop}></span>
        <Typography color="textPrimary" className={classes.title} variant="h4">
          {props.title}
        </Typography>
        <Img
          // fluid={props.imageSource}
          sizes={{ ...imageSource, aspectRatio: 16 / 9 }}
          alt={props.alt}
          title={props.title}
        />
      </CardActionArea>

      <CardContent className={classes.cardContent}>
        <Typography
          component={Link}
          to={`/projects/${url}`}
          color="textPrimary"
          className={classes.projectLinkText}
        >
          {props.desc}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardAction}>
        {props.code === "#" || props.code === null ? (
          ""
        ) : (
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
        )}
        <Button size="small" color="primary">
          <ButtonLink
            color="textSecondary"
            href={props.external}
            target="_blank"
            aria-label="Live Site"
            rel="noopener"
          >
            Live Site
          </ButtonLink>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ContentCard
