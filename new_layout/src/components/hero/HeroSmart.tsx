import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { UserProps } from "@services/user"


const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: "#fff", 
    fontFamily: "inherit", 
    borderRadius: "64px",
    textTransform: "none",
    color: theme.palette.text.primary
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
    width: '80vw',
    display: 'block',
    margin: '0px auto 24px auto'
  },
  progression: {
    border: '5px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 50,
    padding: '10px 30px'
  },
  textProgress: {
    width: '60vw',
    display: 'block',
    margin: '0px auto'
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
        <Spacing smart={{margin: "20px 0px 5px"}}>
          <Grid item>
            <Typography align="center" component="p"> Olá <b>@{user.githubUser}!</b></Typography>
          </Grid>
        </Spacing>
        <Spacing smart={{margin: "0px 0px 30px"}}>
          <Grid item md={5}>
            <Typography align="center" component="p"> Acompanhe seu progresso: </Typography>
          </Grid>
        </Spacing>
          <div className={classes.progressionContainer}>
            <div className={classes.progression}>
              <Image className={!currentEdition?.approved && !currentEdition?.completed ? classes.active : '' } src="hero/PR.svg"/> {/** Ativo se Approved e Completed for false */}
              <Image className={currentEdition?.approved && !currentEdition.completed ? classes.active : '' } src="hero/Check.svg"/> {/** Ativo se Approved true e completed false */}
              <Image className={currentEdition?.approved && currentEdition.completed ? classes.active : '' } src="hero/Shirt.svg"/> {/** Ativo se completed e aproved for true */}
            </div>
          </div>
          <div className={classes.textProgress}>
            {currentEdition?.completed ? <CongratsMessage/> : <ProgressMessage/>}
          </div>
      </Grid>
    </React.Fragment>
  )
}

const ProgressMessage = () => (
    <Typography align="center" component="p">  Você tem <b> {0} PRs enviados e {0} aceito(s) </b> </Typography>
)

const CongratsMessage = () => (
    <Typography align="center" component="p">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o endereço de envio no Minha Área. </Typography> 
)

const UnloggedView = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Spacing smart={{ margin: "60px 0px 0px" }}>
          <Grid item xs={8}>
            <Typography align="center" variant="h3" component="h3">
              Contribua e ganhe uma camiseta exclusiva
            </Typography>
          </Grid>
        </Spacing>
        <Spacing smart={{ margin: "40px 0px 0px" }}>
          <Grid item xs={8}>
            <Button
              href="/login"
              className={classes.button}
              fullWidth
              variant="contained"
            >
              <Typography component="p" variant="body2" align="center">
                <b>PARTICIPAR</b><br/>
                com sua conta do github
              </Typography>
            </Button>
          </Grid>
        </Spacing>

        <div className={classes.howWorks}>
            <ArrowDownIcon /> 
            <Typography align="center" component="p" >
              como funciona
            </Typography>
        </div>
    </React.Fragment>
  )
}


const SmartView = (props: SmartViewProps) => {
    return (
      <React.Fragment>
        <Spacing
          desktop={{ margin: "0px 0px 72px" }}
          smart={{ margin: "0px 0px 24px" }}
        >
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <Spacing smart={{ margin: "20px 0px 0px" }}>
              <Grid item xs={12}>
                <Typography variant="h2" align="center" component="h2">
                  {" "}
                  01 a 31 de outubro
                </Typography>
              </Grid>
            </Spacing>
            <Spacing smart={{ margin: "40px 0px 0px" }}>
              <Grid item xs={12}>
                <Image
                  style={{ width: "80vw", display: "block", margin: "0px auto" }}
                  src={`hero/hero.svg`}
                />
              </Grid>
            </Spacing>

            {props.user ? <LoggedView {...props.user}/> : <UnloggedView/>}

            <div>
              <Image src={`hero/beer.svg`} style={{ position: "absolute",left: "-30px",width: "33%",top: "35%",zIndex: "-1"}}/>
              <Image src={`hero/major_tom.svg`} style={{position: "absolute",right: "-14vw",width: "33%",top: "53%",zIndex: "-1"}}/>
            </div>

          </Grid>
        </Spacing>
  
      </React.Fragment>
    )
  }

  interface SmartViewProps {
    user?: UserProps
  }

  export default SmartView