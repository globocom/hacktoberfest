import React, { useEffect, useState } from "react"
import { Button, Grid, Typography, Slide, Paper } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import {NavigationItemProps, NavigationProps} from "./index"
import Logo from "@components/logo"
import NavigationItem from "./NavigationItem"
import User from "@services/user"

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Spacing from "@components/spacing"

interface NavigationItemsProps {
  items: Array<NavigationItemProps>
}

const MenuItems: Array<NavigationItemProps> = [
  { label: "projetos", link: "/projetos" },
  { label: "regras e princípios", link: "/regras" },
  { label: "participantes", link: "/participantes" }
]

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 15,
    backgroundColor: theme.palette.primary.main
  },
  navigation: {
    listStyle: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      listStyle: "none"
    },
    textAlign: "right"
  },
  smartMenu: {
    position: 'fixed',
    width: "100%",
    height: "100%",
    top:0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    overflow: 'hidden',
    zIndex: 999
  },
  smartMenuContainer: {
    width: "90%",
    marginLeft: "10%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    zIndex: 1,
  },
  smartMenuContainerGrid: { 
    display: "flex", 
    flex: 1, 
    height:"100%", 
    flexDirection: "column", 
    justifyContent: "start", 
    alignItems: "flex-end",
  },
  smartHomeCall: {
    position: 'absolute',
    top: "90%",
    marginRight: 40,
    right: 0,
  }
}))

const NavigationItems = (props: NavigationItemsProps) => {
  const [isLogged, setIsLogged] = useState<boolean>()

  useEffect(() => {
    const checkIfLogged = async () => setIsLogged(await User.Service.getInstance().isLogged())
    checkIfLogged()
  },[])

  const classes = useStyles()
  return (
    <ul className={classes.navigation}>
      {props.items.map((def: NavigationItemProps) => (
        <NavigationItem key={def.label} {...def} />
      ))}
      {isLogged && <NavigationItem label="minha área" link="/minha-area" />}
    </ul>
  )
}

const HomeCall = () => <Typography variant="subtitle1" component="a"> <b> globo.com </b> opensource </Typography>

const DeskMenu = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={1}>
                <Logo/>
            </Grid>
            <Grid item md={8} lg={8}>
                <NavigationItems items={MenuItems}/>
            </Grid>
            <Grid item md={2} lg={2}> <HomeCall/> </Grid>
        </Grid>
    )
}

interface MenuOpenProps {
  closeMenu: Function
}

const MenuOpen = (props: MenuOpenProps) => {
  const classes = useStyles()
  return (
    <div className={classes.smartMenu}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <Paper className={classes.smartMenuContainer}>
                  <Spacing smart={{padding: "40px"}}>
                    <Grid className={classes.smartMenuContainerGrid}>
                      <Spacing smart={{margin: "0px 0px 45px"}}>
                        <Grid item xs={1}>
                          <div onClick={() => props.closeMenu()}>
                              <CloseIcon/>
                          </div>
                        </Grid>
                      </Spacing>
                      <Spacing smart={{margin: "216px 0px 24px"}}>
                        <Grid item xs={12} style={{display: "flex", alignItems: "start"}}>
                          <NavigationItems items={MenuItems}/>
                        </Grid>
                      </Spacing>
                    </Grid>
                  </Spacing>
                  <div className={classes.smartHomeCall}> <HomeCall/> </div>
              </Paper>
          </Slide>
    </div>
  )
}

const SmartMenu = () => {
  const classes = useStyles()
  const [menuOpened, setMenuOpened] = useState<boolean>(false)


  return (
    <Grid container className={classes.container} direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={1} md={1} lg={1}>
                <Logo/>
            </Grid>
            <Grid item md={8} lg={8}>
                <Button onClick={() => setMenuOpened(!menuOpened)}>
                  <MenuIcon style={{color: "#fff"}} fill="#fff"/>
                </Button>

                {menuOpened && <MenuOpen closeMenu={() => setMenuOpened(false)}/> }
            </Grid>
        </Grid>
  )
}

const Navigation = (props: NavigationProps) => {
  return props.mode === "smart" ? <SmartMenu /> : <DeskMenu />
}

export default Navigation
