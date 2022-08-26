import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    // fontSize: '96px',
    // lineHeight: '96px',
    // color: 'black',
    // fontFeatureSettings: `'pnum' on, 'lnum' on`,
    // '-webkit-text-stroke': '1px white',
    // textShadow: ` 0px 0px 3px #fff, 0px 0px 3px #fff, 0px 0px 3px #fff, 0px 0px 3px #fff, 0px 0px 3px #fff`,
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
  headerContainer: {
    marginTop: `80px`
  },
  buttonContainer: {
    margin: '16px 80px'
  },
  saveTheDate:{
    fontSize: '64px',
    lineHeight: '64px',
    fontWeight: 'lighter',
    fontFeatureSettings: `'pnum' on, 'lnum' on, 'ss03' on`,
    letterSpacing: '-2px',
    marginTop: '10px'
  },
  howWorks: {
    position: 'absolute',
    width: "100%",
    fontWeight: 100,
    display: `inline-flex`,
    justifyContent: `center`,
    bottom: '45px'
  },
  heroImage: {
    width: "40vw",
    display: "block",
    margin: "0px auto"
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
        className={classes.headerContainer}
      >
      <Grid item xs={7}>

          <Grid item xs={12}>
            <Image className={classes.heroImage} src={`2022/logo.png`} />

            <Typography variant="h2" align="center" component="h2" className={classes.saveTheDate}>
              {" "}
              01.10.2022 - 31.10.2022
            </Typography>
          </Grid>
        </Grid>
        <Grid
          xs={5}
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          {props.user ? <LoggedView {...props.user}/> : <UnloggedView/>}
        </Grid>
      </Grid>
      <div>
        {/* <Image className={classes.sticker} src={`hero/major_tom.svg`} style={{ left: "20vw",top: "50vh", width: "10vw"}}/>
        <Image className={classes.sticker} src={`hero/beer.svg`} style={{ left: "75vw",top: "55vh", width: "10vw"}}/>
        <Image className={classes.sticker} src={`hero/planet.svg`} style={{ left: "84vw",top: "35vh", width: "16vw"}}/>
        <Image className={classes.sticker} src={`hero/note.svg`} style={{ left: "76vw",top: "5vh", width: "19vw"}}/>
        <Image className={classes.sticker} src={`hero/spark.svg`} style={{ left: "74vw",top: "35vh", width: "8vw"}}/>
        <Image className={classes.sticker} src={`hero/rocket.svg`} style={{ top: "20vh", width: '22vw'}}/>
        <Image className={classes.sticker} src={`hero/spark.svg`} style={{ left: "17vw", top: "9vh", width: "8vw"}}/> */}
      </div>


    </React.Fragment>
  )
}


interface DesktopViewProps {
  user?: UserProps
}

export default DesktopView
