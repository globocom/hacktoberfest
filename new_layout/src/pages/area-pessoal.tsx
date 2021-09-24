import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@material-ui/core'


//Internal Components
import Layout from '@components/layout'
import { PersonalDataForm, ShippingForm, ExcludeAccountForm } from '@components/forms'
import { ParticipationHistory } from '@components/participations'
import User, { UserProps } from '@services/user'
import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert'


interface HacktoberFestAlertProps extends AlertProps {
    message?: string
}

const Alert = (props: HacktoberFestAlertProps) => <MuiAlert elevation={6} variant="filled" {...props}> {props.message} </MuiAlert>

const PersonalAreaPage = () => {
    const [alert, setAlert] = useState<HacktoberFestAlertProps>()
    const [loaded, setIsLoaded] = useState<boolean>(false)
    const [user, setUser] = useState<UserProps>()


    const closeSnackbar = () => setAlert(undefined)
    const showSnackBar = (severity: Color, message: string) => setAlert({severity, message})

    useEffect(() => {
        const fetchUser = async () => {
            const user: UserProps = await User.Service.getInstance().GetUser()
            setUser(user)
            setIsLoaded(true)
        }
        fetchUser()
    }, [])

    return (
        <Layout title="Minha Área - Globo Hacktoberfest" description="Minha Área - Globo Hacktoberfest" headerTitle="Minha área">
            <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    autoHideDuration={5000}
                    onClose={closeSnackbar}
                    open={alert ? true : false}>
                        <Alert severity={alert?.severity} message={alert?.message}/>
            </Snackbar>

            <Grid container alignItems="flex-start" alignContent="center" direction="column">
                { loaded && user?.id &&
                    <React.Fragment>
                        <Grid item xs={8} lg={4}>
                            <PersonalDataForm showSnackBar={showSnackBar} user={user}/>
                        </Grid>
                        <Grid item xs={8} lg={4}>
                            <ShippingForm showSnackBar={showSnackBar} user={user}/>
                        </Grid>
                        {/*<Grid item xs={8} lg={4}>
                            <ExcludeAccountForm/>
                           </Grid>*/}
                    </React.Fragment>
                }
            </Grid>
        </Layout>
    )
}

export default PersonalAreaPage
