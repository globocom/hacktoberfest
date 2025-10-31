import React, { useEffect, useState } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

//Internal Components
import Layout from "@components/layout"
import Hacktoberfest from "@services/hacktoberfest"
import User, { UserProps } from "@services/user"
import { ExcludeAccountForm, PersonalDataForm } from "@components/forms"
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

const PersonalAreaPage = () => {
  const [loaded, setIsLoaded] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>()
  const [_, setCurrentEdition] = useState<number>(0)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await User.Service.getInstance().GetUser()
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
