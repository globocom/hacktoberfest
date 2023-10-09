import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Image } from "@components/image"

//Internal Components
import Layout from '@components/layout'
import Spacing from '@components/spacing'
import Hacktoberfest from '@services/hacktoberfest'
import { PersonalDataForm, ShippingForm } from '@components/forms'
import User, { UserProps } from '@services/user'
import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert'
import { ParticipationHistory } from '@components/participations'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      padding: "100px 0 0 0",
    },
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
  formData: {
    maxWidth: "944px",
  }
}))

interface HacktoberFestAlertProps extends AlertProps {
  message?: string
}

const Alert = (props: HacktoberFestAlertProps) => <MuiAlert elevation={6} variant="filled" {...props}> {props.message} </MuiAlert>

const PersonalAreaPage = () => {
  const [alert, setAlert] = useState<HacktoberFestAlertProps>()
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>()
  const [currentEdition, setCurrentEdition] = useState<number>(0)

  const closeSnackbar = () => setAlert(undefined)
  const showSnackBar = (severity: Color, message: string) => setAlert({ severity, message })

  useEffect(() => {
    const fetchUser = async () => {
      const user: UserProps | undefined = await User.Service.getInstance().GetUser()
      setUser(user)
      setIsLoaded(true)

      const edition = await Hacktoberfest.Service.getInstance().GetEdition()
      if (edition?.edition) {
        setCurrentEdition(edition.edition)
      }
    }
    fetchUser()
  }, [])

  const classes = useStyles()

  const isCurrentEditionCompleted = user?.editions?.[currentEdition]?.completed

  return (
    <Layout title="Minha Área - Globo Hacktoberfest" description="Minha Área - Globo Hacktoberfest" headerTitle="Minha área">
      <div className={classes.root}>

        {loaded && user?.id &&
          <Grid container alignItems="flex-start" alignContent="center" direction="column" spacing={8}>
            <Grid item xs={10} className={classes.formData}>
              <PersonalDataForm user={user} />
            </Grid>
            <Grid item xs={10} className={classes.formData}>
              <ParticipationHistory user={user} />
            </Grid>
            {isCurrentEditionCompleted &&
              <Grid item xs={10} className={classes.formData}>
                <ShippingForm showSnackBar={showSnackBar} user={user} currentEdition={currentEdition} setCurrentEdition={setCurrentEdition}/>
              </Grid>
            }
          </Grid>
        }
        <Image className={classes.separator} src={`2023/separator.svg`} />

      </div >
    </Layout>
  )
}

export default PersonalAreaPage
