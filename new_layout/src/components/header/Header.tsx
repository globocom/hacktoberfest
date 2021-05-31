import React from 'react'
import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Navigation from '@components/navigation'

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

export const MenuItems = [
    {label: 'Projetos', link: '/projects'},
    {label: 'Regras e Princípios', link: '/rulebook'},
    {label: 'Participantes', link: '/participants'},
    {label: 'Minha Área', link: '/personalArea'},
]


const Header = () => {
    const classes = useStyles()
    return (
        <header className={classes.root}>
            <Grid container className={classes.container} direction="row" alignItems="center" justify="space-around">
                <Hidden smDown>
                    <Navigation mode="desk" items={MenuItems}/>
                </Hidden>
                <Hidden mdUp>
                    <Navigation mode="smart" items={MenuItems}/>
                </Hidden>
            </Grid>
        </header>
    )
}


export default Header