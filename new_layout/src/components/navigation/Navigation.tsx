import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Props from '@components/index'
import Logo from '@components/logo'
import NavigationItem from './NavigationItem'

const useStyles = makeStyles(() => ({
    rightAlign: {
        textAlign: "right"
    },
    navigation: {
        display: 'inline-flex',
        listStyle: 'none'
    }
}))


const NavigationItems = (props: Props.Navigation.Menu) => {
    const classes = useStyles()
    return (
        <ul className={classes.navigation}>
            { props.items.map((def: Props.Navigation.NavigationItem) => <NavigationItem key={def.label} {...def} />) }
        </ul>
    )
}


const DeskMenu = (props: Props.Navigation.Menu) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid item md={10}>
                <Logo/>
                <NavigationItems items={props.items}/>
            </Grid>
            <Grid item lg={2}  className={classes.rightAlign}>
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

const Navigation = (props: Props.Navigation.Base) => {
    return props.mode === 'smart' ? <SmartMenu /> : <DeskMenu items={props.items}/>
}

export default Navigation
