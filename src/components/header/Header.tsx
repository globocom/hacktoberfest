import React from "react"
import { Theme, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Navigation from "@components/navigation"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    "& a": {
      color: theme.palette.text.primary,
      textDecoration: "none",
      [theme.breakpoints.up("md")]: {
        color: theme.palette.primary.contrastText,
      },
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
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  });
  return (
    <header className={classes.root}>
      {isDesktop ? <Navigation mode="desk" /> : <Navigation mode="smart" />}
    </header>
  )
}

export default Header
