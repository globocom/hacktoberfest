import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

interface NavigationItemProps {
  label: string
  link: string
}

const useStyles = makeStyles((theme: Theme) => ({
    item: {
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      color: "red",
      padding: 15,
      cursor: "pointer"
    }
  },
}))

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
