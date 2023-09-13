import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Theme, useMediaQuery } from "@material-ui/core"
import { Image } from "@components/image"

const useStyles = makeStyles(() => ({
  logo: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}))


const Logo = () => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  });
  return (
    <a href="/" className={classes.logo}>
      {isDesktop ?
      <Image src="2023/header-raio.svg" /> :
      <span>Hacktoberfest Globo</span>}
    </a>
  )
}

export default Logo
