import React, {useEffect, useState} from "react"
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
  { label: "globo.com opensource", link: "https://www.globo.com/" },
  { label: "Github", link: "https://github.com/globocom/hacktoberfest" },
  { label: "Open Source", link: "https://github.com/globocom/" },
  { label: "Trabalhe Conosco", link: "https://vempraglobo.g.globo/" },
]

const makeCss = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    textAlign: "center",
    "& a": {
      color: theme.palette.text.primary,
    },
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    textAlign: "left",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "33px",
    letterSpacing: "0%",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  footerImage: {
    width: "100%",
  },
  footercontent: { height: "316px", display: "flex", alignItems: "center", justifyItems: "center"},
  footerTop: { height: "24px", width: "100%", background: "linear-gradient(90deg, #05A6FF 0%, #8800F8 38.94%, #FF0C1F 71.15%, #FFD006 100%)" },
}))

const FooterDesktop = (props: FooterItemsProps) => {
  const classes = makeCss()
  return (
    <div className={classes.footercontent}>
      <Grid container direction="column" justifyContent="center" style={{ height: "100%", padding: "40px 60px" }}>
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Image src="2025/globo.svg" width="166" height="48" />
            </Grid>

            <Grid item>
              <Image src="2025/logo-footer.svg" width="256" height="138" />
            </Grid>

            <Grid item>
              <Grid container direction="row" spacing={4}>
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
              </Grid>
            </Grid>

            {/* Botão de scroll */}
            <Grid item>
              <ScrollTop />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
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
      <Spacing smart={{ margin: "24px 32px 0" }}>
        <Grid item>
          <Image height="30" src="2025/globo.svg" />
        </Grid>
      </Spacing>
      <Spacing smart={{ margin: "0 18px 0" }}>
        <Grid item>
          <Image src="2025/logo-footer.svg" with="278" height="90" />
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
          <Grid item style={{ marginBottom: "9px" }} sm={12}>
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
  const [pathName, setPathName] = useState("")
  
  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])

  return (
    <footer className={classes.root}>
      {pathName !== "/" && <div className={classes.footerTop}></div>}
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
