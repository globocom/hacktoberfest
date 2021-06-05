import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';

interface NavigationItemProps {
    label: string
    link: string
}

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

const MenuItem = (props: NavigationItemProps) => {
    const classes = useStyles()
    return(
      <li className={classes.item}>
            <a href={props.link}><span> {props.label} </span></a>  
      </li>
    )
}
export default MenuItem