import React from "react"
import Spacing from "@components/spacing"
import { Image } from "@components/image"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button, Typography, Box } from "@material-ui/core"
import InfoSharpIcon from "@material-ui/icons/InfoSharp"

import { UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  containerRules: {
    position: "relative",
    height: "780px",
    display: "flex",
    alignItems: "center",

  },
  rule: {
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
  },
  number: {
    margin: "0px 20px",
    padding: "0px 10px",
    width: "48px",
    height: "48px",
    lineHeight: "48px",
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    fontSize: "24px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  projectTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    padding: "0 16px",
    width: "100%",
  },
  projectFont: {
    fontSize: "52px",
    lineHeight: "52px",
    color: theme.palette.primary.contrastText,
    textAlign: "left",
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      fontSize: "69px",
      lineHeight: "69px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      fontSize: "69px",
      lineHeight: "69px",
    },
    marginLeft: "30px",
  },
  rulesContainer: {
    flexWrap: "nowrap",
    backgroundColor: theme.palette.background.paper,
  },
  boxRulesContainer: {
    padding: "0px 60px",
  },
  rulesItemsContainer: {
    flexWrap: "nowrap",
    backgroundColor: "#230B42",
    alignItems: "center",
    margin: "30px 0px",
  },
  rulesInsideContainer: {
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      margin: "4px 0px",
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingRight: "10px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      margin: "30px 1px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      margin: "30px 1px",
    },
    flexWrap: "nowrap",
    alignItems: "center",
    color: theme.palette.text.primary,
    height: "164px",
  },
  rulesSeparator: {
    margin: "25px 0px",
    display: "flex",
    alignItems: "center",
  },
  rulesSeparatorSvg: {
    width: "38px",
    height: "244px",
  },
  importantRule: {
    lineHeight: "28px",
    color: theme.palette.secondary.main,
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 700,
  },
  buttonSmart: {
    padding: "16px 4px",
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    padding: 16,
    color: "#FFF",
    lineHeight: "28px",
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 400,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      width: "100%",
      marginTop: "5px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      width: "35%",
      marginTop: "-4px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      width: "35%",
      marginTop: "-4px",
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: "40px",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    color: theme.palette.text.secondary,
    textTransform: "none",
    minWidth: "280px",
    height: "44px",
    opacity: 1,
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "306px",
    },
  },
  clipSeparator: {
    marginTop: "5px",
    marginLeft: "-100px",
  },
  participateContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  participateHint: {
    color: "#2E3192",
    lineHeight: "28px",
    fontFamily: "Globotipo Variable",
    fontSize: "20px",
    fontWeight: 700,
  },
  verticalLine: {
    width: "1px",
    height: "92px",
    backgroundColor: theme.palette.secondary.main,
    margin: "0 auto",
  },
  verticalLineContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "244px",
    width: "30px",
  },
  horizontalLine: {
    width: "75%",
    height: "1px",
    backgroundColor: theme.palette.secondary.main,
    margin: "20px auto",
  },
  horizontalLineDesktop: {
    width: "100%",
    height: "3px",
    margin: "20px auto",
  },
}))

const RulesDesktop = (props: RulesProps) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"))

  return (
    <Box className={classes.containerRules}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        className={classes.containerRules}
        style={{ height: "100%" }}
      >
        <Grid item key={"como-participar"} className={classes.projectTitle}>
          <Typography
            className={classes.projectFont}
            variant="body1"
            component="p"
          >
            Como participar
          </Typography>
          {isDesktop && (
            <div style={{ marginBottom: "-28px", paddingRight: "52px" }}>
              <Image
                src="2025/ilustracao-participar.svg"
                style={{
                  width: "328px",
                  height: "224px",
                }}
              />
            </div>
          )}
        </Grid>
        <Grid
          item
          key={"inner_container"}
          className={classes.boxRulesContainer}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            className={classes.rulesContainer}
          >
            {props.rules?.map((rule, index) => (
              <React.Fragment key={`rule-fragment-${index}`}>
                <Grid
                  container
                  direction="row"
                  className={classes.rulesInsideContainer}
                >
                  <Grid item key={index}>
                    <div className={classes.number}>{index + 1}</div>
                  </Grid>
                  <Grid item key={`rule${index}`}>
                    {rule}
                  </Grid>
                </Grid>
                {index < (props.rules?.length ?? 0) - 1 && (
                  <Grid container className={classes.verticalLineContainer}>
                    <div className={classes.verticalLine}></div>
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
          {!props.user && (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              className={classes.participateContainer}
            >
              <Grid item />
              <Grid item className={classes.buttonContainer}>
                <Button
                  href="/login"
                  className={classes.button}
                  size="large"
                  variant="outlined"
                >
                  Participe com sua conta do Github
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

const RulesSmart = (props: RulesProps) => {
  const classes = useStyles()
  return (
    <Spacing smart={{ margin: "0 auto 100px auto" }}>
      <div>
        <Grid container direction="column">
          <Grid item key={"como-participar"} className={classes.projectTitle}>
            <Typography
              className={classes.projectFont}
              variant="body1"
              component="p"
            >
              Como participar
            </Typography>
          </Grid>
        </Grid>
        <Box padding={2}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              className={classes.rulesContainer}
            >
              {props.rules.map((rule, index) => (
                <React.Fragment key={`mobile-rule-fragment-${index}`}>
                  <Grid
                    container
                    direction="row"
                    className={classes.rulesInsideContainer}
                  >
                    <Grid xs={3} item key={`number${index}`}>
                      <div className={classes.number}>{index + 1}</div>
                    </Grid>
                    <Grid xs={8} item key={`rule${index}`}>
                      {rule}
                    </Grid>
                  </Grid>
                  {index < (props.rules?.length ?? 0) - 1 && (
                    <div className={classes.horizontalLine}></div>
                  )}
                </React.Fragment>
              ))}
            </Grid>
        </Box>

        {!props.user && (
          <div className={classes.buttonSmart}>
            <Button
              href="/login"
              className={classes.button}
              size="large"
            >
              Participar com sua conta do Github
            </Button>
          </div>
        )}
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
  })

  const rules = [
    <Typography className={classes.rule}>
      Contribua com{" "}
      <span className={classes.importantRule}>dois Pull Requests</span> em
      qualquer projeto Open Source da Globo{" "}
      <span className={classes.importantRule}>durante o mês de outubro</span>.
    </Typography>,
    <Typography className={classes.rule}>
      Garanta que pelo menos{" "}
      <span className={classes.importantRule}>um pull request</span> seja{" "}
      <span className={classes.importantRule}>aceito</span>.
    </Typography>,
    <Typography className={classes.rule}>
      Os primeiros inscritos que completarem os requisitos mínimos{" "}
      <span className={classes.importantRule}>ganharão uma camiseta</span>.
      {/* <br />
      <Box display="flex" alignItems="center">
        <InfoSharpIcon
          style={{ color: "#FFD700", marginRight: "2px", fontSize: "24px" }}
        />
        <Typography variant="body2" style={{ fontStyle: "italic" }}>
          Envio de camisetas somente para o Brasil!
        </Typography>
      </Box> */}
    </Typography>,
  ]

  return (
    <div>
      {isDesktop ? (
        <RulesDesktop user={props.user} rules={rules} />
      ) : (
        <RulesSmart rules={rules} />
      )}
    </div>
  )
}

export default Rules
