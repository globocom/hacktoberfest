import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button, Box } from "@material-ui/core"
import { Image } from "@components/image"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Edition, UserProps } from "@services/user"
import Lottie from "react-lottie"
import animationData from "../../themes/images/2023/drone.json"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100%",
  },
  title: {
    width: "80%",
    height: "180px",
  },
  button: {
    width: "320px",
    height: "44px",
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "100%",
    letterSpacing: "0%",
    borderRadius: "40px",
    border: "none",
    background: "transparent",
    color: theme.palette.text.primary,
    textAlign: "center",
    textTransform: "none",
    opacity: 1,
    transform: "rotate(0deg)",
    position: "relative",
    transition: "all 0.3s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "40px",
      padding: "1px",
      background: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "xor",
      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      zIndex: -1,
    },
    "&:hover": {
      background: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
      color: "#FFFFFF",
      "&::before": {
        display: "none",
      },
    },
  },
  buttonContainer: {
    marginTop: "44px",
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
    width: "446px",
    height: "290px",
  },
  character: {
  },
  message: {
    width: "164px",
    height: "120px",

  },
  gridItem: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  gridMessage: {
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
  },
  logoGlobo: {
    width: "166px",
    height: "48px",
    marginBottom: "32px",
  },
  active: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  buttonText: {
    padding: 16,
    color: theme.palette.text.primary,
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
  gradientBar: {
    position: "relative",
    width: "100vw",
    height: "24px",
    marginLeft: "calc(-50vw + 50%)",
    marginTop: "60px",
    opacity: 1,
    background:
      "linear-gradient(90deg, #05A6FF 0%, #8800F8 38.94%, #FF0C1F 71.15%, #FFD006 100%)",
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
            className={classes.button}
            size="large"
            fullWidth
          >
            Participar com sua conta do Github
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const DesktopView = (props: DesktopViewProps) => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" className={classes.wrapper}>
      <Grid item sm={4} className={classes.gridItem}>
        <Image className={classes.logoGlobo} src={`2024/globo.svg`} />
        <Image className={classes.logoEdition} src={`2025/home-logo.svg`} />
        <Typography
          variant="h1"
          align="center"
          style={{
            fontSize: '24px',
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '31.47px',
            letterSpacing: '6%',
            textAlign: 'center',
            marginTop: "1.2vw",
            color: "#000000"
          }}
          component="h2"
        >
          01.10.2025 — 31.10.2025
        </Typography>
        <Typography
          style={{
            fontSize: '18px',
            fontWeight: 400,
            fontStyle: 'normal',
            letterSpacing: '0%',
            color: '#939598',
            textAlign: 'center',
            marginTop: "1vw",
            width: "446px"
          }}
          align="center">
          O Hacktober está aberto a todos os que desejam trilhar o caminho da colaboração e deixar sua marca nos projetos open source.
        </Typography>
        {props.user ? <LoggedView {...props.user} /> : <UnloggedView />}
      </Grid>
      <Grid item sm={4} className={classes.gridItem} >
        <Box display="flex" alignItems="center" justifyContent="center" height="100%" paddingLeft={"440px"}>
          <Image className={classes.character} src={`2025/ilustracao-home.svg`} />
        </Box>
      </Grid>
      <Grid item sm={4} className={classes.gridMessage}>
        <Image className={classes.message} src={`2025/message.svg`} />

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
