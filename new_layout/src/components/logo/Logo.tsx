import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

export default Logo