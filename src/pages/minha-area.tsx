import React, { useEffect, useState } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

//Internal Components
import Layout from "@components/layout"
import Hacktoberfest from "@services/hacktoberfest"
import { ExcludeAccountForm, PersonalDataForm } from "@components/forms"
import { UserProps } from "@services/user"
import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert"
import { ParticipationHistory } from "@components/participations"
import Spacing from '@components/spacing'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: "#ffffff",
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      padding: "50px 0 0 0",
    },
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  description: {
    fontSize: "1.5rem",
    lineHeight: "32px",
  },
  separator: {
    width: "100%",
    marginBottom: "-10px",
  }
}))

interface HacktoberFestAlertProps extends AlertProps {
  message?: string
}

const Alert = (props: HacktoberFestAlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props}>
    {" "}
    {props.message}{" "}
  </MuiAlert>
)

const PersonalAreaPage = () => {
  const [alert, setAlert] = useState<HacktoberFestAlertProps>()
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>()
  const [currentEdition, setCurrentEdition] = useState<number>(0)

  const closeSnackbar = () => setAlert(undefined)
  const showSnackBar = (severity: Color, message: string) =>
    setAlert({ severity, message })

  useEffect(() => {
    const fetchUser = async () => {
      const user: UserProps = {
        id: "123",
        name: "Usuário Mock",
        email: "mock@exemplo.com",
        avatarURL: "https://example.com/avatar.png",
        githubUser: "mockuser",
        githubID: "mockgithubid",
        city: "Mock City",
        state: "Mock State",
        postalCode: "12345-678",
        address: "Rua Mock, 123",
        shirtSize: "M",
        shirtColor: "Azul",
        linkedin: "LinkedIn do Usuário",
        cpf: "123.456.789-00"
        // Adicione outras propriedades obrigatórias aqui
      }
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

  return (
    <Layout
      title="Minha Área - Globo Hacktoberfest"
      description="Minha Área - Globo Hacktoberfest"
      headerTitle="Minha área"
    >
      <div className={classes.root}>
        {loaded && user?.id && (
          <Grid
            container
            alignItems="flex-start"
            alignContent="center"
            direction="column"
          >
            <Spacing
          desktop={{ margin: "50px 40px 80px 40px" }}
          smart={{ margin: "50px 40px 80px 40px" }}
        >
            <Grid
              item
              style={{ maxWidth: 1400, minHeight: "61vh"}}
              xs={12}
              lg={12}
            >
              <Grid item xs={12}>
                <PersonalDataForm user={user} />
              </Grid>
              <Grid item xs={12}>
                <ParticipationHistory user={user} />
              </Grid>
              <Grid item xs={12}>
                <ExcludeAccountForm/>
              </Grid>
            </Grid>
            </Spacing>
          </Grid>
        )}
      </div>
    </Layout>
  )
}

export default PersonalAreaPage
