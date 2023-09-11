import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Image } from "@components/image"

//Internal Components
import Layout from '@components/layout'
import Spacing from '@components/spacing'
import { PersonalDataForm, ShippingForm } from '@components/forms'
import User, { UserProps } from '@services/user'
import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert'
import { ParticipationHistory } from '@components/participations'


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  description: {
    fontSize: '1.5rem',
    lineHeight: '32px',
  },
  separator: {
    width: '100%',
    marginBottom: '-10px'
  },
}))

interface HacktoberFestAlertProps extends AlertProps {
  message?: string
}

const Alert = (props: HacktoberFestAlertProps) => <MuiAlert elevation={6} variant="filled" {...props}> {props.message} </MuiAlert>

const PersonalAreaPage = () => {
  const [alert, setAlert] = useState<HacktoberFestAlertProps>()
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>()


  const closeSnackbar = () => setAlert(undefined)
  const showSnackBar = (severity: Color, message: string) => setAlert({ severity, message })

  useEffect(() => {
    const fetchUser = async () => {
      const user: UserProps | undefined = await User.Service.getInstance().GetUser()
      setUser(user)
      setIsLoaded(true)
    }
    fetchUser()
  }, [])

  const classes = useStyles()
  return (
    <Layout title="Minha Área - Globo Hacktoberfest" description="Minha Área - Globo Hacktoberfest" headerTitle="Minha área">
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={closeSnackbar}
          open={alert ? true : false}>
          <Alert severity={alert?.severity} message={alert?.message} />
        </Snackbar>

        <Grid container alignItems="flex-start" alignContent="center" direction="column">
          {loaded && user?.id &&
            <React.Fragment>
              <Grid style={{ maxWidth: 944 }} item xs={12} lg={6}>
                <Spacing desktop={{ margin: "160px 0px" }} smart={{ margin: "40px 0px 80px 0px" }}>
                  <div>
                    <PersonalDataForm user={user} />
                  </div>
                </Spacing>
                <ParticipationHistory user={user} />
                <ShippingForm showSnackBar={showSnackBar} user={user} />
              </Grid>
            </React.Fragment>
          }
        </Grid>
        <Image className={classes.separator} src={`2023/separator.svg`} />

      </div>
    </Layout>
  )
}

export default PersonalAreaPage
