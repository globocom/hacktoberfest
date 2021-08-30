import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Image } from '@components/image'

const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}))

const Logo = () => {
  const classes = useStyles()
  return <a href="/" className={classes.logo}>
    <Image src="header-icon.svg"/>
   </a>
}

export default Logo
