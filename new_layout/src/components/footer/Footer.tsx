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
  { label: "Globo.com", link: "/foo" },
  { label: "Github", link: "/foo" },
  { label: "Open Source", link: "/foo" },
  { label: "Trabalhe Conosco", link: "/foo" },
]

const makeCss = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: 30,
    textAlign: "center",
  },
}))

const FooterItems = (props: FooterItemsProps) => {
    return (
        <React.Fragment>
            {props.menuItems.map((item: MenuItem, i: number) => (
                <Spacing key={i} smart={{margin: "0 0 8px"}}>
                    <Grid item xs={12} md={2} lg={2}>
                        <Typography variant="body1" component="a" href={item.link}> {item.label} </Typography>
                    </Grid>
                </Spacing>
            ))}
        </React.Fragment>
    )
}

const Footer = (props: FooterProps) => {
    const classes = makeCss()
    return (
        <footer className={classes.root}>
            <Grid container justifyContent="center" alignItems="center">
                <FooterItems menuItems={MENU_ITEMS}/>
            </Grid>
          </footer>
    )
}

export default Footer
