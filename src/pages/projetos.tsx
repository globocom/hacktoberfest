import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { Image } from "@components/image"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Layout from "@components/layout"
import ProjectsList from "@components/projects"
import { HeaderTitle } from "@components/header"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  description: {
    fontSize: '1.5rem',
    lineHeight: '32px',
  },
  separator: {
    width: '100%',
    marginBottom: '-10px'
  },
}))

const ProjectsPage = () => {
  const classes = useStyles()
  return (
    <Layout
      title="Projetos - Globo Hacktoberfest"
      description="Projetos - Globo Hacktoberfest"
      headerTitle="Projetos"
    >
      <div className={classes.root}>
        <Grid container justifyContent="center">
            <Spacing desktop={{margin: "160px 0px 0px 0px"}} smart={{margin: "40px 0px"}}>
              <Grid style={{maxWidth: 944}} item xs={12} lg={6}>
                <Spacing desktop={{margin: "5vh 0px 40px 0px"}} smart={{ margin: "64px 12px 0px 12px" }}>
                  <div>
                    <HeaderTitle title={"Projetos"}/>
                  </div>
                </Spacing>
                <Spacing desktop={{margin: "0px 0px 10vh 0px"}} smart={{ margin: "24px 12px 40px 12px" }}>
                  <Typography
                    className={classes.description}
                    component="p"
                    align="left"
                    color="textPrimary"
                    variant="body1"
                  >
                    Todos os nossos projetos Open Source em um só lugar. Incentivamos sua contribuição no projeto que mais lhe agradar.
                  </Typography>
                </Spacing>
                <ProjectsList/>
              </Grid>
            </Spacing>
        </Grid>
        <Image className={classes.separator} src={`2023/separator.svg`} />
      </div>
    </Layout>
  )
}

export default ProjectsPage
