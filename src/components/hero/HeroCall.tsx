import React, { useState, useEffect } from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Box } from "@material-ui/core"

import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"
import { UserProps } from "@services/user"


// Array com as imagens do carrossel
const carouselImages = [
  "/ademario-santana.png",
  "/ada-lovelace.png",
  "/alan-turing.png",
  "/bill-gates.png",
  "/grace-hopper.png",
  "/linus-torvalds.png",
  "/margaret-hamilton.png",
  "/steve-jobs.png"
]

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100%",
  },
  heroPanel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
    padding: "32px",
    paddingBottom: "0px",
    height: "calc(100vh - 77px)",
    alignItems: "baseline",
  },
  terms: {
    width: "100%",
    display: "block",
  },
  backgroundImageBox: {
    position: "absolute",
    background: theme.palette.background.paper,
    top: 0,
    left: 0,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "0px -100px 0px 0px",
    height: "100%",
    transition: "background-image 1s ease-in-out",
  }
}))

const HeroCall = (props: HeroCallProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  })


  return (
    <>
      {isDesktop && (
          <Box
            className={classes.backgroundImageBox}
            style={{
              backgroundImage: `url("")`,
            }}
          />
      )}
      <Spacing
        desktop={{ padding: "0px 100px 0px 100px" }}
        smart={{ margin: "0" }}
      >
        <Grid
          container
          alignItems="flex-end"
          className={classes.heroPanel}
          id="hero_panel"
        >
          <Grid item xs={12} className={classes.wrapper}>
            {isDesktop ? (
              <DesktopView user={props.user} />
            ) : (
              <SmartView user={props.user} />
            )}
          </Grid>
        </Grid>
      </Spacing>
    </>
  )
}

interface HeroCallProps {
  user?: UserProps
}

export default HeroCall
