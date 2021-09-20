import React from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Hidden } from "@material-ui/core"
import { Image } from "@components/image"

import Carousel from "./Carousel"
import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"

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
  terms: {
    width: "100%",
    display: "block",
  },
}))

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
          <SmartView />
        </Hidden>
      </div>
      <Spacing smart={{ margin: "40px 0px" }}>
        <Carousel rules={rules} showArrows={true} />
      </Spacing>
      <Spacing smart={{ margin: "100px auto" }}>
        <Image className={classes.terms} src="hero/terms_mobile.svg" />
      </Spacing>
    </div>
  )
}

export default HeroCall
