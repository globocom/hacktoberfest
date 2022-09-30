import React from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Hidden, useMediaQuery, Grid, Box, Typography } from "@material-ui/core"
import { Image } from "@components/image"


import Carousel from "./Carousel"
import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"
import { UserProps } from "@services/user"


const useStyles = makeStyles((theme: Theme) => ({
  heroPanel: {
    height: '75vh',
    position: "relative",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      height: '80vh',
    }
  },
  terms: {
    width: "100%",
    display: "block",
  },
  boxContainer: {
    fontWeight: 300,
    margin: '.4em 0px',
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: "2rem",
      maxWidth: '33%',
    },
    border: '2px solid #fff',
    boxShadow: "0px 0px 4px #FFFFFF, 0px 4px 4px rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(16px)",
    padding: '32px',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '.9em',
    lineHeight: '1.3em'
  },
  rule: {
    fontSize: "1.5em",
    lineHeight: "32px",
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: "2rem",
      lineHeight: '48px'
    },
  },
  number: {
    backdropFilter: "blur(8px)",
    padding: "0px 10px",
    backgroundColor: "#4c4c4c",
    borderRadius: "7px"
  }
}))



const HeroCall = (props: HeroCallProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  });

  const rules = [
    <Typography className={classes.rule}>Contribua com <b>dois Pull Requests</b> em qualquer projeto Open Source da Globo <b>durante o mês de outubro</b>.</Typography>,
    <Typography className={classes.rule}>Garanta que pelo menos <b>um pull request</b> seja <b>ACEITO</b>.</Typography>,
    <Typography className={classes.rule}>Os 100 primeiros inscritos que completarem os requisitos mínimos <b>ganharão uma camiseta</b>.*</Typography>,
  ]

  return (
    <div>
      <Spacing desktop={{margin: "0px"}} smart={{margin: "8vh 0px 0px 0px"}}>
        <Grid container alignItems="flex-end" className={classes.heroPanel} id="hero_panel">
          <Grid item xs={12}>
                {isDesktop ? <DesktopView user={props.user} /> : <SmartView user={props.user} />}
          </Grid>
        </Grid>
      </Spacing>
      <Spacing smart={{ margin: "90px auto" }} desktop={{ margin: "30vh auto" }}>
        <Grid container justifyContent="space-between" >
          {
            rules.map((rule, index) =>
              <Grid item xs={12} lg={4} justifyContent="space-between" alignItems="flex-start" className={classes.boxContainer}>
                <Grid container direction="row">
                  <Grid item xs={2}>
                    <span className={classes.number}>
                      <b>{index + 1}</b>
                    </span>
                  </Grid>
                  <Grid xs={10}>
                      {rule}
                  </Grid>
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </Spacing>
    </div>
  )
}


interface HeroCallProps {
  user?: UserProps
}

export default HeroCall
