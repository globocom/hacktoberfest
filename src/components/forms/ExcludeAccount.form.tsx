import React from 'react'
import { Grid, Typography, Button, FormControl, makeStyles, Theme } from '@material-ui/core'
import Spacing from '@components/spacing'
import { HeaderTitle } from '@components/header'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 'auto',
    minWidth: 120,
    height: "44px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "100%",
    letterSpacing: "0%",
    borderRadius: "40px",
    border: "1px solid transparent",
    /* two backgrounds: first is the inner color, second is the border gradient */
    backgroundImage: "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    color: theme.palette.text.primary,
    textAlign: "center",
    textTransform: "none",
    boxShadow: 'none',
    opacity: 1,
    transform: "rotate(0deg)",
    position: "relative",
    transition: "all 0.3s ease",
    '&:hover': {
      /* on hover fill with gradient and change text color - keep two layers to avoid seam on rounded edges */
      backgroundImage: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%), linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      color: '#FFFFFF',
    },
  },
  full: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: "44px",
  },
}))

const ExcludeAccountForm = () => {
    const classes = useStyles()
    return (
            <Spacing desktop={{margin: "40px 0px"}} smart={{margin: "40px 0px"}}>
              <Grid container >
                <HeaderTitle title={"Excluir Conta"} description='Caso você deseje excluir sua conta, clique no botão abaixo. Esta ação é irreversível.'/>
              
                <Grid item md={12} className={classes.buttonContainer}>
                  <Button className={classes.button}>
                    Excluir Conta
                  </Button>
                </Grid>
              </Grid>
            </Spacing>
    )
}


export default ExcludeAccountForm