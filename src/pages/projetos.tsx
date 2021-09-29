import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "@components/layout"
import ProjectsList from "@components/projects"

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
        <Spacing smart={{ margin: "64px 0px 40px" }}>
          <Typography
            component="p"
            align="center"
            color="textPrimary"
            variant="body1"
          >
            Gostaríamos da sua ajuda principalmente nos seguintes projetos:
          </Typography>
        </Spacing>
        <div className={classes.topDivider} />
        <Grid container justifyContent="center">
          <Spacing smart={{ padding: "0px 40px" }}>
            <Grid item xs={12} md={8}>
              <ProjectsList/>
            </Grid>
          </Spacing>
        </Grid>
      </React.Fragment>
    </Layout>
  )
}

export default ProjectsPage
