import React from "react"
import { Grid } from "@material-ui/core"
import Spacing from "@components/spacing"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Layout from "@components/layout"
import ProjectsList from "@components/projects"
import { HeaderTitle } from "@components/header"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  description: {
    fontSize: "18px",
    lineHeight: "100%",
    color: theme.palette.primary.contrastText,
    fontWeight: 400,
    lineSpacing: "0%",
    marginTop: "32px",
  },
  separator: {
    width: "100%",
    marginBottom: "-10px",
  },
  headerTitle: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
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
          <Spacing
            desktop={{ margin: "50px 40px 80px 40px" }}
            smart={{ margin: "50px 40px 80px 40px" }}
          >
            <Grid style={{ maxWidth: 1400, minHeight: "61vh" }}
            xs={12}
            lg={12}>
              <HeaderTitle
                title="Projetos"
                description="Todos os nossos projetos Open Source em um só lugar. Incentivamos sua contribuição no projeto que mais lhe agradar."
                imagePath="2025/project.svg"
              />
              <ProjectsList useMansonry={false} />
            </Grid>
          </Spacing>
        </Grid>
      </div>
    </Layout>
  )
}

export default ProjectsPage
