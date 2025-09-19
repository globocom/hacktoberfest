import React from "react"
import { makeStyles, Theme, Typography, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => {
  console.log(JSON.stringify(theme))
    return {
      fontSection: {
        fontSize: '69px',
        color: theme.palette.text.primary,
        fontWeight: 400,
        fontStyle: 'regular',
      lineHeight: '100%',
    },
    projectTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  }
})

const HeaderTitle = (props: HeaderTitleProps) => {
  const classes = useStyles()
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    >
      <Grid item className={classes.projectTitle} >
        <Typography variant="h2" component="h2" align="left" className={classes.fontSection}>
          {props.title}
        </Typography>
      </Grid>
    </Grid>
  )
}

interface HeaderTitleProps {
  title: String
}

export default HeaderTitle
