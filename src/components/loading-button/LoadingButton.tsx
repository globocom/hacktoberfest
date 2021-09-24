import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'


interface LoadingButtonProps {
    children?: React.ReactNode,
    isLoading: boolean
}

const LoadingButton = (props: LoadingButtonProps) => {

    return (
        <Button disabled={props.isLoading} type="submit" variant="contained" color="primary" size="large">
            {props.isLoading ? "Processando..." : props.children}
            {props.isLoading && <CircularProgress size="1.1rem" color="inherit"/> }
        </Button>
    )
}

export default LoadingButton