import React from 'react'
import Props from '@components/index'
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        padding: 15,
        cursor: 'pointer',
        margin: '0 10px',
        '& a': {
            color: theme.palette.primary.contrastText,
            textDecoration: 'none'
        }
    },
}))

const MenuItem = (props: Props.Navigation.NavigationItem) => {
    const classes = useStyles()
    return(
      <li className={classes.item}>
            <a href={props.link}><span> {props.label} </span></a>  
      </li>
    )
}
export default MenuItem