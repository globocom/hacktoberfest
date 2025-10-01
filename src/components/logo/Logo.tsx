import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Theme, useMediaQuery } from "@material-ui/core"
import { Image } from "@components/image"

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      justifyContent: "flex-start",
    },
  },
}))

const Logo = () => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  })
  return null
  // <a href="/" className={classes.logo}>
  //   {isDesktop ? (
  //     <Image src="2023/header-raio.svg" />
  //   ) : (
  //     <span>Hacktoberfest Globo</span>
  //   )}
  //   </a>
  // )
}

export default Logo
