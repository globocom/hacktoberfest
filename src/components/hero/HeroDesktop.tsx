import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { UserProps } from "@services/user"

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
    border: '5px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 50,
    padding: 22
  },
  logoEdition: {
    width: '60vw',
    margin: '0px 65px',
    display: 'block'
  },
  active: {
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: 7
  }
}))

const LoggedView = (user: UserProps) => {
  const classes = useStyles()
  const currentEdition = user.editions?.[2021]
  const opened = currentEdition?.totalMergeRequests || 0
  const merged = currentEdition?.totalMergeRequestsMerged || "nenhum"

  return (
    <React.Fragment>
      <Grid container direction="column" alignContent="center" justifyContent="center">
        <Spacing smart={{margin: "0px 0px 5px"}}>
          <Grid item>
            <Typography align="center" component="p"> Olá <b>@{user.githubUser}!</b></Typography>
          </Grid>
        </Spacing>
        <Grid item md={5}>
          <Typography align="center" component="p"> Você está participando do Hacktoberfest 2021.<br/> </Typography>
        </Grid>
        <Spacing smart={{margin: "0px 0px 30px"}}>
          <Grid item md={5}>
            <Typography align="center" component="p"> Acompanhe seu progresso: </Typography>
          </Grid>
        </Spacing>
          <div className={classes.progressionContainer}>
            <div className={classes.progression}>
              <Image className={!currentEdition?.approved && !currentEdition?.completed ? classes.active : '' } src="hero/PR.svg"/> {/** Ativo se Approved e Completed for false */}
              <Image className={currentEdition?.approved && !currentEdition.completed ? classes.active : '' } src="hero/Check.svg"/> {/** Ativo se Approved true e completed false */}
              <Image className={currentEdition?.approved && currentEdition.completed ? classes.active : '' } src="hero/Shirt.svg"/> * Ativo se completed e aproved for true
            </div>
          </div>

        {currentEdition?.completed ? <CongratsMessage/> : <ProgressMessage opened={opened} merged={merged}/>  }
      </Grid>
    </React.Fragment>
  )
}

const ProgressMessage = (props: any) => (
  <Grid item xs={12}>
    <Typography align="center" component="p">  Você tem <b> {props.opened} PRs enviados e {props.merged} aceito(s) </b> </Typography>
  </Grid>
)

const CongratsMessage = () => (
  <Grid item xs={6}>
    <Typography align="center" component="p">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o endereço de envio no Minha Área. </Typography>
  </Grid>
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
      <div className={classes.howWorks}>
            <ArrowDownIcon />
            <Typography align="center" component="p" >
              como funciona
            </Typography>
      </div>
    </React.Fragment>
  )
}

const DesktopView = (props: DesktopViewProps) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid
        container spacing={2}
      >
        <Grid item lg={6}>
          <Grid item lg={12}>
            <Image className={classes.logoEdition} src={`2022/logo.png`} />
            <Typography variant="h1" align="left" component="h2" className="titleDate">
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
