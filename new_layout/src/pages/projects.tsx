import React from "react"
import { Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import Layout from "@components/layout"
import SEO from "@components/seo"
import ProjectsList from "@components/projects"

const ProjectsPage = () => {
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
      <ProjectsList />
    </Layout>
  )
}

export default ProjectsPage
