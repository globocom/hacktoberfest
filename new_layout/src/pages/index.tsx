import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Spacing from '@components/spacing'
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Button, Grid, Typography, Paper, Avatar } from "@material-ui/core"


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
  }
}))


const Rule = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Spacing desktop={{margin: "0px 0px 16px"}} smart={{margin: "0px 0px 20px"}}>
          <Avatar variant="rounded">
          </Avatar>
        </Spacing>
      </Grid>
      <Grid item>
        <Typography variant="body2"> Contribua com dois PRs em qualquer projeto Open Source da Globo durante o mês de outubro. </Typography>
      </Grid>
    </Grid>
  )
}


const IndexRules = (props: IndexRuleProps) => {
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
      <Layout>
        <SEO description="Globo Hacktoberfest" title="Início" />
        <div className={classes.root}>
          <div className={classes.panel}/>
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
                      <Button color="secondary" variant="contained">Clique para participar agora</Button>
                  </Grid>
                </Spacing>
                <Spacing desktop={{margin: "0px 0px 72px"}} smart={{margin: "0px 0px 24px"}}>
                  <Grid item>
                        <Typography>Ver Regras</Typography>
                  </Grid>
                </Spacing>
            </Grid>
            <Grid container alignItems="center" justify="center">
                  <Grid item xs={12} md={9} lg={9}>
                      <IndexRules/>
                  </Grid>
            </Grid>
        </div>
      </Layout>
    )
}

interface IndexRuleProps {

}

interface IndexPageProps {

}

export default IndexPage