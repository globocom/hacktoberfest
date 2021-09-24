import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "@components/layout"
import SEO from "@components/seo"
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
      <SEO description="Globo Hacktoberfest" title="Projetos" />
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
        <Grid item xs={8}>
          <ProjectsList/>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ProjectsPage
