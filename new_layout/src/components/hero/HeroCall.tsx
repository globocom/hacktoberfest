
import React from "react"
import Spacing from '@components/spacing'
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Grid, Hidden, Typography } from "@material-ui/core"
import { Image } from '@components/image'


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

const ImagesHeroConfiguration: Array<ImageHero> = [
    {image: 'spark', format: 'svg', initialPosition: {x: 15, y: 10}},
    {image: 'note', format: 'svg', initialPosition: {x: 70, y: 10}},
    {image: 'rocket', format: 'svg',initialPosition: {x: 10, y: 30}},
    {image: 'major_tom', format: 'svg', initialPosition: {x: 25, y: 60}},
    {image: 'planet', format: 'svg', initialPosition: {x: 80, y: 30}},
    {image: 'spark', format: 'svg', initialPosition: {x: 60, y: 30}},
    {image: 'beer', format: 'svg', initialPosition: {x: 65, y: 40}},
    {image: 'vinil', format: 'png', initialPosition: {x: 19, y: 10}},
    {image: '2021', format: 'png', initialPosition: {x: 34, y: 26}},
    {image: 'grobo', format: 'png', initialPosition: {x: 50, y: 20}},
]



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

const DraggableContent = (props: DraggableContentProps) => {    
    const left = props.image.initialPosition.x + "%"
    const top = props.image.initialPosition.y + "%"
    return (
            <div style={{'position': 'absolute',left,top}}>
                {props.children}
            </div>
    )
}


const SmartView = () => {

  return (
    <Spacing desktop={{margin: "0px 0px 72px"}} smart={{margin: "0px 0px 24px"}}>
      <Grid container alignItems="center" alignContent="center" justifyContent="center">
          <Grid item xs={12}>
              <Typography variant="h2" align="center" component="h2"> 01 a 31 de outubro</Typography>
          </Grid>
          <Grid item>
            <div>
            <Image style={{width: "100%"}} src={`hero/vinil.png`} />
            <div>
              <Image style={{position: "absolute", left: "0"}} src={`hero/2021.png`} />
            </div>
            </div>
          </Grid>
      </Grid>
    </Spacing>
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