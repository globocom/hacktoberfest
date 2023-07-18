import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
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
    marginTop: '16px'
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
    width: '30vw',
    maxWidth: 430
  },
  progression: {
    border: '2px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 22
  },
  logoEdition: {
    width: '80%',
    display: 'block',
    webkitTransform:"translate3d(0,0,0)",
    WebkitBackfaceVisibility: 'hidden',
    
  },
  active: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  buttonText: {
    padding: 16,
    color: "#000",
    fontSize: '1rem',
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '1.125rem',
    }
  },
  contributeText:{
    fontSize: '1rem',
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '1.125rem',
    }
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
  const currentEdition = user.editions?.[Math.max(...Object.keys(user.editions))];
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
          <Typography align="center" className={classes.contributeText} variant="h3" component="h3">
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
              <Typography className={classes.buttonText} component="p" variant="body2" align="center">
                  <b>participar</b> com sua conta do github
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
      <Grid
        container
        alignItems="flex-end"
        >
        <Grid item sm={8}>
            <Image className={classes.logoEdition} src={`2022/logo.png`} />
            <Typography variant="h1" align="left" style={{fontSize: "3.48vw", fontWeight: 100, marginTop: '1.2vw'}} component="h2">
              01.10.2022 — 31.10.2022
            </Typography>
        </Grid>
        <Grid item sm={4} className="userLoginContainer">
          {props.user ? <LoggedView {...props.user}/> : <UnloggedView/>}
        </Grid>
      </Grid>
  )
}


interface DesktopViewProps {
  user?: UserProps
}

export default DesktopView
