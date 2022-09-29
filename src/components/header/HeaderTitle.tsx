import React from "react"
import { makeStyles, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: 260
    },
    colored: {
        color: theme.palette.primary.contrastText,
        lineHeight: '48px',
        fontSize: '2.25rem',
        [theme.breakpoints.up("lg")]: {
            fontSize: '3.25rem',
        }
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
        <div>
            <Typography variant="h1" align="left" className={classes.colored}>
                {props.title}
            </Typography>
        </div>
    )

}

interface HeaderTitleProps{
    title: String
}

export default HeaderTitle