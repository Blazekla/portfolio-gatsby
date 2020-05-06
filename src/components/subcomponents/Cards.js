import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import {
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core"
import Link from "@material-ui/core/Link"

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
  return (
    <Card className={classes.card}>
      <CardActionArea disableRipple={true}>
        <CardMedia
          component="img"
          alt={props.alt}
          image={props.imageSource}
          title={props.title}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography color="secondary">{props.title}</Typography>
      </CardContent>

      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">
          <Link
            color="textPrimary"
            href={props.code}
            target="_blank"
            className={classes.link}
            aria-label="View Code"
            rel="noopener"
          >
            View Code
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link
            color="textSecondary"
            href={props.external}
            target="_blank"
            aria-label="Live Demo"
            rel="noopener"
          >
            Live Demo
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ContentCard
