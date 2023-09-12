import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles"


interface LoadingButtonProps {
    fullWidth?:boolean,
    children?: React.ReactNode,
    isLoading: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
   button: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    borderRadius: "8px",
    textTransform: "none",
  },
}))
const LoadingButton = (props: LoadingButtonProps) => {
    const classes = useStyles()

    return (
        <Button className={classes.button} fullWidth disabled={props.isLoading} type="submit" variant="contained" size="large">
            {props.isLoading ? "Processando..." : props.children}
            {props.isLoading && <CircularProgress size="1.1rem" color="inherit"/> }
        </Button>
    )
}

export default LoadingButton
