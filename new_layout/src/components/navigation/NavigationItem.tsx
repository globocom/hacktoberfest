import React from 'react'
import Props from '@components/index'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    item: {
        padding: 15,
        //border:  '1px solid white',
        cursor: 'pointer',
        margin: '0 10px'
    },
}))

const MenuItem = (props: Props.Navigation.NavigationItem) => {
    const classes = useStyles()
    return(
        <span className={classes.item}> {props.label} </span>
    )
}
export default MenuItem