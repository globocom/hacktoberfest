import React from "react"
import Hidden from "@material-ui/core/Hidden"
import Navigation from "@components/navigation"
import { useStyles } from "./Header.style";

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.headerRoot}>
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
