import React from "react"
import Spacing from "@components/spacing"
import { Theme } from "@material-ui/core/styles"
import { Hidden, useMediaQuery } from "@material-ui/core"
import { Image } from "@components/image"


import Carousel from "./Carousel"
import SmartView from "./HeroSmart"
import DesktopView from "./HeroDesktop"
import { UserProps } from "@services/user"
import { useStyles } from "./Hero.style";

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
      <div className={classes.heroPanel} id="hero_panel">
        <Hidden smDown>
          <DesktopView user={props.user} />
        </Hidden>
        <Hidden mdUp>
          <SmartView user={props.user} />
        </Hidden>
      </div>
      <Spacing smart={{margin: "40px 0px"}}>
        <Carousel rules={rules} typeText={isDesktop ? "inline" : "block"}  showArrows={isDesktop ? true : false}/>
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
