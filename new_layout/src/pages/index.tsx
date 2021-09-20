import React from "react"
import Layout from "@components/layout"
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, Grid, Typography, IconButton } from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ProjectsList from "@components/projects"


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  projectsContainer: {
    [theme.breakpoints.up("md")]: {
      width: '60%',
      display: 'block',
      margin: '0px auto'
    }
  }
  
}))




const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout title="Início - Globo Hacktoberfest">
      <div className={classes.root}>
        <HeroCall />
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
              </Grid>
              <Spacing smart={{ margin: "24px 0px 0px" }}>
                <Grid item xs={12}>
                    <Typography align="left" variant="body1" color="textPrimary">
                      Conheça alguns dos projetos que farão parte do Hacktoberfest
                      2021:
                    </Typography>
                    <ProjectsList listLimit={3}/>
                </Grid>
              </Spacing>
              <Grid>
                <Link href="/projects">
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
