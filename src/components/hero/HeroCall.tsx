import React from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Box } from "@material-ui/core"

import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"
import { UserProps } from "@services/user"
import { Image } from "@components/image"

import headerBackground from "../../themes/images/2024/header-backgroud.png";



const useStyles = makeStyles((theme: Theme) => ({
  heroPanel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
    padding: '32px',
  },
  terms: {
    width: "100%",
    display: "block",
  },
  backgroundImageBox: {
    // position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: -1,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${headerBackground})`,
    padding: "0px -100px 0px 0px",
  },
  }
))



const HeroCall = (props: HeroCallProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  });

  return (
    <Box className={classes.backgroundImageBox}>
        {/* <Image  src={`2024/header-backgroud.png`ß} /> */}
      <Spacing desktop={{ padding: "0px 100px 0px 100px"}} smart={{ margin: "8vh 0px 0px 0px" }}>
          <Grid container alignItems="flex-end" className={classes.heroPanel} id="hero_panel">
            <Grid item xs={12}>
              {isDesktop ? <DesktopView user={props.user} /> : <SmartView user={props.user} />}
            </Grid>
          </Grid>
      </Spacing>
    </Box>
  )
}


interface HeroCallProps {
  user?: UserProps
}

export default HeroCall
