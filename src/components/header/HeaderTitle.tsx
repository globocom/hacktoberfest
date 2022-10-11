import React from "react"
import { Typography } from "@material-ui/core"
import { useStyles } from "./Header.style";

const HeaderTitle = (props: HeaderTitleProps) => {
    const classes = useStyles()

    return (
        <div className={classes.headerTitleRoot}>
            <Typography variant="h1" align="center" className={classes.colored}>
                {props.title}
            </Typography>
            <div className={classes.divisor}> </div>
        </div>
    )

}

interface HeaderTitleProps{
    title: String
}

export default HeaderTitle