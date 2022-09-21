import React from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Hidden, useMediaQuery } from "@material-ui/core"
import { Image } from "@components/image"


import Carousel from "./Carousel"
import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"
import { UserProps } from "@services/user"


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



const HeroCall = (props: HeroCallProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const rules = [
    "Contribua com dois PRs em qualquer projeto Open Source da Globo durante o mês de outubro.",
    "Garanta que pelo menos um pull request seja ACEITO.",
    "Os 100 primeiros inscritos que completarem os requisitos mínimos ganharão uma camiseta.*",
  ]

  return (
    <div>
      <Spacing desktop={{margin: "200px 60px"}} smart={{margin: "100px 0px 0px 0px"}}>
        <div className={classes.heroPanel} id="hero_panel">
              <Hidden smDown>
                <DesktopView user={props.user} />
              </Hidden>
              <Hidden mdUp>
                <SmartView user={props.user} />
              </Hidden>
        </div>
      </Spacing>
      <Spacing smart={{margin: "40px 0px"}}>
        <Carousel rules={rules} />
      </Spacing>
      <Spacing smart={{ margin: "40px auto" }}>
        <Image className={classes.terms} src={ isDesktop ? "hero/terms.svg" : "hero/terms_mobile.svg"} />
      </Spacing>
    </div>
  )
}


interface HeroCallProps {
  user?: UserProps
}

export default HeroCall
