import React, { useState, createContext } from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert'

interface HacktoberFestAlertProps extends AlertProps {
    message?: string
}

export const SnackbarContext = createContext({showSnackBar: (severity: Color, message: string) => {}});

const Alert = (props: HacktoberFestAlertProps) => <MuiAlert elevation={6} variant="filled" {...props}> {props.message} </MuiAlert>

const HacktoberfestSnackbar = (props:any) => {
    const [alert, setAlert] = useState<HacktoberFestAlertProps>()
    const closeSnackbar = () => setAlert(undefined)
    const showSnackBar = (severity: Color, message: string) => setAlert({severity, message})

    return (
            <SnackbarContext.Provider value={{showSnackBar}}>
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    autoHideDuration={5000}
                    onClose={closeSnackbar}
                    open={alert ? true : false}>
                        <Alert severity={alert?.severity} message={alert?.message}/>
                </Snackbar>
                {props.children}
            </SnackbarContext.Provider>
        )
}

export default HacktoberfestSnackbar