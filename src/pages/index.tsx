import React from "react"
import Layout from "@components/layout"
import { Image } from "@components/image"
import EmailPopin from '@components/email-popin'
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import Rules from "@components/rules"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, Grid, Typography } from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ProjectsList from "@components/projects"
import User, { UserProps } from '@services/user'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
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
  },
  separator: {
    position: 'absolute',
    width: '100%',
  },
  secondaryPage: {
    backgroundColor: '#AAAAAA',
  }
}))

const IndexPage = () => {
  const [user, setUser] = React.useState<UserProps>()

  React.useEffect(() => {
    const fetchUser = async () => setUser(await User.Service.getInstance().GetUser())
    fetchUser()
  }, [])

  const classes = useStyles()


  // TODO: trazer o padding que ficava dentro do layout, pra ca, ai a tela ia ficar com background color sem fazer gambiarra
  return (
    <Layout
      title="Início - Globo Hacktoberfest"
    >
      <div className={classes.root}>
        {(user && !user?.email) && <EmailPopin user={user} />}
        <HeroCall user={user} />
        <Image className={classes.separator} src={`2023/separator.svg`} />


        <div className={classes.secondaryPage}>
          <Rules />
          <span>Tem que dar um jeito de tirar esse buraco daqui</span>
          <br />
          <span>aqui tinha que deixar a parte inteira branca, da pra mexer por esse secondaryPage</span>

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
                <Spacing smart={{ margin: "8px 0px 0px" }}>
                  <Typography className={classes.projectCallDescription} align="left" variant="body1" color="textPrimary">
                    Gostaríamos da sua ajuda principalmente nos seguintes projetos
                </Typography>
                </Spacing>
              </Grid>
              <Spacing smart={{ margin: "24px 0px 0px" }}>
                <Grid item xs={12}>
                  <ProjectsList listLimit={6} useMansonry={false} />
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
                    <Typography style={{ fontWeight: 600 }} variant="body1" color="secondary">
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
    </Layout >
  )
}

export default IndexPage
