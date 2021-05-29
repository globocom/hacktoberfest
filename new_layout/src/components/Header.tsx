import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 80,
        [theme.breakpoints.down('sm')]: {
            backgroundColor: "#000"
        }
    },
    container: {
        paddingLeft: 15,
        paddingRight: 15,
    }
}))


const Header = () => {
    const classes = useStyles()
    console.log('Classes:', classes)
    return (
        <header className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <h1> Header </h1>
                </Grid>
                <Grid item xs={6}>
                    <h1> Header </h1>
                </Grid>
            </Grid>
        </header>
    )
}


export default Header