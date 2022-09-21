import React from "react"
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
      padding: 15,
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
  const classes = useStyles()
  return (
    <li className={classes.item}>
      <a className={classes.typographyFontSize} href={props.link}> 
        {" "}
        {props.label}{" "}</a>
    </li>
  )
}
export default MenuItem
