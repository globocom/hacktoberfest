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
    backgroundColor: "#1d3a73",
    fontFamily: "Globotipo Variable",
    border: "3px solid #02BBFF",
    color:"white",
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: "0px",
  },
}))
const LoadingButton = (props: LoadingButtonProps) => {
    const classes = useStyles()

    return (
        <div style={{backgroundColor:"#0031CC", paddingBottom: 3}}>
            <Button className={classes.button} disabled={props.isLoading} type="submit" variant="contained" size="large">
                {props.isLoading ? "Processando..." : props.children}
                {props.isLoading && <CircularProgress size="1.1rem" color="inherit"/> }
            </Button>
        </div>
    )
}

export default LoadingButton
