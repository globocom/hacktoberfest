import React from "react"
import Layout from "@components/layout"
import { Image } from "@components/image"
import EmailPopin from '@components/email-popin'
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import Rules from "@components/rules"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, Grid, Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import ProjectsList from "@components/projects"
import User, { UserProps } from '@services/user'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  projectFont: {
    fontSize: '41.15px',
    lineHeight: '57.61px',
    color: theme.palette.primary.dark,
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: '3rem',
      lineHeight: '56px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '3.5rem',
      lineHeight: '64px',
    },
    marginLeft: "30px",
  },
  projectCallDescription: {
    color: theme.palette.primary.dark,
    fontSize: '1.5rem',
    lineHeight: '32px',
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '2rem',
      lineHeight: '48px',
    }
  },
  separator: {
    width: '100%',
  },
  secondaryPage: {
    backgroundColor: '#FFF',
    marginTop: "-10px",
  },
  projects: {
    paddingLeft: "150px",
    paddingRight: "150px",
  },
  projectTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  projectItem: {
    width: "100%",
  },
  projectEye: {
    width: "87.34px",
    height: "104.35px",
  },
  allProjects: {
    display: "flex",
    margin: "60px 0px",
    justifyContent: "center",
  },
  allProjectsButton: {
    color: theme.palette.primary.dark,
    width: "288px",
    height: "70px",
    borderRadius: "1px solid",
    borderColor: theme.palette.primary.light,
    fontFamily: "Globotipo Variable",
    fontSize: '16px',
    fontWeight: 700,
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
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.projects}
        >
          <Rules />
          <Spacing smart={{ margin: "0px 0px 64px" }} desktop={{ margin: "30px 0px" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item className={classes.projectItem}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item className={classes.projectTitle} >
                    <Image src={`2023/body-raio.svg`} />
                    <Typography className={classes.projectFont} variant="body1" component="p">
                      Principais Projetos
                    </Typography>
                  </Grid>
                  <Grid item className={classes.projectEye}>
                    <Image src={`2023/eye.svg`} />
                  </Grid>
                </Grid>
                <Spacing smart={{ margin: "0px 0px 60px" }}>
                  <Typography className={classes.projectCallDescription} align="left" variant="body1" color="textPrimary">
                    Gostaríamos da sua ajuda principalmente nos seguintes projetos
                </Typography>
                </Spacing>


              <Spacing smart={{ margin: "24px 0px 0px" }}>
                <Grid item xs={12}>
                  <ProjectsList listLimit={6} useMansonry={false} />
                </Grid>
              </Spacing>
              <Grid item alignItems="center" justifyContent="center" className={classes.allProjects}>
                <Link href="/projetos">
                  <Button variant="outlined" color="primary" className={classes.allProjectsButton}>
                    VER TODOS OS PROJETOS
                  </Button>
                  {/* <span
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
                  </span> */}
                </Link>
              </Grid>
              </Grid>
            </Grid>
          </Spacing>
        </Grid>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
