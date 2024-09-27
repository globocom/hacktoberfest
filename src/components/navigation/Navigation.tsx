import React, { useEffect, useState } from "react"
import {
  Button,
  Grid,
  Typography,
  Slide,
  Paper,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { NavigationItemProps, NavigationProps } from "./index"
import Logo from "@components/logo"
import NavigationItem from "./NavigationItem"
import User from "@services/user"
import { Image } from "@components/image"

import CloseIcon from "@material-ui/icons/Close"
import Spacing from "@components/spacing"

interface NavigationItemsProps {
  items: Array<NavigationItemProps>
}

const MenuItems: Array<NavigationItemProps> = [
  { label: "Projetos", link: "/projetos" },
  { label: "Regras e Princípios", link: "/regras" },
  { label: "Participantes", link: "/participantes" },
]

const useStyles = makeStyles((theme: Theme) => ({
  navigation: {
    listStyle: "none",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      display: "inline-flex",
      listStyle: "none",
    },
  },
  smartMenu: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    overflow: "hidden",
    zIndex: 999,
  },
  smartMenuContainer: {
    width: "90%",
    marginLeft: "10%",
    height: "100%",
    borderRadius:"6px 0px 0 6px",
    background: "black",
    display: "flex",
    zIndex: 1,
  },
  smartMenuContainerGrid: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "start",
  },
  smartHomeCall: {
    position: "absolute",
    top: "90%",
    marginRight: 40,
    right: 0,
  },
}))

const NavigationItems = (props: NavigationItemsProps) => {
  const [isLogged, setIsLogged] = useState<boolean>()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  })

  useEffect(() => {
    const checkIfLogged = async () =>
      setIsLogged(await User.Service.getInstance().isLogged())
    checkIfLogged()
  }, [])

  const classes = useStyles()
  return (
    <ul className={classes.navigation}>
      {isDesktop && (
        <li style={{ marginLeft: 20 }}>
          <Logo />
        </li>
      )}
      {props.items.map((def: NavigationItemProps) => (
        <NavigationItem key={def.label} {...def} />
      ))}
      {isLogged && <NavigationItem label="minha área" link="/minha-area" />}
    </ul>
  )
}

const HomeCall = () => (
  <Typography variant="subtitle1" component="a">
    {" "}
    <b> globo.com </b> opensource{" "}
  </Typography>
)

const DeskMenu = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={9}>
        <NavigationItems items={MenuItems} />
      </Grid>
      <Grid item xs={3} lg={3} style={{ textAlign: "right" }}>
        {" "}
        <HomeCall />{" "}
      </Grid>
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
          <Spacing smart={{ padding: "16px 40px 40px 16px"}}>
            <Grid className={classes.smartMenuContainerGrid} style={{ background:"#1B0530", borderRadius:6, margin: 2}}>
              <Spacing smart={{ margin: "0px 0px 8px", padding: "0 20px 20px 20px" }}>
              <div style={{display:"flex", justifyContent: "space-between"}}>
                <Image src="2024/carrovoador.png" style={{width:175, marginTop:12, marginLeft:-16}}/>
                <div style={{ backgroundColor: "#0031CC", width:48, height:50, borderRadius:"8px", marginRight:-44, marginTop:-4}}>
                  <div style={{ backgroundColor: "black", width:48, height:48, borderRadius:"8px", display: "flex",alignItems: "center", justifyContent: "center" }}>
                    <div style={{ backgroundColor: "white", width:44, height:44, borderRadius:"8px", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => props.closeMenu()}>
                      <CloseIcon style={{color:"#000000", fontSize: "38px"}} />
                    </div>
                  </div>
                </div>
                </div>
              </Spacing>
              <Spacing smart={{ margin: "0px 0px 0px" }}>
                <NavigationItems items={[{ label: "Home", link: "/" }, ...MenuItems]} />
              </Spacing>
            </Grid>
          </Spacing>
        </Paper>
      </Slide>
    </div>
  )
}

const SmartMenu = () => {
  const classes = useStyles()
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={6} md={3} lg={1}>
        <Logo />
      </Grid>
      <Grid item xs={2} md={1}>
        <Button
          style={{ display: "block", float: "right", marginTop:8, marginRight:8 }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <Image src="2023/menu.svg" />
        </Button>
        {menuOpened && <MenuOpen closeMenu={() => setMenuOpened(false)} />}
      </Grid>
    </Grid>
  )
}

const Navigation = (props: NavigationProps) => {
  return props.mode === "smart" ? <SmartMenu /> : <DeskMenu />
}

export default Navigation
