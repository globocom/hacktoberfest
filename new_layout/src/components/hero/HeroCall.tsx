
import React from "react"
import Spacing from '@components/spacing'
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Grid, Hidden, Typography, Button } from "@material-ui/core"
import { Image } from '@components/image'
import ArrowDownIcon from '@material-ui/icons/ArrowDownward'



interface ImageHero {
  image: string,
  format: string,
  repeat?: number,
  initialPosition: {
    x: number,
    y: number
  },
}

interface DraggableContentProps {
  image: ImageHero,

  children?: React.ReactNode
}


const useStyles = makeStyles((theme: Theme) => ({
    heroPanel: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: theme.palette.primary.main,
      height: "93.3vh",
      width: "100%",
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        height: "92vh",
      },
    },
}))


const SmartView = () => {

  return (
    <React.Fragment>
      <Spacing desktop={{margin: "0px 0px 72px"}} smart={{margin: "0px 0px 24px"}}>
        <Grid container alignItems="center" alignContent="center" justifyContent="center">
            <Spacing smart={{margin: "20px 0px 0px"}}>
              <Grid item xs={12}>
                  <Typography variant="h2" align="center" component="h2"> 01 a 31 de outubro</Typography>
              </Grid>
            </Spacing>
            <Spacing smart={{margin: "40px 0px 0px"}}>
              <Grid item xs={12}>
                  <Image style={{width: "90%", display: "block", margin: "0px auto"}} src={`hero/hero.svg`} />
              </Grid>
            </Spacing>
            <Spacing smart={{margin: "60px 0px 0px"}}>
              <Grid item xs={8}>
                <Typography align="center" variant="h3" component="h3">Contribua e ganhe uma camiseta exclusiva</Typography>
              </Grid>
            </Spacing>
            <Spacing smart={{margin: "40px 0px 0px"}}>
              <Grid item xs={8}>
                <Button style={{"backgroundColor": "#fff", borderRadius: "64px"}} fullWidth variant="contained">
                  <pre style={{fontFamily: "inherit"}}>
                    <b>Participar</b>
                    <p>com sua conta do github</p>
                  </pre>
                </Button>
              </Grid>
            </Spacing>
            <Grid item>
                <Image src={`hero/beer.svg`} style={{"position": "absolute", left: "-30px", top: "35%", zIndex: "-1"}}/>
                <Image src={`hero/major_tom.svg`}  style={{"position": "absolute", right:"-33px", width: "33%", top: "67%", zIndex: "-1"}}/>
            </Grid>
        </Grid>
      </Spacing>

      <Spacing smart={{margin: "32px 0px 0px"}}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
                <ArrowDownIcon/>
            </Grid>
            <Grid item>
                <Typography align="center" component="p"> como funciona </Typography>
            </Grid>
          </Grid>
      </Spacing>

    </React.Fragment>
  )
}

const DesktopView = () => {

  return (
    <h1> Desktop </h1>
  )
}
  
const HeroCall = () => {
    const classes = useStyles()

    return (
        <div className={classes.heroPanel} id="hero_panel">
          <Hidden smDown>
            <DesktopView/>
          </Hidden>
          <Hidden mdUp>
            <SmartView/>
          </Hidden>
            {/*<Spacing desktop={{margin: "0px 0px 72px"}} smart={{margin: "0px 0px 24px"}}>
              <Grid direction="column" container alignItems="center" alignContent="center">
                  <Spacing desktop={{margin: "0px 0px 24px"}} smart={{margin: "0px 0px 38px"}}>
                    <Grid item>
                        {ImagesHeroConfiguration.map((imageHero:ImageHero, index: number) => (
                          <DraggableContent image={imageHero} key={index}>
                            <Image src={`hero/${imageHero.image}.${imageHero.format}`} />
                          </DraggableContent>
                        ))}
                    </Grid>
                  </Spacing>
                </Grid>
                        </Spacing>*/}
          </div>
    )
}


export default HeroCall