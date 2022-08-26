import React from "react"
import Layout from "@components/layout"
import EmailPopin from '@components/email-popin'
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, Grid, Typography } from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ProjectsList from "@components/projects"
import User,{UserProps} from '@services/user'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  projectsContainer: {
    [theme.breakpoints.up("md")]: {
      width: "60%",
      display: "block",
      margin: "0px auto",
    },
  },
}))

const IndexPage = () => {
  const [user, setUser] = React.useState<UserProps>()

  React.useEffect(() => {
    const fetchUser = async () => setUser(await User.Service.getInstance().GetUser())
    fetchUser()
  }, [])

  const classes = useStyles()

  return (
    <Layout
      title="Início - Globo Hacktoberfest"
    >
      <div className={classes.root}>
        {(user && !user?.email) && <EmailPopin user={user}/>}
        <HeroCall user={user} />
        <div className={classes.projectsContainer}>
          <Spacing smart={{ margin: "0px 0px 64px", padding: "0px 40px" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Typography variant="h2" color="secondary">
                  Projetos
                </Typography>
                <Spacing smart={{margin: "8px 0px 0px"}}>
                  <Typography align="left" variant="body1" color="textPrimary">
                      Gostaríamos da sua ajuda principalmente nos seguintes projetos:
                  </Typography>
                </Spacing>
              </Grid>
              <Spacing smart={{ margin: "24px 0px 0px" }}>
                <Grid item xs={12}>
                    <ProjectsList listLimit={3} />
                </Grid>
              </Spacing>
              <Grid>
                <Link href="/projetos">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1" color="secondary">
                      ver todos os projetos
                    </Typography>
                    <ArrowForwardIcon
                      style={{ marginLeft: 10 }}
                      color="secondary"
                    />
                  </span>
                </Link>
              </Grid>
            </Grid>
          </Spacing>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
