import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import {makeStyles, Theme} from '@material-ui/core/styles'
import { Grid, Typography } from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) => ({
  root: {
      height: "100%",
      color: theme.palette.primary.contrastText
  },
  panel: {
    backgroundColor: theme.palette.primary.main,
    height: "60%",
    width: "100%",
    zIndex: -100,
    position: 'absolute',
  },
  mainCall: {
    //Start Mobile
    textAlign: 'center',
    '& p': {
      fontSize: '1.5rem',
      marginBottom: 38,
    },
    '& .tshirt-call': {
      height: 80,
      border: '1px solid #fff',
      display: 'flex',
      flexDirection: 'column'
    },
    //End Mobile
    //Start Desktop
    [theme.breakpoints.up('md')]: {
      '& h1': {
        fontSize: '5rem',
        lineHeight: '68px'
      },
      '& p': {
        marginBottom: 24,
      },
    }
    //End Desktop
  }
}))

const Panel = (props: PanelProps) => {
  const classes = useStyles();
  return(
    <div className={classes.panel}/>
  )
}     



const IndexPage = () => {
  const classes = useStyles();
  return (
      <Layout>
        <SEO description="Globo Hacktoberfest" title="Início" />
        <div className={classes.root}>
            <Grid container justify="center">
              <Panel/>
              <Grid item className={classes.mainCall}>
                <Typography> 01 a 31 de Outubro</Typography>
                <Typography component="h1" variant="h1" > Hacktoberfest <br/> Globo 2021</Typography>
                <div className="tshirt-call">
                    <Typography> Contribua e ganhe uma camseta exclusiva</Typography>
                    <div/>
                </div>
              </Grid>
            </Grid>
        </div>
      </Layout>
    )
}


interface PanelProps {
  
}

export default IndexPage