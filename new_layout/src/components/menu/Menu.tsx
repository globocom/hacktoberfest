import React from 'react'
import { Menu as MenuProps } from '@types'
import  MenuItem from './MenuItem'
import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { MenuDefinitions } from '@definitions'
import { MenuDefinition as MenuDefinitionType } from '@types'


const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        display: 'inline-block',
        border: '3px solid white',
        padding: 30
    },
    rightAlign: {
        textAlign: "right"
    }
}))

const Logo = () => {
    const classes = useStyles()
    return (
        <div className={classes.logo}> HacktoberFest Logo</div>
    )
}

const RenderItems = () => MenuDefinitions.map((def: MenuDefinitionType) => <MenuItem {...def} />)

const DeskMenu = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid item lg={10} md={9}>
                <Logo/>
                {RenderItems()}
            </Grid>
            <Grid item lg={2} md={3} className={classes.rightAlign}>
                <span><b> globo.com </b> opensource </span>
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
