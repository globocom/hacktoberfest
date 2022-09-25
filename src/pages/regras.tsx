import React from "react"
import Layout from "@components/layout"
import { Grid, Typography } from "@material-ui/core"
import Spacing from '@components/spacing'
import { makeStyles, Theme } from "@material-ui/core"

interface RuleProps {
  title?: string,
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
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

  }
}))

const Rule = (props: RuleProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {props.title && <Spacing smart={{margin: "0px 0px 24px"}}>
        <Typography className={classes.fontSubSection} variant="h3" component="p" color="textPrimary" style={{fontWeight: 600}}> {props.title} </Typography>
      </Spacing> }
      <Typography variant="h3" align="center" component="span" color="textPrimary"> {props.children} </Typography>
    </React.Fragment>
  )
}

const RuleBookPage = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Regras e Princípios - Globo Hacktoberfest"
      description="Regras e Princípos - Globo Hacktoberfest"
      headerTitle="Regras e Princípios">
      <Spacing smart={{padding: "0px 8vw"}}>
        <Grid container direction="column" justifyContent="center" alignItems="flex-start" alignContent="center">
          <Spacing smart={{margin: "5vh 0 10vh 0"}}>
            <Grid item xs={12}>
              <Typography className={classes.fontSection} variant="h2" component="h2" color="secondary"> Princípios </Typography>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item xs={12}>
              <Rule title="Todos são bem-vindos">
                Os participantes do Hacktoberfest representaram 151 países e reuniu milhares de habilidades únicas. Damos as boas-vindas a todos que já fazem parte da comunidade de software de código aberto e todos que estão interessados em mergulhar nesse universo.
              </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item>
              <Rule title="A quantidade é divertida, a qualidade é a chave.">
                Participar do Hacktoberfest leva ao crescimento pessoal, oportunidades profissionais e construção de comunidade. No entanto, tudo começa com contribuições significativas para o software de código aberto.
              </Rule>
            </Grid>
          </Spacing>
          <Grid item>
            <Rule title="Ação de curto prazo, impacto de longo prazo.">
              Na comunidade de software de código aberto, estamos nos apoiando nos ombros daqueles que vieram antes de nós. Sua participação tem um efeito duradouro nas pessoas e na tecnologia, muito depois de outubro. Esta é uma viagem, não uma corrida.
            </Rule>
          </Grid>
          <Spacing smart={{margin: "64px 0px 40px"}}>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.fontSection} component="h2" color="secondary"> Regras </Typography>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item>
              <Rule> Para obter uma camiseta, você deve ter dois pull requests (PRs) enviados entre 1 e 31 de Outubro e pelo menos um deles aprovado.</Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item>
              <Rule> Os pull requests podem ser feitos em qualquer repositório dos projetos open source da Globo, não apenas para aqueles destacados. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item>
              <Rule> O PR deve conter confirmações que você mesmo fez. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item>
              <Rule> Se um mantenedor reportar seu PR como spam, o mesmo não será contabilizado para sua participação no Hacktoberfest. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 100px"}}>
            <Grid item>
              <Rule> Se um mantenedor reportar um comportamento que não esteja de acordo com o código de conduta do projeto, você não poderá participar. </Rule>
            </Grid>
          </Spacing>
        </Grid>
      </Spacing>
    </Layout>
  )
}

export default RuleBookPage
