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
  Typography,
} from "@material-ui/core"
import ButtonLink from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  card: {
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  cardAction: {
    justifyContent: "space-between",
  },
  cardContent: {
    textAlign: "center",
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
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
      >
        <Img fluid={props.imageSource} alt={props.alt} title={props.title} />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography color="secondary">{props.title}</Typography>
      </CardContent>

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
