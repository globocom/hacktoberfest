import React from 'react'
import {MenuDefinition as MenuItemProps} from '@types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    item: {
        padding: 15,
        //border:  '1px solid white',
        cursor: 'pointer',
        margin: '0 10px'
    },
}))

const MenuItem = (props: MenuItemProps) => {
    const classes = useStyles()
    return(
        <span className={classes.item}> {props.label} </span>
    )
}
export default MenuItem