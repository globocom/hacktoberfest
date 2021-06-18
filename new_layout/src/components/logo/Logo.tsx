import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  logo: {
    border: "3px solid white",
    padding: 10,
    textAlign: "center",
    width: "100%",
  },
}))

const Logo = () => {
  const classes = useStyles()
  return <div className={classes.logo}> HacktoberFest </div>
}

export default Logo
