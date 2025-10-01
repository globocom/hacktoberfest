import React, { useState, useEffect } from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Box } from "@material-ui/core"

import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"
import { UserProps } from "@services/user"



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
  },
  gradientLine: { height: "24px", width: "100%", background: "linear-gradient(90deg, #05A6FF 0%, #8800F8 38.94%, #FF0C1F 71.15%, #FFD006 100%)", marginTop: "-20px" },

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
      <div className={classes.gradientLine}></div>
    </>
  )
}

interface HeroCallProps {
  user?: UserProps
}

export default HeroCall
