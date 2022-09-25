import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "@components/layout"
import ProjectsList from "@components/projects"
import { HeaderTitle } from "@components/header"

const useStyles = makeStyles({
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  }
})

const ProjectsPage = () => {
  const classes = useStyles()
  return (
    <Layout
      title="Projetos - Globo Hacktoberfest"
      description="Projetos - Globo Hacktoberfest"
      headerTitle="Projetos"
    >
      <React.Fragment>
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Spacing desktop={{margin: "5vh 0px 40px 0px"}} smart={{ margin: "64px 12px 0px 12px" }}>
                <div>
                  <HeaderTitle title={"Projetos"}/>
                </div>
              </Spacing>
              <Spacing desktop={{margin: "0px 0px 10vh 0px"}} smart={{ margin: "24px 12px 40px 12px" }}>
                <Typography
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
        </Grid>
      </React.Fragment>
    </Layout>
  )
}

export default ProjectsPage
