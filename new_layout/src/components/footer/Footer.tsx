import React from "react"
import { makeStyles, Theme, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { Grid } from "@material-ui/core"

interface FooterProps {}

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
  { label: "trabalhe conosco", "link: https://www.vempraglobo.com.br/" },
]

const makeCss = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    padding: '30px 0px',
    borderTop: `1px solid ${theme.palette.text.primary}`,
    textAlign: "center",
    "& a": {
      color: theme.palette.text.primary,
    },
  },
  menuItem: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    }
  },

}))

const FooterItems = (props: FooterItemsProps) => {
  const classes = makeCss()
    return (
        <React.Fragment>
            <Grid item xs={12} md={2} lg={2}>
                  <Typography className={classes.menuItem} style={{fontWeight: "bolder"}} variant="body1" component="p">
                    <a target="_blank" href={"https://globo.com"}>
                      globo.com
                    </a>
                  </Typography>
            </Grid>
            {props.menuItems.map((item: MenuItem, i: number) => (
                <Spacing key={i} smart={{margin: "0 0 8px"}}>
                    <Grid item xs={12} md={2} lg={2}>
                        <Typography className={classes.menuItem} variant="body1" component="p">
                          <a  target="_blank" href={item.link}>
                            {item.label}
                          </a>
                        </Typography>
                    </Grid>
                </Spacing>
            ))}
        </React.Fragment>
    )
}

const Footer = () => {
    const classes = makeCss()
    return (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={11}>
              <footer className={classes.root}>
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                      <FooterItems menuItems={MENU_ITEMS}/>
                </Grid>
              </footer>
            </Grid>
          </Grid>
    )
}

export default Footer
