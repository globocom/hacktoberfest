import React from "react"
import { makeStyles } from "@material-ui/core/styles"
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
  return (
    <a href="/" className={classes.logo}>
      <Image src="2023/header-raio.svg" />
    </a>
  )
}

export default Logo
