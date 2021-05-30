import React from 'react'
import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@components/menu'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('sm')]: {
            backgroundColor: "#000"
        }
    },
    container: {
        padding: 15,
    },
    logo: {
        display: 'inline-block',
        border: '3px solid white',
        padding: 30
    }
}))


const Header = () => {
    const classes = useStyles()
    return (
        <header className={classes.root}>
            <Grid container className={classes.container} direction="row" alignItems="center" justify="space-around">
                <Hidden smDown>
                    <Menu mode="desk"/>
                </Hidden>
                <Hidden mdUp>
                    <Menu mode="smart"/>
                </Hidden>
            </Grid>
        </header>
    )
}


export default Header