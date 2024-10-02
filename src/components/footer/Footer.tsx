import React from "react"
import { makeStyles, Theme, Typography, useMediaQuery } from "@material-ui/core"
import Spacing from "@components/spacing"
import { Image } from "@components/image"
import { Grid } from "@material-ui/core"
import Box from "@mui/material/Box"
import Logo from "@components/logo"
import ScrollTop from "@components/scroll-top"

interface FooterItemsProps {
  menuItems: Array<MenuItem>
}

interface MenuItem {
  label: string
  link: string
}

const MENU_ITEMS: Array<MenuItem> = [
  { label: "github", link: "https://github.com/globocom/hacktoberfest" },
  { label: "trabalhe conosco", link: "https://vempraglobo.g.globo/" },
]

const makeCss = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    paddingTop: "32px",
    textAlign: "center",
    "& a": {
      color: theme.palette.text.primary,
    },
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    textAlign: "left",
  },
  footer: {
    backgroundColor: theme.palette.primary.dark,
    width: "100%",
  },
  footerImage: {
    width: "100%",
  },
  footercontent: { height: "331px", display: "flex" },
}))

const FooterDesktop = (props: FooterItemsProps) => {
  const classes = makeCss()
  return (
    <div className={classes.footercontent}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <Image src="2023/globo.svg" width="190" height="54.79" />
        </Grid>
        <Grid item>
          <Image src="2024/logo.png" width="278" height="90" />
        </Grid>
        {props.menuItems.map((item: MenuItem, i: number) => (
          <Grid item key={i}>
            <Typography
              className={classes.menuItem}
              variant="body1"
              component="p"
            >
              <a target="_blank" href={item.link}>
                {item.label}
              </a>
            </Typography>
          </Grid>
        ))}
        <Grid item>
          <ScrollTop />
        </Grid>
      </Grid>
      <br />
      <p
        style={{
          fontWeight: "400",
          fontSize: "14px",
          marginLeft: "-848px",
          marginTop: "188px",
          color: "#A03FFF",
        }}
      >
        As imagens do site foram geradas com IA usando o modelo Stable Diffusion
        via Leonardo.ai.
      </p>
    </div>
  )
}

const FooterSmart = (props: FooterItemsProps) => {
  const classes = makeCss()
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Spacing smart={{ margin: "10px 32px 0" }}>
        <Grid item>
          <Image height="30" src="2023/globo.svg" />
        </Grid>
      </Spacing>
      <Spacing smart={{ margin: "0 18px 0" }}>
        <Grid item>
          <Image src="2024/logo.png" with="278" height="90" />
        </Grid>
      </Spacing>
      {props.menuItems.map((item: MenuItem, i: number) => (
        <Spacing smart={{ margin: "0 32px 24px" }}>
          <Grid item key={i}>
            <Typography
              className={classes.menuItem}
              variant="body1"
              component="p"
            >
              <a target="_blank" href={item.link}>
                {item.label}
              </a>
            </Typography>
          </Grid>
        </Spacing>
      ))}

      <Grid item style={{ width: "90%" }} sm={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Grid item sm={12}>
            <ScrollTop />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const Footer = () => {
  const classes = makeCss()
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(theme.breakpoints.values.lg)
  )

  return (
    <footer className={classes.root}>
      <Image src="2024/footerimg.png" className={classes.footerImage} />
      <div className={classes.footer}>
        {isDesktop ? (
          <FooterDesktop menuItems={MENU_ITEMS} />
        ) : (
          <FooterSmart menuItems={MENU_ITEMS} />
        )}
      </div>
    </footer>
  )
}

export default Footer
