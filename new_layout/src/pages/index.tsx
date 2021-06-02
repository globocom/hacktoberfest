import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Button, Grid, Typography, Paper } from "@material-ui/core"


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

  },
  margin: (props: any) => ({
    margin: props.marginSmart,
    [theme.breakpoints.up('md')]: {
      margin: props.marginDesktop
    }
  })

}))

const Element = (props: ElementProps) => {
  const classes = useStyles(props)
  return React.cloneElement(props.children, {
    className: classes.margin
  })

}   

const IndexPage = (props: IndexPageProps) => {
  const classes = useStyles(props);
  return (
      <Layout>
        <SEO description="Globo Hacktoberfest" title="Início" />
        <div className={classes.root}>
          <div className={classes.panel}/>
            <Grid direction="column" container alignItems="center" alignContent="center">
                <Grid item>
                  <Element marginDesktop={"0px 0px 24px"} marginSmart={"0px 0px 38px"}>
                    <Typography align="center" variant="h2" > 01 a 31 de Outubro</Typography>  
                  </Element>
                </Grid>
                <Grid item>
                  <Element marginDesktop={"0px 0px 16px"} marginSmart={"0px 0px 20px"}>
                    <Typography variant="h1" align="center" > Hacktoberfest <br/> Globo 2021</Typography>
                  </Element>
                </Grid>
                <Grid item>
                  <Element marginDesktop={"0px 0px 17px"} marginSmart={"0px 0px 76px"}>
                      <Typography variant="subtitle2"> Contribua e ganhe uma camiseta exclusiva</Typography>
                  </Element>
                </Grid>
                <Grid item>
                  <Element marginDesktop={"0px 0px 17px"} marginSmart={"0px 0px 24px"}>
                    <Button color="secondary" variant="contained">Clique para participar agora</Button>
                  </Element>
                </Grid>
                <Grid item>
                    <Element marginDesktop={"0px 0px 17px"} marginSmart={"0px 0px 24px"}>
                      <Typography>Ver Regras</Typography>
                    </Element>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Element marginDesktop={"0px 0px 17px"} marginSmart={"0px 0px 24px"}>
                      <Paper elevation={2}>
                        Ola Mundo
                      </Paper>
                    </Element>
                </Grid>
            </Grid>
        </div>
      </Layout>
    )
}

interface ElementProps {
  children: React.ReactElement,
  marginDesktop: string,
  marginSmart: string
}
interface IndexPageProps {


}

export default IndexPage