import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

//Import Custom Components
import sr from "../utils/sr"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "inherit",
    textAlign: "center",
    marginBottom: "100px",
    paddingTop: "5.5rem",
    minHeight: "400px",
    scrollMarginTop: "1rem"
  },
  title: {
    marginBottom: "50px"
  }
}))

function ReusableSection(props) {
  const revealContainer = useRef(null)

  useEffect(() => {
    const slideUp = {
      distance: "20px",
      origin: "bottom",
      duration: 1000,
      delay: 200,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      mobile: true,
      reset: false,
      useDelay: "always",
      viewOffset: { top: 0, right: 0, bottom: 250, left: 0 }
    }
    return sr.reveal(revealContainer.current, slideUp)
  }, [])

  const classes = useStyles()

  return (
    <div ref={revealContainer} id={props.id} className={classes.root}>
      <Typography variant="h3" color="secondary" className={classes.title}>
        {props.title}
      </Typography>
      {props.children}
    </div>
  )
}

ReusableSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ReusableSection
