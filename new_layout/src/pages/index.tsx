import React from "react"
import Layout from "@components/layout"
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, Grid, Typography, IconButton } from "@material-ui/core"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import NavigateBeforesIcon from "@material-ui/icons/NavigateBefore"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  panel: {
    backgroundColor: theme.palette.background.paper,
    height: "60%",
    width: "100%",
    zIndex: -100,
    position: "absolute",
  },
  info: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 5,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rounded: {
    borderRadius: 50,
    fontWeight: "normal",
  },

}))

const CustomNextArrow = (props: any) => {
  const { onClick, style } = props
  
  return (
    <IconButton onClick={onClick} style={style}>
      <NavigateNextIcon />
    </IconButton>
  )
}

const CustomPreviousArrow = (props: any) => {
  const { onClick, style } = props

  return (
    <IconButton onClick={onClick} style={style}>
      <NavigateBeforesIcon />
    </IconButton>
  )
}


const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout title="Início - Globo Hacktoberfest">
      <div className={classes.root}>
        <HeroCall />
        <Spacing smart={{ margin: "0px 0px 64px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h2" color="secondary">
                Projetos
              </Typography>
            </Grid>
            <Grid item xs={8} md={6} lg={6}>
              <Spacing smart={{ margin: "24px 0px 40px" }}>
                <Typography align="center" variant="body1" color="textPrimary">
                  Conheça alguns dos projetos que farão parte do Hacktoberfest
                  2021:
                </Typography>
              </Spacing>
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
    </Layout>
  )
}

export default IndexPage
