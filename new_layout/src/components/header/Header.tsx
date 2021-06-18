import React from "react"
import { Grid, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Navigation from "@components/navigation"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#000",
    },
  },
  container: {
    padding: 15,
  },
  logo: {
    display: "inline-block",
    border: "3px solid white",
    padding: 30,
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <Hidden smDown>
        <Navigation mode="desk" />
      </Hidden>
      <Hidden mdUp>
        <Navigation mode="smart" />
      </Hidden>
    </header>
  )
}

export default Header
