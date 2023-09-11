import React from "react"
import { makeStyles, Theme, Typography, useMediaQuery } from "@material-ui/core"
import Spacing from "@components/spacing"
import { Image } from "@components/image"
import { Grid } from "@material-ui/core"
import Box from '@mui/material/Box';
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
  { label: "open source", link: "https://opensource.globo.com/" },
  { label: "trabalhe conosco", link: "https://www.vempraglobo.com.br/" }
]

const makeCss = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#FFF",
    color: theme.palette.text.primary,
    paddingTop: '32px',
    textAlign: "center",
    "& a": {
      color: theme.palette.text.primary,
    },
    display: 'flex',
    flexDirection: 'column',
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
}))

const FooterDesktop = (props: FooterItemsProps) => {
  const classes = makeCss()
  return (
    <React.Fragment>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <Image src="2023/globo.svg" />
        </Grid>
        <Grid item >
          <Image src="2023/logo.png" with="278" height="90" />
        </Grid>
        <Grid item>
          <Typography className={classes.menuItem} style={{ fontWeight: "bolder" }} variant="body1" component="p">
            <a target="_blank" href={"https://globo.com"}>
              globo.com <span style={{ fontWeight: 400 }}>Opensource</span>
            </a>
          </Typography>
        </Grid>
        {props.menuItems.map((item: MenuItem, i: number) => (
          <Grid key={i} item>
            <Typography className={classes.menuItem} variant="body1" component="p">
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
    </React.Fragment>
  )
}

const FooterSmart = (props: FooterItemsProps) => {
  const classes = makeCss()
  return (
    <Spacing smart={{ margin: "32px" }}>
      <Grid container direction="column" justifyContent="space-around" alignItems="flex-start">
        <Spacing smart={{ margin: "0 0 24px" }}>
          <Grid item>
            <Image src="2023/globo.svg" />
          </Grid>
        </Spacing>
        <Spacing smart={{ margin: "0 0 24px" }}>
          <Grid item>
            <Image src="2023/logo.png" with="278" height="90" />
          </Grid>
        </Spacing>
        {props.menuItems.map((item: MenuItem, i: number) => (
          <Spacing key={i} smart={{ margin: "0 0 24px" }}>
            <Grid item>
              <Typography className={classes.menuItem} variant="body1" component="p">
                <a target="_blank" href={item.link}>
                  {item.label}
                </a>
              </Typography>
            </Grid>
          </Spacing>
        ))}
        <Spacing smart={{ margin: "0 0 24px" }}>
          <Grid item xs={12}>
            <Typography className={classes.menuItem} style={{ fontWeight: "bolder" }} variant="body1" component="p">
              <a target="_blank" href={"https://globo.com"}> globo.com <span style={{ fontWeight: 400 }}>Opensource</span> </a>
            </Typography>
          </Grid>
        </Spacing>
        <Grid item style={{ width: '90%'}} sm={12}>
          <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
            <Grid item sm={12}>
              <ScrollTop />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Spacing >
  )
}

const Footer = () => {
  const classes = makeCss()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(theme.breakpoints.values.lg));

  return (
    <footer className={classes.root}>
      <Image src="2023/footer.svg" className={classes.footerImage} />
      <div className={classes.footer}>
        {isDesktop ? <FooterDesktop menuItems={MENU_ITEMS} /> : <FooterSmart menuItems={MENU_ITEMS} />}
      </div>
    </footer>
  )
}

export default Footer
