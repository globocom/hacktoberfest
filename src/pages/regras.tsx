import React from "react"
import Layout from "@components/layout"
import { Image } from "@components/image"
import { Grid, Typography } from "@material-ui/core"
import Spacing from '@components/spacing'
import { makeStyles, Theme } from "@material-ui/core"
import { HeaderTitle } from "@components/header"

interface RuleProps {
  title?: string,
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  fontSection: {
    fontSize: '2.25rem',
    [theme.breakpoints.up("lg")]: {
      fontSize: '3.5rem' //56
    }
  },
  fontSubSection: {
    fontSize: '1.5rem',
    [theme.breakpoints.up("lg")]: {
      fontSize: '2rem' //32
    }
  },
  fontRule: {

  },
  separator: {
    width: '100%',
    marginBottom: '-10px'
  },
  principleTitle: {
    maxWidth: "20%",
    minWidth: "20%",
    marginRight: "20px",
    fontFamily: "Globotipo Variable",
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '28px',
    color: theme.palette.secondary.main,
  },
  principleDescription: {
    fontFamily: "Globotipo Variable",
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '25.2px',
    color: theme.palette.primary.light,
  },
  principlesContainer: {
    backgroundColor: theme.palette.secondary.dark,
  },
  principlesInsideContainer: {
    flexWrap: "nowrap",
    padding: "30px",
    borderBottom: `0.1px solid ${theme.palette.primary.light}`,
    '&:last-child': {
      borderBottom: "none",
    }
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
    margin: "30px 1px",
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
}))

const Rule = (props: RuleProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {props.title && <Spacing smart={{ margin: "0px 0px 24px" }}>
        <Typography className={classes.fontSubSection} variant="h3" component="p" color="textPrimary" style={{ fontWeight: 600 }}> {props.title} </Typography>
      </Spacing>}
      <Typography variant="h3" align="center" component="span" color="textPrimary"> {props.children} </Typography>
    </React.Fragment>
  )
}

const RuleBookPage = () => {
  const classes = useStyles();

  const principles = [
    {
      "title": "Todos são bem-vindos",
      "description": "Os participantes do Hacktoberfest representaram 151 países e reuniu milhares de habilidades únicas. Damos as boas-vindas a todos que já fazem parte da comunidade de software de código aberto e todos que estão interessados em mergulhar nesse universo."
    },
    {
      "title": "A quantidade é divertida, a qualidade é a chave",
      "description": "Participar do Hacktoberfest leva ao crescimento pessoal, oportunidades profissionais e construção de comunidade. No entanto, tudo começa com contribuições significativas para o software de código aberto."
    },
    {
      "title": "Ação de curto prazo, impacto de longo prazo",
      "description": "Na comunidade de software de código aberto, estamos nos apoiando nos ombros daqueles que vieram antes de nós. Sua participação tem um efeito duradouro nas pessoas e na tecnologia, muito depois de outubro. Esta é uma viagem, não uma corrida."
    }
  ]

  const rules = [
    "Para obter uma camiseta, você deve ter dois pull requests (PRs) enviados entre 1 e 31 de Outubro e pelo menos um deles aprovado.",
    "Os pull requests podem ser feitos em qualquer repositório dos projetos open source da Globo, não apenas para aqueles destacados.",
    "O PR deve conter confirmações que você mesmo fez."
  ]
  const rules2 = [
    "Se um mantenedor reportar seu PR como spam, o mesmo não será contabilizado para sua participação no Hacktoberfest.",
    "Se um mantenedor reportar um comportamento que não esteja de acordo com o código de conduta do projeto, você não poderá participar."
  ]
  return (
    <Layout
      title="Regras e Princípios - Globo Hacktoberfest"
      description="Regras e Princípos - Globo Hacktoberfest"
      headerTitle="Regras e Princípios">
      <Grid className={classes.root} container direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={12} lg={10}>
            <Grid container>
              <Spacing smart={{ margin: "40px 0" }}>
                <Grid item xs={12} lg={6}>
                  <HeaderTitle title={"Princípios"} />
                </Grid>
              </Spacing>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                className={classes.principlesContainer}
              >
                {principles.map((principle) => {
                    return (
                      <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      className={classes.principlesInsideContainer}
                    >
                      <Grid item className={classes.principleTitle}>{principle.title}</Grid>
                      <Grid item className={classes.principleDescription}>{principle.description}</Grid>
                    </Grid>
                    )
                  })
                }
              </Grid>
              <Spacing smart={{ margin: "64px 0px 40px" }}>
                <Grid item xs={12}>
                  <HeaderTitle title={"Regras"} />
                </Grid>
              </Spacing>
              <Grid item key={"inner_container"}>
                <Grid container direction="row" justifyContent="space-between" className={classes.rulesContainer}>
                  <Grid item key={"test1"} className={classes.rulesSeparator}>
                    <Image className={classes.rulesSeparatorSvg} src={`2023/separator-rules.svg`} />
                  </Grid>
                  {
                    rules.map((rule, index) =>
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
                <Grid container direction="row" justifyContent="space-between" className={classes.rulesContainer}>
                  <Grid item key={"test1"} className={classes.rulesSeparator}>
                    <Image className={classes.rulesSeparatorSvg} src={`2023/separator-rules.svg`} />
                  </Grid>
                  {
                    rules2.map((rule, index) =>
                      <Grid container direction="row" className={classes.rulesInsideContainer}>
                        <Grid item key={index}>
                          <div className={classes.number}>
                            {index + 4}
                          </div>
                        </Grid>
                        <Grid item key={`rule${index}`}>
                          {rule}
                        </Grid>
                      </Grid>
                    )
                  }
                  <Grid container direction="row" className={classes.rulesInsideContainer} justifyContent= "center">
                    <Grid item>
                      <Image  src={`2023/flag.svg`} />
                    </Grid>
                  </Grid>
                  <Grid item key={"img"} className={classes.rulesSeparator} >
                    <Image className={classes.rulesSeparatorSvg} src={`2023/separator-rules.svg`} />
                  </Grid>
                </Grid>
              </Grid>
              {/* <Spacing smart={{ margin: "0px 0px 40px" }}>
                <Grid item>
                  <Rule> Para obter uma camiseta, você deve ter dois pull requests (PRs) enviados entre 1 e 31 de Outubro e pelo menos um deles aprovado.</Rule>
                </Grid>
              </Spacing>
              <Spacing smart={{ margin: "0px 0px 40px" }}>
                <Grid item>
                  <Rule> Os pull requests podem ser feitos em qualquer repositório dos projetos open source da Globo, não apenas para aqueles destacados. </Rule>
                </Grid>
              </Spacing>
              <Spacing smart={{ margin: "0px 0px 40px" }}>
                <Grid item>
                  <Rule> O PR deve conter confirmações que você mesmo fez. </Rule>
                </Grid>
              </Spacing>
              <Spacing smart={{ margin: "0px 0px 40px" }}>
                <Grid item>
                  <Rule> Se um mantenedor reportar seu PR como spam, o mesmo não será contabilizado para sua participação no Hacktoberfest. </Rule>
                </Grid>
              </Spacing>
              <Spacing smart={{ margin: "0px 0px 100px" }}>
                <Grid item>
                  <Rule> Se um mantenedor reportar um comportamento que não esteja de acordo com o código de conduta do projeto, você não poderá participar. </Rule>
                </Grid>
              </Spacing> */}
            </Grid>
          </Grid>
        <Image className={classes.separator} src={`2023/separator.svg`} />
      </Grid>
    </Layout>
  )
}

export default RuleBookPage
