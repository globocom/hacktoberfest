import React from 'react'
import { Menu as MenuProps } from '@types'
import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const MENU_ITEMS = [
    {label: 'Projetos', link: '/foo'},
    {label: 'Regras e Princípios', link: '/foo'},
    {label: 'Participantes', link: '/foo'},
    {label: 'Minha Área', link: '/foo'},
]


const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        display: 'inline-block',
        border: '3px solid white',
        padding: 30
    }
}))

const Logo = () => {
    const classes = useStyles()
    return (
        <div className={classes.logo}> HacktoberFest Logo</div>
    )
}

const DeskMenu = () => {
    return (
        <React.Fragment>
            <Grid item lg={10} md={9}>
                <Logo/>
                {MENU_ITEMS.map((menu) => <span>{menu.label}</span>)}
            </Grid>
            <Grid item lg={2} md={3}>
                <b> globo.com </b> opensource
            </Grid>
        </React.Fragment>
    )
}

const SmartMenu = () => {
    return (
        <h1> Showing Mobile </h1>
    )
}

const Menu = (props: MenuProps) => {
    return props.mode === 'smart' ? <SmartMenu/> : <DeskMenu/>
}

export default Menu
