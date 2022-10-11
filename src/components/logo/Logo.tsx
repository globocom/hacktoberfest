import React from "react"
import { Image } from '@components/image'
import { useStyles } from "./Logo.style";

const Logo = () => {
  const classes = useStyles()
  return <a href="/" className={classes.logo}>
    <Image src="header-icon.svg"/>
   </a>
}

export default Logo
