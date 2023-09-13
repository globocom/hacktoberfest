import React from "react"
import Spacing from "@components/spacing"
import { Image } from "@components/image"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core"

import { UserProps } from "@services/user"


const useStyles = makeStyles((theme: Theme) => ({
  rule: {
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: "28px",
  },
  number: {
    margin: "0px 20px",
    padding: "0px 10px",
    background: "linear-gradient(to bottom right, #250849 50%, #1C0733 50%)",
    borderRadius: "50%",
    border: `5px solid ${theme.palette.secondary.dark}`,
    width: "70px",
    height: "70px",
    lineHeight: "60px",
    textAlign: "center",
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: '34px',
    fontWeight: 700,
  },
  projectTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "20px",
    padding: "0 16px",
  },
  projectFont: {
    fontSize: '41.15px',
    lineHeight: '57.61px',
    color: theme.palette.primary.dark,
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: '3rem',
      lineHeight: '56px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: '3.5rem',
      lineHeight: '64px',
    },
    marginLeft: "30px",
  },
  rulesContainer: {
    flexWrap: "nowrap",
    backgroundColor: theme.palette.secondary.dark,
  },
  rulesItemsContainer: {
    flexWrap: "nowrap",
    backgroundColor: "#230B42",
    alignItems: "center",
    margin: "30px 0px"
  },
  rulesInsideContainer: {
    margin: "30px 0px",
    flexWrap: "nowrap",
    alignItems: "center",
    backgroundColor: "#250849",
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  },
  rulesSeparator: {
    margin: "25px 0px",
    display: "flex",
    alignItems: "center"
  },
  rulesSeparatorSvg: {
    width: "38px",
    height: "244px"
  },
  importantRule: {
    lineHeight: "28px",
    color: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    fontSize: '20px',
    fontWeight: 700,
  },
  buttonText: {
    padding: 16,
    color: theme.palette.secondary.dark,
    lineHeight: "28px",
    fontFamily: "Globotipo Variable",
    fontSize: '20px',
    fontWeight: 400,
  },
  buttonContainer: {
    marginTop: '5px',
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      width: "100%",
      padding: "0 32px"
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      width: "35%",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      width: "35%",
    },
  },
  buttonSmart: {
    padding: "16px 0"
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    fontFamily: "inherit",
    borderRadius: "8px",
    textTransform: "none",
    color: theme.palette.text.secondary,
    padding: '24px',
  },
  clipSeparator: {
    marginTop: '5px'
  },
  participateContainer: {
    display: "flex",
    alignItems: "center"
  },
  participateHint: {
    color: "#2E3192",
    lineHeight: "28px",
    fontFamily: "Globotipo Variable",
    fontSize: '20px',
    fontWeight: 700,
  }
}))

const RulesDesktop = (props: RulesProps) => {
  const classes = useStyles()
  return (
    <Spacing smart={{ margin: "100px auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item key={"como-participar"} className={classes.projectTitle}>
          <Image src={`2023/body-raio.svg`} />
          <Typography className={classes.projectFont} variant="body1" component="p">
            Como participar
            </Typography>
        </Grid>
        <Grid item key={"inner_container"}>
          <Grid container direction="row" justifyContent="space-between" className={classes.rulesContainer}>
            <Grid item key={"test1"} className={classes.rulesSeparator}>
              <Image className={classes.rulesSeparatorSvg} src={`2023/separator-rules.svg`} />
            </Grid>
            {
              props.rules?.map((rule, index) =>
                <Grid container direction="row" className={classes.rulesInsideContainer}>
                  <Grid item key={index}>
                    <div className={classes.number}>
                      {index + 1}
                    </div>
                  </Grid>
                  <Grid item key={`rule${index}`}>
                    {rule}
                  </Grid>
                </Grid>
              )
            }
            <Grid item key={"img"} className={classes.rulesSeparator}>
              <Image className={classes.rulesSeparatorSvg} src={`2023/separator-rules.svg`} />
            </Grid>
          </Grid>
          {
            !props.user &&
            <Grid container direction="row" justifyContent="space-between" className={classes.participateContainer}>
              <Grid item className={classes.clipSeparator}>
                <Image src={`2023/clip-separator.svg`} />
              </Grid>
              <Grid item className={classes.buttonContainer}>
                <Button
                  href="/login"
                  style={{ display: "block" }}
                  className={classes.button}
                  size="large"
                  fullWidth
                  variant="contained"
                >
                  <Typography className={classes.buttonText} component="p" variant="body2" align="center">
                    <span className={classes.participateHint}>PARTICIPAR</span> COM SUA CONTA DO GITHUB
                </Typography>
                </Button>
              </Grid>
            </Grid>
          }
        </Grid>
      </Grid>
    </Spacing>
  )
}

const RulesSmart = (props: RulesProps) => {
  const classes = useStyles()
  return (
    <Spacing smart={{ margin: "100px auto" }}>
      <div >

        <Grid container direction="column">
          <Grid item key={"como-participar"} className={classes.projectTitle}>
            <Image src={`2023/body-raio.svg`} />
            <Typography className={classes.projectFont} variant="body1" component="p">
              Como participar
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" justifyContent="space-between" className={classes.rulesContainer}>
          {
            props.rules.map((rule, index) =>
              <Grid container direction="row" className={classes.rulesInsideContainer}>
                <Grid xs={3} item key={`number${index}`}>
                  <div className={classes.number}>
                    {index + 1}
                  </div>
                </Grid>
                <Grid xs={8} item key={`rule${index}`}>
                  {rule}
                </Grid>
              </Grid>
            )
          }
        </Grid>

        {!props.user &&
          <div className={classes.buttonSmart}>
            <Button
              href="/login"
              fullWidth
              className={classes.button}
              variant="contained"
            >
              <Typography component="p" variant="body2" align="center" style={{ fontSize: '16px', color: "#000" }}>
                <span className={classes.participateHint}>PARTICIPAR</span> COM SUA CONTA DO GITHUB
                </Typography>
            </Button>
          </div>
        }

      </div>
    </Spacing>
  )
}

interface RulesProps {
  rules?: any[]
  user?: UserProps
}

const Rules = (props: RulesProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  });

  const rules = [
    <Typography className={classes.rule}>Contribua com <span className={classes.importantRule}>dois Pull Requests</span> em qualquer projeto Open Source da Globo <span className={classes.importantRule}>durante o mês de outubro</span>.</Typography>,
    <Typography className={classes.rule}>Garanta que pelo menos <span className={classes.importantRule}>um pull request</span> seja <span className={classes.importantRule}>ACEITO</span>.</Typography>,
    <Typography className={classes.rule}>Os 100 primeiros inscritos que completarem os requisitos mínimos <span className={classes.importantRule}>ganharão uma camiseta</span>.*</Typography>,
  ]

  return (
    <div>
      {isDesktop ? <RulesDesktop user={props.user} rules={rules} /> : <RulesSmart rules={rules} />}
    </div>
  )
}

export default Rules
