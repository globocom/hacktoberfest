import React from "react"
import { makeStyles, Theme, Typography, useMediaQuery } from "@material-ui/core"
import Spacing from "@components/spacing"
import { Grid } from "@material-ui/core"
import Logo from "@components/logo"


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
    color: theme.palette.text.primary,
    paddingTop: '30px',
    borderTop: `1px solid ${theme.palette.text.primary}`,
    textAlign: "center",
    "& a": {
      color: theme.palette.text.primary,
    },
  },
  menuItem: {
    textAlign: "left",
  },

}))

const FooterDesktop = (props: FooterItemsProps) => {
  const classes = makeCss()
    return (
        <React.Fragment>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item md={10}>
                  <Grid container alignItems="center">
                    <Grid item md={3}>
                      <Typography className={classes.menuItem} style={{fontWeight: "bolder"}} variant="body1" component="p">
                        <a target="_blank" href={"https://globo.com"}>
                          globo.com <span style={{fontWeight: 400}}>Opensource</span>
                        </a>
                      </Typography>
                    </Grid>
                    {props.menuItems.map((item: MenuItem, i: number) => (
                          <Grid item md={3}>
                              <Typography className={classes.menuItem} variant="body1" component="p">
                                <a  target="_blank" href={item.link}>
                                  {item.label}
                                </a>
                              </Typography>
                          </Grid>
                    ))}
                  </Grid>
              </Grid>
              <Grid item md={2}>
                <Logo/>
              </Grid>
              
            </Grid>
        </React.Fragment>
    )
}

const FooterSmart = (props: FooterItemsProps) => {
  const classes = makeCss()
    return (
        <React.Fragment>
          <Spacing smart={{margin: "0 0 60px"}}>
            <div>
              {props.menuItems.map((item: MenuItem, i: number) => (
                  <Spacing key={i} smart={{margin: "0 0 24px"}}>
                      <Grid item>
                          <Typography className={classes.menuItem} variant="body1" component="p">
                            <a  target="_blank" href={item.link}>
                              {item.label}
                            </a>
                          </Typography>
                      </Grid>
                  </Spacing>
              ))}
              </div>
            </Spacing>
            
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={10}>
                    <Typography className={classes.menuItem} style={{fontWeight: "bolder"}} variant="body1" component="p">
                      <a target="_blank" href={"https://globo.com"}> globo.com <span style={{fontWeight: 400}}>Opensource</span> </a>
                    </Typography>
              </Grid>
              <Grid item xs={1}>
                    <Logo/>
              </Grid>
            </Grid>
        </React.Fragment>
    )
}

const Footer = () => {
    const classes = makeCss()
    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(theme.breakpoints.values.lg));
    return (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <footer className={classes.root}>
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                      {isDesktop ? <FooterDesktop menuItems={MENU_ITEMS}/> : <FooterSmart menuItems={MENU_ITEMS}/> }
                </Grid>
              </footer>
            </Grid>
          </Grid>
    )
}

export default Footer
