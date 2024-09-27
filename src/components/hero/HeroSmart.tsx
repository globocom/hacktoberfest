import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button, Hidden } from "@material-ui/core"
import { Image } from "@components/image"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Edition, UserProps } from "@services/user"
import Lottie from 'react-lottie';
import animationData from '../../themes/images/2023/drone.json';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    fontFamily: "inherit",
    borderRadius: "2px",
    border: "3px solid #02BBFF",
    textTransform: "uppercase",
    padding: '24px',
    color: theme.palette.text.primary,
    backgroundColor: "#07B1EF4D",
    marginTop: '32px',
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
  loggedViewContainer: {
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  titleData: {
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
  },
  logoEdition: {
    width: '110%',
    marginLeft: '-46px',
    display: 'block',
    webkitTransform: "translate3d(0,0,0)",
    WebkitBackfaceVisibility: 'hidden',
  },
  logoGlobo: {
    width: '190px',
    display: 'block',
    webkitTransform: "translate3d(0,0,0)",
    WebkitBackfaceVisibility: 'hidden',
  },
  character: {
    marginTop: '16%',
    width: '100%'
  },
  drone: {
    width: '50%',
    height: '50%',
  },
  droneAnimation: {
    animation: `$MoveUpDown 3000ms cubic-bezier(0.65, 0, 0.35, 1) 0s infinite`
  },
  droneAnimation2: {
    animation: `$MoveLeftRight 5000ms cubic-bezier(0.65, 0, 0.35, 1) 0s infinite`
  },
  "@keyframes MoveUpDown": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-50px)",
    },
  },
  "@keyframes MoveLeftRight": {
    "0%, 100%": {
      transform: "rotate(-2deg)",
    },
    "50%": {
      transform: "rotate(2deg)",
    },
  },
}))

const getEditionState = (currentEdition: Edition | undefined): number => {
  if (!currentEdition?.approved && !currentEdition?.completed) {
    //Approved e Completed  false
    return 0;
  } else if (currentEdition?.approved && !currentEdition.completed) {
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

  switch (state) {
    case 0:
      TextComponent = () => <ProgressMessage opened={opened} merged={merged} />
      break;
    case 1:
      TextComponent = () => <ConfirmMessage />
      break;
    case 2:
      TextComponent = () => <CongratsMessage />
      break;
    default:
      TextComponent = () => <ProgressMessage opened={opened} merged={merged} />
      break;
  }

  return (
    <React.Fragment>
      <Grid container className={classes.loggedViewContainer} direction="column" justifyContent="flex-start" alignItems="flex-start">
        <Spacing smart={{ margin: "0px 0px 5px" }}>
          <Grid item xs={12}>
            <Typography align="left" component="p"> Olá <b>@{user.githubUser}!</b></Typography>
            <TextComponent />
          </Grid>
        </Spacing>
      </Grid>
      <div className={classes.progressionContainer}>
        <div className={classes.progression}>
          <Image className={state == 0 ? classes.active : ''} src="hero/PR.svg" /> {/** Ativo se Approved e Completed for false */}
          <Image className={state == 1 ? classes.active : ''} src="hero/Check.svg" /> {/** Ativo se Approved true e completed false */}
          <Image className={state == 2 ? classes.active : ''} src="hero/Shirt.svg" /> {/* Ativo se completed e aproved for true*/}
        </div>
      </div>
    </React.Fragment>
  )
}

const ProgressMessage = (props: any) => (
  <Typography align="left" variant="body1" component="h5">  Você tem <b> {props.opened} PRs enviados e {props.merged} aceito(s) </b> </Typography>
)

const ConfirmMessage = () => (
  <div style={{ minWidth: '100%' }}>
    <Typography align="left" variant="body1" component="h5">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o endereço de envio no minha área. </Typography>
  </div>
)


const CongratsMessage = () => (
  <div style={{ minWidth: '100%' }}>
    <Typography align="left" variant="body1" component="h5" >  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. <b>Agora é só esperar sua camiseta chegar!</b> </Typography>
  </div>
)

const UnloggedView = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignContent="center" className="containerUserViewSmart">
        {/* <Spacing smart={{ margin: "0px 0px 16px 0px;" }}>
          <Grid item xs={12}>
            <Typography align="center" variant="h3" component="h3" style={{ fontSize: '1rem', fontWeight: 700 }}>
              contribua e ganhe uma camiseta exclusiva
                </Typography>
          </Grid>
        </Spacing> */}
        <Grid item xs={12}>
          <Button
            href="/login"
            fullWidth
            className={classes.button}
          >
            <Typography component="p" variant="body2" align="center" style={{ fontSize: '16px', color: "#fff" }}>
              <b>participar com sua conta do github</b>
                </Typography>

          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


const SmartView = (props: SmartViewProps) => {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item sm={12}>
          <Image className={classes.logoGlobo} src={`2024/globo.svg`} />
          <Image className={classes.logoEdition} src={`2024/logo.png`} />
          <Typography
            variant="h1"
            align="left"
            style={{
              fontSize: '26px',
              fontWeight: 700,
              lineHeight: '31.47px',
              letterSpacing: '0.06em',
              textAlign: 'left',
              marginTop: "1.2vw"
            }}
            component="h2"
          >
          01.10.2024 — 31.10.2024
              </Typography>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '24.2px',
              textAlign: 'left',
              marginTop: "1vw"
            }}
            align="left"
          >
          O Hacktober está aberto a todos os que desejam trilhar o caminho da
          colaboração e deixar sua marca nos projetos open source.
              </Typography>
          {props.user ? <LoggedView {...props.user} /> : <UnloggedView />}
        </Grid>
        <Grid item sm={6}>
          <Image className={classes.character} src={`2024/character.svg`} />
        </Grid>
        <Grid item sm={4} className={classes.droneAnimation}>
        <Image  src={`2024/message.png`} />
          {/* <div className={classes.droneAnimation2}>
            <Lottie
              className={classes.drone}
              options={defaultOptions}
              height={200}
              width={250}
            />
          </div> */}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

interface SmartViewProps {
  user?: UserProps
}

export default SmartView
