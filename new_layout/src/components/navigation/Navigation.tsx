import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Props from './navigation'
import Logo from '@components/logo'
import NavigationItem from './NavigationItem'

const MenuItems: Array<Props.NavigationItem> = [
    {label: 'Projetos', link: '/projects'},
    {label: 'Regras e Princípios', link: '/rulebook'},
    {label: 'Participantes', link: '/participants'},
    {label: 'Minha Área', link: '/personalArea'},
]

const useStyles = makeStyles(() => ({
    container:{
        padding: 15
    },
    navigation: {
        display: 'inline-flex',
        listStyle: 'none'
    }
}))


const NavigationItems = (props: Props.NavigationItems) => {
    const classes = useStyles()
    return (
        <ul className={classes.navigation}>
            { props.items.map((def: Props.NavigationItem) => <NavigationItem key={def.label} {...def} />) }
        </ul>
    )
}

const DeskMenu = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container} direction="row" justify="space-between" alignItems="center">
            <Grid item md={10}>
                <Logo/>
                <NavigationItems items={MenuItems}/>
            </Grid>
            <Grid item md={2}>
                <Typography variant="subtitle1">
                    <b> globo.com </b> opensource 
                </Typography>
            </Grid>
        </Grid>
    )
}

const SmartMenu = () => {
    return (
        <h1> Showing Mobile </h1>
    )
}

const Navigation = (props: Props.Navigation) => {
    return props.mode === 'smart' ? <SmartMenu /> : <DeskMenu/>
}

export default Navigation
