import React, { useEffect, useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

interface NavigationItemProps {
  label: string
  link: string
}

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    marginBottom: 28,
    [theme.breakpoints.up("md")]: {
      color: "red",
      padding: 25,
      margin: 0,
      cursor: "pointer"
    }
  },
  typographyFontSize: {
    fontSize:"1.5rem",
    fontWeight: 'bold',
    [theme.breakpoints.up("md")]: {
      fontSize:"1rem",
      fontWeight: 'normal',
      }
  }
}))

const MenuItem = (props: NavigationItemProps) => {
  const [pathName, setPathName] = useState("")

  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])

  const classes = useStyles()
  return (
    <li className={classes.item}>
      <a className={classes.typographyFontSize} href={props.link} style={{color: props.link == pathName ? "#000000" : "#FFFFFF"}}>
        {" "}
        {props.label}{" "}</a>
    </li>
  )
}
export default MenuItem
