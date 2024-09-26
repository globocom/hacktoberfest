import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button, Box } from "@material-ui/core"
import { Image } from "@components/image"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Edition, UserProps } from "@services/user"
import Lottie from "react-lottie"
import animationData from "../../themes/images/2023/drone.json"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    width: "80%",
    height: "180px",
  },
  button: {
    width: "100%",
    backgroundColor: "#07B1EF4D",
    fontFamily: "inherit",
    borderRadius: "2px",
    border: "3px solid #02BBFF",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
  },
  buttonContainer: {
    marginTop: "16px",
  },
  howWorks: {
    position: "absolute",
    width: "100%",
    fontWeight: 100,
    display: `inline-flex`,
    justifyContent: `center`,
    bottom: "45px",
  },
  sticker: {
    position: "absolute",
    zIndex: 1,
  },
  progressionContainer: {
    width: "30vw",
  },
  progression: {
    border: "2px solid #fff",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 22,
  },
  logoEdition: {
    width: "110%",
    display: "block",
    webkitTransform: "translate3d(0,0,0)",
    WebkitBackfaceVisibility: "hidden",
    marginLeft: "-64px"
  },
  character: {
    width: "700px !important",
  },
  message: {
    width: "500px",
    marginBottom: "212px",
    marginRight: "-16px",
  },
  gridItem: {
    height: "800px",
  },
  gridMessage: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logoGlobo: {
    width: "190px",
    display: "block",
    webkitTransform: "translate3d(0,0,0)",
    WebkitBackfaceVisibility: "hidden",
  },
  active: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  buttonText: {
    padding: 16,
    color: "#FFF",
    fontSize: "1rem",
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "1.125rem",
    },
  },
  contributeText: {
    fontSize: "1rem",
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "1.125rem",
    },
  },
  drone: {
    display: "flex",
    height: "100%",
  },
  droneAnimation: {
    animation: `$MoveUpDown 3000ms cubic-bezier(0.65, 0, 0.35, 1) 0s infinite`,
  },
  droneAnimation2: {
    animation: `$MoveLeftRight 5000ms cubic-bezier(0.65, 0, 0.35, 1) 0s infinite`,
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
    return 0
  } else if (currentEdition?.approved && !currentEdition.completed) {
    //Approved true e completed false
    return 1
  }

  return 2
}

const LoggedView = (user: UserProps) => {
  const classes = useStyles()
  const currentEdition =
    user.editions?.[Math.max(...Object.keys(user.editions))]
  const opened = currentEdition?.totalMergeRequests || 0
  const merged = currentEdition?.totalMergeRequestsMerged || "nenhum"
  const state = getEditionState(currentEdition)
  let TextComponent

  switch (state) {
    case 0:
      TextComponent = () => <ProgressMessage opened={opened} merged={merged} />
      break
    case 1:
      TextComponent = () => <ConfirmMessage />
      break
    case 2:
      TextComponent = () => <CongratsMessage />
      break
    default:
      TextComponent = () => <ProgressMessage opened={opened} merged={merged} />
      break
  }

  return (
    <React.Fragment>
      <Spacing smart={{ margin: "24px 0px 5px" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Spacing smart={{ margin: "0px 0px 5px" }}>
            <Grid item>
              <Typography align="left" component="p">
                {" "}
                Olá <b>@{user.githubUser}!</b>
              </Typography>
              <TextComponent />
            </Grid>
          </Spacing>
          <Grid item>
            <div className={classes.progressionContainer}>
              <div className={classes.progression}>
                <Image
                  className={state == 0 ? classes.active : ""}
                  src="hero/PR.svg"
                />{" "}
                {/** Ativo se Approved e Completed for false */}
                <Image
                  className={state == 1 ? classes.active : ""}
                  src="hero/Check.svg"
                />{" "}
                {/** Ativo se Approved true e completed false */}
                <Image
                  className={state == 2 ? classes.active : ""}
                  src="hero/Shirt.svg"
                />{" "}
                {/* Ativo se completed e aproved for true*/}
              </div>
            </div>
          </Grid>
        </Grid>
      </Spacing>
    </React.Fragment>
  )
}

const ProgressMessage = (props: any) => (
  <div style={{ maxWidth: 400 }}>
    <Typography align="left" component="p">
      {" "}
      Você tem <b> {props.opened} pull requests enviados</b> e{" "}
      <b>{props.merged} aceito(s) </b>{" "}
    </Typography>
  </div>
)

const ConfirmMessage = () => (
  <div style={{ maxWidth: 430 }}>
    <Typography align="left" component="p">
      {" "}
      <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o
      endereço de envio no minha área.{" "}
    </Typography>
  </div>
)

const CongratsMessage = () => (
  <div style={{ maxWidth: 430 }}>
    <Typography align="left" component="p">
      {" "}
      <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest.{" "}
      <b>Agora é só esperar sua camiseta chegar</b>{" "}
    </Typography>
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
        <Grid item xs={12}></Grid>
        <Grid item md={12} className={classes.buttonContainer}>
          <Button
            href="/login"
            style={{ display: "block" }}
            className={classes.button}
            size="large"
            fullWidth
          >
            <Typography
              className={classes.buttonText}
              component="p"
              variant="body2"
              align="center"
            >
              <b>participar com sua conta do github</b>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const DesktopView = (props: DesktopViewProps) => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Grid container alignItems="center">
      <Grid item sm={4} className={classes.gridItem}>
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
          align="left">
          O Hacktober está aberto a todos os que desejam trilhar o caminho da
          colaboração e deixar sua marca nos projetos open source.
        </Typography>
        {props.user ? <LoggedView {...props.user} /> : <UnloggedView />}
      </Grid>
      <Grid item sm={4} className={classes.gridItem}>
        <Box display="flex" marginTop={20}>
          <Image classnName={classes.character} src={`2024/character.svg`} />
        </Box>
      </Grid>
      <Grid item sm={4} className={classes.gridMessage}>
        <Image className={classes.message} src={`2024/message.png`} />

        {/* <div className={classes.droneAnimation2}>
          <Lottie options={defaultOptions} height={300} width={350} />
        </div> */}
      </Grid>
    </Grid>
  )
}

interface DesktopViewProps {
  user?: UserProps
}

export default DesktopView
