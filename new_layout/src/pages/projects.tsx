import React from "react"
import { Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import Layout from "@components/layout"
import SEO from "@components/seo"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO description="Globo Hacktoberfest" title="Projetos" />
      <Spacing smart={{ margin: "64px 0px 24px" }}>
        <Typography
          component="p"
          align="center"
          color="primary"
          variant="body1"
        >
          Gostaríamos da sua ajuda principalmente nos seguintes projetos:
        </Typography>
      </Spacing>
    </Layout>
  )
}

export default ProjectsPage
