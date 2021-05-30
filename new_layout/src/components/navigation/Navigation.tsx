import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Props from '@components/index'
import NavigationItem from './NavigationItem'

const useStyles = makeStyles(() => ({
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
const RenderItems = (items: Array<Props.Navigation.NavigationItem>) => items.map((def: Props.Navigation.NavigationItem) => <NavigationItem {...def} />)

const DeskMenu = (props: Props.Navigation.Menu) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid item lg={10} md={9}>
                <Logo/>
                {RenderItems(props.items)}
            </Grid>
            <Grid item lg={2} md={3} className={classes.rightAlign}>
                <span><b> globo.com </b> opensource </span>
            </Grid>
        </React.Fragment>
    )
}

const SmartMenu = (props: Props.Navigation.Menu) => {
    return (
        <h1> Showing Mobile </h1>
    )
}

const Navigation = (props: Props.Navigation.Base) => {
    return props.mode === 'smart' ? <SmartMenu items={props.items}/> : <DeskMenu items={props.items}/>
}

export default Navigation
