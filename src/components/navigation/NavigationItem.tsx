import React from "react"
import { Typography } from "@material-ui/core"
import { useStyles } from "./Navigation.style";
interface NavigationItemProps {
  label: string
  link: string
}

const MenuItem = (props: NavigationItemProps) => {
  const classes = useStyles()
  return (
    <li className={classes.item}>
      <Typography component="a" variant="body1" href={props.link}>
        {" "}
        {props.label}{" "}
      </Typography>
    </li>
  )
}
export default MenuItem
