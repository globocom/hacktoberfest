import React from "react"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Hidden, useMediaQuery, Grid } from "@material-ui/core"
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
    [theme.breakpoints.up("lg")]: {
      height: '80vh',
    }
  },
  terms: {
    width: "100%",
    display: "block",
  },
}))



const HeroCall = (props: HeroCallProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  });

  const rules = [
    "Contribua com dois PRs em qualquer projeto Open Source da Globo durante o mês de outubro.",
    "Garanta que pelo menos um pull request seja ACEITO.",
    "Os 100 primeiros inscritos que completarem os requisitos mínimos ganharão uma camiseta.*",
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
