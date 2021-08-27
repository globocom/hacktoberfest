import React from "react"
import Layout from "@components/layout"
import { Grid, Typography } from "@material-ui/core"
import Spacing from '@components/spacing'

interface RuleProps {
  title?: string,
  children: React.ReactNode
}

const Rule = (props: RuleProps) => {

  return (
    <React.Fragment>
      {props.title && <Spacing smart={{margin: "0px 0px 8px"}}>
        <Typography variant="h3" component="p" color="primary" style={{fontWeight: 600}}> {props.title} </Typography>
      </Spacing> }
      <Typography variant="h3" align="center" component="span" color="primary"> {props.children} </Typography>
    </React.Fragment>
  )
}

const RuleBookPage = () => {
  return (
    <Layout 
      title="Regras e Princípios - Globo Hacktoberfest" 
      description="Regras e Princípos - Globo Hacktoberfest" 
      headerTitle="Regras e Princípios">
      <Spacing smart={{padding: "0px 40px"}}>
        <Grid container direction="column" justifyContent="center" alignItems="flex-start" alignContent="center">
          <Spacing smart={{margin: "64px 0px 24px"}}>
            <Grid item xs={6} md={6}>
              <Typography variant="h2" component="h2" color="secondary"> Princípios </Typography>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item  md={6}>
              <Rule title="Todos são bem-vindos"> 
                Os participantes do Hacktoberfest representaram 151 países e reuniu milhares de habilidades únicas. Damos as boas-vindas a todos que já fazem parte da comunidade de software de código aberto e todos que estão interessados em mergulhar nesse universo.
              </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 40px"}}>
            <Grid item md={6}>
              <Rule title="A quantidade é divertida, a qualidade é a chave."> 
                Participar do Hacktoberfest leva ao crescimento pessoal, oportunidades profissionais e construção de comunidade. No entanto, tudo começa com contribuições significativas para o software de código aberto.
              </Rule>
            </Grid>
          </Spacing>
          <Grid item md={6}>
            <Rule title="Ação de curto prazo, impacto de longo prazo."> 
              Na comunidade de software de código aberto, estamos nos apoiando nos ombros daqueles que vieram antes de nós. Sua participação tem um efeito duradouro nas pessoas e na tecnologia, muito depois de outubro. Esta é uma viagem, não uma corrida.
            </Rule>
          </Grid>
          <Spacing smart={{margin: "64px 0px 24px"}}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" color="secondary"> Regras </Typography>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 16px"}}>
            <Grid item md={6}>
              <Rule> Para obter uma camisa, você deve ter dois pull requests (PRs) enviados e pelo menos um aprovado entre 1 e 31 de outubro. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 16px"}}>
            <Grid item md={6}>
              <Rule> Os pull requests podem ser feitos em qualquer repositório dos projetos open source da Globo, não apenas para aqueles destacados. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 16px"}}>
            <Grid item md={6}>
              <Rule> O PR deve conter confirmações que você mesmo fez. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 16px"}}>
            <Grid item md={6}>
              <Rule> Se um mantenedor reportar seu PR como spam, o mesmo não será contabilizado para sua participação no Hacktoberfest. </Rule>
            </Grid>
          </Spacing>
          <Spacing smart={{margin: "0px 0px 100px"}}>
            <Grid item md={6}>
              <Rule> Se um mantenedor reportar um comportamento que não esteja de acordo com o código de conduta do projeto, você não poderá participar. </Rule>
            </Grid>
          </Spacing>
        </Grid>
      </Spacing>
    </Layout>
  )
}

export default RuleBookPage
