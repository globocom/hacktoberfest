import React from "react"
import Layout from "@components/layout"
import Spacing from '@components/spacing'
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Button, Grid, Typography, Avatar } from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) => ({
  root: {
      color: theme.palette.primary.contrastText
  },
  panel: {
    backgroundColor: theme.palette.primary.main,
    height: "60%",
    width: "100%",
    zIndex: -100,
    position: 'absolute',
  },
  info: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 5
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rounded: {
    borderRadius: 50,
    fontWeight: "normal"
  }
}))


const Rule = () => {
  const classes = useStyles()
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Spacing desktop={{margin: "0px 0px 16px"}} smart={{margin: "0px 0px 20px"}}>
          <Avatar className={classes.large} variant="rounded">
          </Avatar>
        </Spacing>
      </Grid>
      <Grid item>
        <Typography variant="body2"> Contribua com dois PRs em qualquer projeto Open Source da Globo durante o mês de outubro. </Typography>
      </Grid>
    </Grid>
  )
}


const IndexRules = () => {
  const classes = useStyles();
  return (
      <Grid container className={classes.info}>
          <Spacing desktop={{padding: "40px"}} smart={{padding: "20px"}}>
            <Grid item xs={12} md={4} lg={4}>
                  <Rule/>
            </Grid>
          </Spacing>
          <Spacing desktop={{padding: "40px"}} smart={{padding: "20px"}}>
            <Grid item xs={12} md={4} lg={4}>
                  <Rule/>
            </Grid>
          </Spacing>
          <Spacing desktop={{padding: "40px"}} smart={{padding: "20px"}}>
            <Grid item xs={12} md={4} lg={4}>
                  <Rule/>
            </Grid>
          </Spacing>
      </Grid>
  )
}

const IndexPage = () => {
  const classes = useStyles();
  return (
      <Layout title="Início - Globo Hacktoberfest">
        <div className={classes.root}>
          <div className={classes.panel}/>
          <Spacing desktop={{margin: "0px 0px 72px"}} smart={{margin: "0px 0px 24px"}}>
            <Grid direction="column" container alignItems="center" alignContent="center">
                <Spacing desktop={{margin: "0px 0px 24px"}} smart={{margin: "0px 0px 38px"}}>
                  <Grid item>
                      <Typography align="center" variant="h2" > 01 a 31 de Outubro</Typography>  
                  </Grid>
                </Spacing>
                <Spacing desktop={{margin: "0px 0px 16px"}} smart={{margin: "0px 0px 20px"}}>
                  <Grid item>
                      <Typography variant="h1" align="center" > Hacktoberfest <br/> Globo 2021</Typography>
                  </Grid>
                </Spacing>
                <Spacing desktop={{margin: "0px 0px 17px"}} smart={{margin: "0px 0px 76px"}}>
                  <Grid item>
                        <Typography variant="subtitle2"> Contribua e ganhe uma camiseta exclusiva</Typography>
                  </Grid>
                </Spacing>
                <Spacing desktop={{margin: "0px 0px 17px"}} smart={{margin: "0px 0px 24px"}}>
                  <Grid item>
                      <Button className={classes.rounded} color="secondary" variant="contained">
                        <div>
                          <b>Participar</b><br/>
                          Com a sua conta do github
                        </div>
                      </Button>
                  </Grid>
                </Spacing>
                <Grid item>
                      <Typography>Ver Regras</Typography>
                </Grid>
              </Grid>
            </Spacing>
          <Spacing smart={{margin: "0px 0px 64px"}}>
            <Grid container alignItems="center" justifyContent="center">
                    <Spacing desktop={{margin: "0px 0px 8px"}} smart={{margin: "0px 0px 16px"}}>
                      <Grid item xs={12} md={9} lg={9}>
                          <IndexRules/>
                      </Grid>
                    </Spacing>
                      <Grid item xs={12}>
                          <Typography variant="caption" component="p" align="center" color="textPrimary">* a camiseta será entregue exclusivamente em território brasileiro</Typography>
                      </Grid>
              </Grid>
            </Spacing>
          <Spacing smart={{margin: "0px 0px 64px"}}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h2" color="secondary">Projetos</Typography>
                </Grid>
                <Grid item xs={8} md={6} lg={6}>
                  <Typography align="center" variant="body1" color="textPrimary">Some of the most popular developer tools, frameworks and experiences in the world are built around open communities. Here are a few featured Microsoft projects of note.</Typography>
                </Grid>
            </Grid>
          </Spacing>
        </div>
      </Layout>
    )
}

export default IndexPage