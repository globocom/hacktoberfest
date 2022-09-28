import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'


interface LoadingButtonProps {
    fullWidth?:boolean,
    children?: React.ReactNode,
    isLoading: boolean
}

const LoadingButton = (props: LoadingButtonProps) => {

    return (
        <Button style={{textTransform: "lowercase", fontWeight: 600}} fullWidth disabled={props.isLoading} type="submit" variant="contained" color="secondary" size="large">
            {props.isLoading ? "Processando..." : props.children}
            {props.isLoading && <CircularProgress size="1.1rem" color="inherit"/> }
        </Button>
    )
}

export default LoadingButton