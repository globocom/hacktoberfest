import React, {useState} from "react"
import Layout from "@components/layout"
import Spacing from '@components/spacing'
import HeroCall from '@components/hero'
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Grid, Typography, Avatar } from "@material-ui/core"
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  panel: {
    backgroundColor: theme.palette.background.paper,
    height: "60%",
    width: "100%",
    zIndex: -100,
    position: "absolute",
  },
  info: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 5,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rounded: {
    borderRadius: 50,
    fontWeight: "normal"
  }
}))

const Rule = () => {
  const classes = useStyles()
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Spacing
          desktop={{ margin: "0px 0px 16px" }}
          smart={{ margin: "0px 0px 20px" }}
        >
          <Avatar className={classes.large} variant="rounded"></Avatar>
        </Spacing>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {" "}
          Contribua com dois PRs em qualquer projeto Open Source da Globo
          durante o mês de outubro.{" "}
        </Typography>
      </Grid>
    </Grid>
  )
}


const IndexRules = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.info}>
      <Spacing desktop={{ padding: "40px" }} smart={{ padding: "20px" }}>
        <Grid item xs={12} md={4} lg={4}>
          <Rule />
        </Grid>
      </Spacing>
      <Spacing desktop={{ padding: "40px" }} smart={{ padding: "20px" }}>
        <Grid item xs={12} md={4} lg={4}>
          <Rule />
        </Grid>
      </Spacing>
      <Spacing desktop={{ padding: "40px" }} smart={{ padding: "20px" }}>
        <Grid item xs={12} md={4} lg={4}>
          <Rule />
        </Grid>
      </Spacing>
    </Grid>
  )
}

const HacktoberfestCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
  )

}

const IndexPage = () => {
  const classes = useStyles()
  return (
      <Layout title="Início - Globo Hacktoberfest">
        <div className={classes.root}>
          <HeroCall/>
          <HacktoberfestCarousel/>
          <Spacing smart={{margin: "0px 0px 64px"}}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h2" color="secondary">Projetos</Typography>
                </Grid>
                <Grid item xs={8} md={6} lg={6}>
                  <Typography align="center" variant="body1" color="textPrimary">Some of the most popular developer tools, frameworks and experiences in the world are built around open communities. Here are a few featured Microsoft projects of note.</Typography>
                </Grid>
            </Grid>
          </Spacing>
        </div>
      </Layout>
    )
}

export default IndexPage
