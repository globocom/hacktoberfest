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
  projectFont: {
    fontSize: '2.25rem',
    lineHeight: '48px',
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: '3rem',
      lineHeight: '56px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '3.5rem',
      lineHeight: '64px',
    }
  },
  projectCallDescription: {
    fontSize: '1.5rem',
    lineHeight: '32px',
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '2rem',
      lineHeight: '48px',
    }
  }
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
          <Spacing smart={{ margin: "0px 0px 64px" }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Typography className={classes.projectFont} variant="h2" color="secondary">
                Principais Projetos
              </Typography>
              <Spacing smart={{margin: "8px 0px 0px"}}>
                <Typography className={classes.projectCallDescription} align="left" variant="body1" color="textPrimary">
                    Gostaríamos da sua ajuda principalmente nos seguintes projetos
                </Typography>
              </Spacing>
            </Grid>
            <Spacing smart={{ margin: "24px 0px 0px" }}>
              <Grid item xs={12}>
                  <ProjectsList listLimit={6} useMansonry={false}/>
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
                  <Typography style={{fontWeight: 600}} variant="body1" color="secondary">
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
    </Layout>
  )
}

export default IndexPage
