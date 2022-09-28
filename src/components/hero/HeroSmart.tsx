import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button, Hidden } from "@material-ui/core"
import { Image } from "@components/image"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Edition, UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: "#fff",
    fontFamily: "inherit",
    borderRadius: "8px",
    textTransform: "none",
    padding: '24px',
    color: theme.palette.text.secondary
  },
  howWorks: {
    position: 'absolute',
    width: "100%",
    fontWeight: 100,
    display: `inline-flex`,
    justifyContent: `center`,
    bottom: '30px'
  },
  progressionContainer: {
    width: '190%',
    display: 'block',
    margin: '0px auto 0px  auto',
    [theme.breakpoints.between("sm", "md")]: {
      width: '91vw',
    }
  },
  progression: {
    border: '2px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: '10px 30px'
  },
  textProgress: {
    width: '60vw',
    display: 'block',
    margin: '0px auto',
    [theme.breakpoints.between("sm", "md")]: {
      
    }
  },
  logoEdition: {
    width: '100%',
    display: 'block',
    [theme.breakpoints.between("sm", "md")]: {
      width: '75%'
    }
  },
  loggedViewContainer: {
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  titleData:{
    fontSize: '7.5vw',
    width: '100%',
    margin: 0,
    fontWeight: 100,
    marginTop: '1.2vw',
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: '5.95vw',
    }
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
      <Grid container className={classes.loggedViewContainer} direction="column" justifyContent="flex-start" alignItems="flex-start">
        <Spacing smart={{margin: "0px 0px 5px"}}>
          <Grid item xs={12}>
            <Typography align="left" component="p"> Olá <b>@{user.githubUser}!</b></Typography>
            <TextComponent/>
          </Grid>
        </Spacing>
      </Grid>
      <div className={classes.progressionContainer}>
        <div className={classes.progression}>
          <Image className={state == 0 ? classes.active : '' } src="hero/PR.svg"/> {/** Ativo se Approved e Completed for false */}
          <Image className={state == 1 ? classes.active : '' } src="hero/Check.svg"/> {/** Ativo se Approved true e completed false */}
          <Image className={state == 2 ? classes.active : '' } src="hero/Shirt.svg"/> {/* Ativo se completed e aproved for true*/}
        </div>
      </div>
    </React.Fragment>
  )
}

const ProgressMessage = (props: any) => (
    <Typography align="left" variant="body1" component="h5">  Você tem <b> {props.opened} PRs enviados e {props.merged} aceito(s) </b> </Typography>
)

const ConfirmMessage = () => (
  <div style={{minWidth: '100%'}}>
    <Typography align="left" variant="body1" component="h5">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o endereço de envio no minha área. </Typography>
  </div>
)


const CongratsMessage = () => (
  <div style={{minWidth: '100%'}}>
    <Typography align="left" variant="body1" component="h5" >  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. <b>Agora é só esperar sua camiseta chegar!</b> </Typography>
  </div>
)

const UnloggedView = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
          <Grid container justifyContent="center" alignContent="center" className="containerUserViewSmart">
            <Spacing smart={{margin: "0px 0px 16px 0px;"}}>
              <Grid item xs={12}>
                <Typography align="center" variant="h3" component="h3" style={{fontSize: '1rem', fontWeight: 700 }}>
                  contribua e ganhe uma camiseta exclusiva
                </Typography>
              </Grid>
            </Spacing>
            <Grid item xs={12}>
              <Button
                href="/login"
                fullWidth
                className={classes.button}
                variant="contained"
              >
                <Typography component="p" variant="body2" align="center" style={{fontSize: '16px', color: "#000"}}>
                  <b>participar</b> com sua conta do github
                </Typography>

              </Button>
            </Grid>
          </Grid>
    </React.Fragment>
  )
}


const SmartView = (props: SmartViewProps) => {
   const classes = useStyles()
    return (
      <React.Fragment>
            <Grid
              container
              alignItems="center"
              alignContent="center"
              justifyContent="center"
            >
                <Grid item xs={12}></Grid>
                <Spacing smart={{margin: "0px 0px 80px 0px;"}}>
                  <Grid item xs={12}>
                      <Image className={classes.logoEdition} src={`2022/logo_smart.png`}/>
                      <Typography variant="h1" align="left" component="h2" className={classes.titleData}>
                        01.10.2022 — 31.10.2022
                      </Typography>
                  </Grid>
                </Spacing>

              {props.user ? <LoggedView {...props.user}/> : <UnloggedView/>}
            </Grid>
      </React.Fragment>
    )
  }

  interface SmartViewProps {
    user?: UserProps
  }

  export default SmartView