import React from "react"
import { makeStyles, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.main,
        minHeight: 260
    },
    colored: {
        color: theme.palette.primary.contrastText
    },
    divisor: {
        width: "20%",
        marginTop: 24,
        borderBottom: `1px solid rgba(255, 255, 255, 0.18);`,
    }
  }))

const HeaderTitle = (props: HeaderTitleProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
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