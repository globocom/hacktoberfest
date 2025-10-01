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
import ComeToGlobo from "@components/come-to-globo"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
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
      fontSize: "69px",
      lineHeight: "56px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "3.5rem",
      lineHeight: "64px",
    },
    marginLeft: "30px",
  },
  projectCallDescription: {
    color: theme.palette.text.secondary,
    fontSize: "1.125rem",
    lineHeight: "100%",
    fontWeight: 400,
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
  },
  projects: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
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
    marginTop: "120px",
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
  backgroundImage: {
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "240%",
      height: "auto",
    },
  },
  backgroundImageContainer: {
    height: "140px",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  allProjectsButton: {
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: "40px",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    color: theme.palette.text.secondary,
    textTransform: "none",
    minWidth: "280px",
    height: "44px",
    opacity: 1,
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "306px",
    },
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

  return (
    <Layout title="Globo Hacktoberfest">
      <div className={classes.root}>
        {user && !user?.email && <EmailPopin user={user} />}
        <HeroCall user={user} />
        <Rules user={user} />
        <div className={classes.secondaryPage}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.projects}
          >
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
                      <Typography
                        className={classes.projectFont}
                        variant="body1"
                        component="p"
                      >
                        Principais Projetos
                      </Typography>
                    </Grid>
                  </Grid>
                  <Spacing smart={{ margin: "40px 0px 40px 30px" }}>
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
                        Ver todos os projetos
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Spacing>
          </Grid>
        </div>

          <Grid container justifyContent="center" alignItems="center" className={classes.backgroundImageContainer}>
            <Image src="2025/come-to-globo.svg" className={classes.backgroundImage} />
          </Grid>

        <div>
          <ComeToGlobo />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
