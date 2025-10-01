import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import type { Theme } from "@material-ui/core"
import { Grid, Button } from "@material-ui/core"
import { Image } from "@components/image"
import Spacing from "@components/spacing"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "linear-gradient(90deg, #07A3FF 0%, #8405F8 100%)",
    minHeight: "782px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    [theme.breakpoints.down("md")]: {
      padding: "60px 32px",
    },
  },
  content: {
    height: "100%",
  },
  "@keyframes marquee": {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
    },
    "100%": {
      transform: "translate3d(-100%, 0, 0)",
    },
  },
  mainContent: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      order: 2,
      textAlign: "center",
      alignItems: "center",
    },
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      order: 1,
      marginBottom: "32px",
    },
  },
  hexagonContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "16px",
    },
  },
  challengeImage: {
    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "auto",
    },
  },
  title: {
    fontSize: "48px",
    fontWeight: 700,
    color: theme.palette.text.secondary,
    marginBottom: "32px",
    lineHeight: "56px",
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
      lineHeight: "42px",
    },
  },
  description: {
    fontSize: "20px",
    fontWeight: 400,
    fontStyle: "normal",
    color: theme.palette.text.secondary,
    marginBottom: "24px",
    lineHeight: "140%",
    letterSpacing: "0%",
    maxWidth: "494px",
  },
  button: {
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: "40px",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    color: theme.palette.text.secondary,
    textTransform: "none",
    minWidth: "280px",
    height: "44px",
    opacity: 1,
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "306px",
    },
  },
}))

const ComeToGlobo = () => {
  const classes = useStyles()

  return (
      <Box className={classes.root}>
          <Grid container className={classes.mainContent} spacing={4} direction="row" alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} className={classes.rightColumn}>
              <Box className={classes.hexagonContainer}>
                <Image src="2025/challenge.svg" className={classes.challengeImage} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes.leftColumn}>
              <Box>

                <Typography className={classes.description} variant="body1">
                  Criamos soluções que sustentam produtos usados por milhões de pessoas, sempre buscando inovação e qualidade.
                </Typography>

                <Typography className={classes.description} variant="body1">
                  Se você quer atuar em projetos de grande impacto, com escala e relevância, venha para um time que respira tecnologia e está sempre pronto para o próximo desafio.
                </Typography>

                <Spacing smart={{ margin: "32px 0 0" }}>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    href="https://vempraglobo.g.globo/"
                    target="_blank"
                  >
                    Acesse nossa página de oportunidades
                  </Button>
                </Spacing>
              </Box>
            </Grid>
          </Grid>
      </Box>
  )
}

export default ComeToGlobo
