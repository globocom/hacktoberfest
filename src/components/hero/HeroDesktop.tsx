import React, {useState} from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Edition, UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    width: '80%',
    height: '180px'
  },
  button: {
    width: "100%",
    backgroundColor: "#fff",
    fontFamily: "inherit",
    borderRadius: "8px",
    textTransform: "none",
    color: theme.palette.text.secondary
  },
  buttonContainer: {
    margin: '16px 80px'
  },
  howWorks: {
    position: 'absolute',
    width: "100%",
    fontWeight: 100,
    display: `inline-flex`,
    justifyContent: `center`,
    bottom: '45px'
  },
  sticker: {
    position: "absolute",
    zIndex: 1
  },
  progressionContainer: {
    width: '25vw',
    display: 'block',
    margin: '0px auto 24px auto'
  },
  progression: {
    border: '2px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 22
  },
  logoEdition: {
    width: '40vw',
    display: 'block'
    
  },
  active: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  }
}))


const getEditionState = (currentEdition: Edition | undefined): number => {
  if(!currentEdition?.approved && !currentEdition?.completed){
    //Approved e Completed  false
    return 0;
  }else if(currentEdition?.approved && !currentEdition.completed){
    //Approved true e completed false
    return 1;
  }

  return 2;
}

const LoggedView = (user: UserProps) => {
  const classes = useStyles()
  const currentEdition = user.editions?.[2021]
  const opened = currentEdition?.totalMergeRequests || 0
  const merged = currentEdition?.totalMergeRequestsMerged || "nenhum"
  const state = getEditionState(currentEdition);
  let TextComponent;
  
  switch(state){
    case 0:
      TextComponent = () => <ProgressMessage opened={opened} merged={merged}/>
      break;
    case 1:
      TextComponent = () => <ConfirmMessage/>
      break;
    case 2:
      TextComponent = () => <CongratsMessage/>
      break;
    default:
      TextComponent = () => <ProgressMessage opened={opened} merged={merged}/>
      break;
  } 

  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="flex-end" alignItems="flex-end">
        <Spacing smart={{margin: "0px 0px 5px"}}>
          <Grid item>
            <Typography align="right" component="p"> Olá <b>@{user.githubUser}!</b></Typography>
            <TextComponent/>
          </Grid>
        </Spacing>
        <Grid item>
          <div className={classes.progressionContainer}>
            <div className={classes.progression}>
              <Image className={state == 0 ? classes.active : '' } src="hero/PR.svg"/> {/** Ativo se Approved e Completed for false */}
              <Image className={state == 1 ? classes.active : '' } src="hero/Check.svg"/> {/** Ativo se Approved true e completed false */}
              <Image className={state == 2 ? classes.active : '' } src="hero/Shirt.svg"/> {/* Ativo se completed e aproved for true*/}
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const ProgressMessage = (props: any) => (
    <div style={{maxWidth: 400}}>
      <Typography align="right" component="p">  Você tem <b> {props.opened} pull requests enviados</b> e <b>{props.merged} aceito(s) </b> </Typography>
    </div>
)

const ConfirmMessage = () => (
  <div style={{maxWidth: 430}}>
    <Typography align="right" component="p">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o endereço de envio no minha área. </Typography>
  </div>
)

const CongratsMessage = () => (
  <div style={{maxWidth: 430}}>
    <Typography align="right" component="p">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. <b>Agora é só esperar sua camiseta chegar</b> </Typography>
  </div>
)

const UnloggedView = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography align="center" variant="h3" component="h3">
            contribua e ganhe uma camiseta exclusiva
          </Typography>
        </Grid>
          <Grid item md={12} className={classes.buttonContainer}>
            <Button
              href="/login"
              style={{display: "block" }}
              className={classes.button}
              size="large"
              fullWidth
              variant="contained"
            >
              <Typography style={{padding: 18}} component="p" variant="body2" align="center">
                  <b>participe</b> com sua conta do github
              </Typography>
            </Button>
          </Grid>
      </Grid>
    </React.Fragment>
  )
}

const DesktopView = (props: DesktopViewProps) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid
        justifyContent="center"
        container spacing={2}
      >
        <Grid item lg={6}>
          <Grid item lg={12}>
            <Image className={classes.logoEdition} src={`2022/logo.png`} />
            <Typography variant="h1" align="left" style={{fontSize: "3.15vw"}} component="h2">
              01.10.2022 - 31.10.2022
            </Typography>
          </Grid>
        </Grid>
        <Grid
          lg={5}
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          className="userLoginContainer"
        >
          {props.user ? <LoggedView {...props.user}/> : <UnloggedView/>}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


interface DesktopViewProps {
  user?: UserProps
}

export default DesktopView
