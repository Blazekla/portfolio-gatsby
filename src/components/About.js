import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkDown from "react-markdown"

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

//Import custom components
import ReusableContainer from "./ReusableSection"

const useStyle = makeStyles(theme => ({
  textStyle: {
    color: theme.palette.text.primary,
    // textAlign: "start",
    marginBottom: "4rem",
    flexBasis: "50%",
    paddingRight: "1rem",
    paddingLefth: "1rem",
  },
  secondarySection: {
    flexBasis: "50%",
    paddingRight: "1rem",
    paddingLefth: "1rem",
    backgroundColor: theme.palette.secondary.light,
  },
  listItem: {
    listStyleType: "none",
    display: "inline-block",
    border: "2px solid black",
  },
  techItem: {
    padding: "1rem",
    "& p": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

function About() {
  const classes = useStyle()

  const data = useStaticQuery(graphql`
    {
      strapiAboutSection {
        Title
        Description
        technologies {
          Name
        }
      }
    }
  `)

  return (
    <ReusableContainer id="about" title={data.strapiAboutSection.Title}>
      <Grid container>
        <ReactMarkDown
          source={data.strapiAboutSection.Description}
          className={classes.textStyle}
          renderers={{
            paragraph: props => <Typography>{props.children}</Typography>,
          }}
        />
        <div className={classes.secondarySection}></div>
      </Grid>
      <Grid container justify="space-around">
        {data.strapiAboutSection.technologies.map((tech, id) => (
          <Grid item key={id} className={classes.techItem}>
            <Typography variant="h4" component="p">
              {tech.Name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </ReusableContainer>
  )
}

export default About
