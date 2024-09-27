import React from "react"
import Layout from "@components/layout"
import { Image } from "@components/image"
import EmailPopin from "@components/email-popin"
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import Rules from "@components/rules"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, Grid, Typography, useMediaQuery } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import ProjectsList from "@components/projects"
import User, { UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      backgroundImage: "",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      backgroundSize: "150%",
      backgroundRepeat: "no-repeat",
      backgroundClip: "border-box",
      backgroundPosition: "bottom",
      backgroundPositionY: "400px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      backgroundImage: 'url("/stroke.svg")',
      backgroundSize: "150%",
      backgroundRepeat: "no-repeat",
      backgroundClip: "border-box",
      backgroundPosition: "bottom",
      backgroundPositionY: "400px",
    },
  },
  projectFont: {
    fontSize: "41.15px",
    lineHeight: "57.61px",
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: "3rem",
      lineHeight: "56px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "3.5rem",
      lineHeight: "64px",
    },
    marginLeft: "30px",
  },
  projectCallDescription: {
    fontSize: "1.5rem",
    lineHeight: "32px",
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "2rem",
      lineHeight: "48px",
    },
  },
  separatorPink: {
    width: "100%",
    marginTop: "-118px",
    position: "relative",
    zIndex: 1,
  },
  separatorViolet: {
    width: "100%",
    marginTop: "-232px",
    position: "relative",
    zIndex: 1,
  },
  secondaryPage: {
    marginTop: "-10px",
  },
  projects: {
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      paddingLeft: "150px",
      paddingRight: "150px",
    },
  },
  projectTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  projectItem: {
    width: "100%",
  },
  computer: {
    width: "165px",
    height: "104.35px",
  },
  allProjects: {
    display: "flex",
    margin: "60px 0px",
    justifyContent: "center",
  },
  allProjectsButton: {
    width: "288px",
    height: "70px",
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#07B1EF4D",
    borderRadius: "2px",
    border: "3px solid #02BBFF",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
  },
}))

const IndexPage = () => {
  const [user, setUser] = React.useState<UserProps>()

  React.useEffect(() => {
    const fetchUser = async () =>
      setUser(await User.Service.getInstance().GetUser())
    fetchUser()
  }, [])

  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  })

  // TODO: trazer o padding que ficava dentro do layout, pra ca, ai a tela ia ficar com background color sem fazer gambiarra
  return (
    <Layout title="Globo Hacktoberfest">
      <div className={classes.root}>
        {user && !user?.email && <EmailPopin user={user} />}
        <HeroCall user={user} />
        {isDesktop && (
          <>
            <Image
              className={classes.separatorPink}
              src={`2024/pink-line.svg`}
            />
            <Image
              className={classes.separatorViolet}
              src={`2024/violet-line.svg`}
            />
          </>
        )}

        <div className={classes.secondaryPage}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.projects}
          >
            <Rules user={user} />
            <Spacing
              smart={{ padding: "0 16px" }}
              desktop={{ margin: "30px 0px" }}
            >
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
                    <Grid item className={classes.projectTitle}>
                      <Image src={`2024/white-raio.svg`} />
                      <Typography
                        className={classes.projectFont}
                        variant="body1"
                        component="p"
                      >
                        Principais Projetoss
                      </Typography>
                    </Grid>
                    {isDesktop && (
                      <Grid item className={classes.computer}>
                        <Image src={`2024/computer.svg`} />
                      </Grid>
                    )}
                  </Grid>
                  <Spacing smart={{ margin: "0px 0px 60px 40px" }}>
                    <Typography
                      className={classes.projectCallDescription}
                      align="left"
                      variant="body1"
                      color="textPrimary"
                    >
                      Gostaríamos da sua ajuda principalmente nos seguintes
                      projetos
                    </Typography>
                  </Spacing>
                  <Spacing smart={{ margin: "24px 0px 0px" }}>
                    <Grid item xs={12}>
                      <ProjectsList listLimit={6} useMansonry={false} />
                    </Grid>
                  </Spacing>
                  <Grid item className={classes.allProjects}>
                    <Link href="/projetos">
                      <Button
                        variant="outlined"
                        className={classes.allProjectsButton}
                      >
                        VER TODOS OS PROJETOS
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Spacing>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
