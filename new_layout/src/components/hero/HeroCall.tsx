import React from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Grid, Hidden, Typography, Button } from "@material-ui/core"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"

import Carousel from './Carousel'
import SmartView from './HeroSmart'

interface ImageHero {
  image: string
  format: string
  repeat?: number
  initialPosition: {
    x: number
    y: number
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  heroPanel: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
    height: "93.3vh",
    width: "100%",
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      height: "92vh",
    },
  },
}))


const DesktopView = () => {
  return (
    <React.Fragment>
      <Spacing
        desktop={{ margin: "0px 0px 72px" }}
        smart={{ margin: "0px 0px 24px" }}
      >
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          <Spacing smart={{ margin: "16px 0px" }}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center" component="h2">
                {" "}
                01 a 31 de outubro
              </Typography>
            </Grid>
          </Spacing>
          <Grid item xs={8}>
            <Typography align="center" variant="h3" component="h3">
              Contribua e ganhe uma camiseta exclusiva
            </Typography>
          </Grid>
          <Spacing smart={{ margin: "40px 0px 0px" }}>
            <Grid item xs={8}>
              <Button
                style={{ backgroundColor: "#fff", borderRadius: "64px" }}
                fullWidth
                variant="contained"
              >
                <pre style={{ fontFamily: "inherit" }}>
                  <b>Participar</b>
                  com sua conta do github
                </pre>
              </Button>
            </Grid>
          </Spacing>
        </Grid>
      </Spacing>

      <Spacing smart={{ margin: "32px 0px 0px" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <ArrowDownIcon />
          </Grid>
          <Grid item>
            <Typography align="center" component="p">
              {" "}
              como funciona{" "}
            </Typography>
          </Grid>
        </Grid>
      </Spacing>
    </React.Fragment>
  )
}

const HeroCall = () => {
  const classes = useStyles()
  const rules = [
    "Contribua com dois PRs em qualquer projeto Open Source da Globo durante o mês de outubro.",
    "Garanta que pelo menos um pull request seja ACEITO.",
    "Os 100 primeiros inscritos que completarem os requisitos mínimos ganharão uma camiseta.*",
  ]

  return (
    <div>
      <div className={classes.heroPanel} id="hero_panel">
        <Hidden smDown>
          <DesktopView />
        </Hidden>
        <Hidden mdUp>
          <SmartView/>
        </Hidden>
      </div>
      <Spacing smart={{margin: "40px 0px"}}>
        <Carousel rules={rules} showArrows={true}/>
      </Spacing>
    </div>
    
  )
}

export default HeroCall
