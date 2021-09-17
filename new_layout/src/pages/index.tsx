import React, { useState } from "react"
import Layout from "@components/layout"
import Spacing from "@components/spacing"
import HeroCall from "@components/hero"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Grid, Typography, IconButton } from "@material-ui/core"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import NavigateBeforesIcon from "@material-ui/icons/NavigateBefore"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

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
    fontWeight: "normal",
  },
  ruleText: {
    fontSize: 56,
  },
}))

const Rule = ({ rule, index }) => {
  const classes = useStyles()
  return (
    <Spacing smart={{ padding: "0px 200px" }}>
      <Grid container direction="row" justifyContent="center">
        <Grid container item direction="column" alignItems="flex-start" md={2}>
          <Typography variant="h1" color="textPrimary">
            {index + 1}.
          </Typography>
        </Grid>
        <Grid container item md={8}>
          <Typography
            variant="h1"
            color="textPrimary"
            className={classes.ruleText}
          >
            {rule}
          </Typography>
        </Grid>
      </Grid>
    </Spacing>
  )
}

const CustomNextArrow = (props) => {
  const { onClick, style } = props

  return (
    <IconButton onClick={onClick} style={style}>
      <NavigateNextIcon />
    </IconButton>
  )
}

const CustomPreviousArrow = (props) => {
  const { onClick, style } = props

  return (
    <IconButton onClick={onClick} style={style}>
      <NavigateBeforesIcon />
    </IconButton>
  )
}

const HacktoberfestCarousel = (props) => {
  const classes = useStyles()
  const { rules } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPreviousArrow />,
  }

  return (
    <Spacing desktop={{ margin: "40px auto" }} smart={{ margin: "20px auto" }}>
      <div style={{ width: "80%" }}>
        <Slider {...settings}>
          {rules.map((rule, index) => {
            return <Rule rule={rule} index={index} />
          })}
        </Slider>
      </div>
    </Spacing>
  )
}

const IndexPage = () => {
  const classes = useStyles()

  const rules = [
    "Contribua com dois PRs em qualquer projeto Open Source da Globo durante o mês de outubro.",
    "Garanta que pelo menos um pull request seja ACEITO.",
    "Os 100 primeiros inscritos que completarem os requisitos mínimos ganharão uma camiseta.*",
  ]

  return (
    <Layout title="Início - Globo Hacktoberfest">
      <div className={classes.root}>
        <HeroCall />
        <HacktoberfestCarousel rules={rules} />
        <Spacing smart={{ margin: "0px 0px 64px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h2" color="secondary">
                Projetos
              </Typography>
            </Grid>
            <Grid item xs={8} md={6} lg={6}>
              <Typography align="center" variant="body1" color="textPrimary">
                Some of the most popular developer tools, frameworks and
                experiences in the world are built around open communities. Here
                are a few featured Microsoft projects of note.
              </Typography>
            </Grid>
          </Grid>
        </Spacing>
      </div>
    </Layout>
  )
}

export default IndexPage
