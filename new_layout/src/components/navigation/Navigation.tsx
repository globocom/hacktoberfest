import React, { useEffect, useState } from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Props from "./navigation"
import Logo from "@components/logo"
import NavigationItem from "./NavigationItem"
import User from "@services/user"

const MenuItems: Array<Props.NavigationItem> = [
  { label: "Projetos", link: "/projects" },
  { label: "Regras e Princípios", link: "/rulebook" },
  { label: "Participantes", link: "/participants" },
]

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
  navigation: {
    display: "inline-flex",
    listStyle: "none",
  },
}))

const NavigationItems = (props: Props.NavigationItems) => {
  const [isLogged, setIsLogged] = useState<boolean>()

  useEffect(() => {
    const checkIfLogged = async () => setIsLogged(await User.Service.getInstance().isLogged())
    checkIfLogged()
  },[])

  const classes = useStyles()
  return (
    <ul className={classes.navigation}>
      {props.items.map((def: Props.NavigationItem) => (
        <NavigationItem key={def.label} {...def} />
      ))}
      {isLogged && <NavigationItem label="Minha Área" link="/personalArea" />}
    </ul>
  )
}

const DeskMenu = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={2} md={2} lg={2}>
                <Logo/>
            </Grid>
            <Grid item md={8} lg={8}>
                <NavigationItems items={MenuItems}/>
            </Grid>
            <Grid item md={2} lg={2}>
                <Typography variant="subtitle1">
                    <b> globo.com </b> opensource 
                </Typography>
            </Grid>
        </Grid>
    )
}

const SmartMenu = () => {
  return <h1> Showing Mobile </h1>
}

const Navigation = (props: Props.Navigation) => {
  return props.mode === "smart" ? <SmartMenu /> : <DeskMenu />
}

export default Navigation
