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
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  description: {
    fontSize: "20px",
    lineHeight: "28px",
    color: theme.palette.secondary.dark,
    fontFamily: "Globotipo Variable",
    fontWeight: 400,
  },
  separator: {
    width: "100%",
    marginBottom: "-10px",
  },
  headerTitle: {
    display: "flex",
    alignItems: "flex-end",
  },
  projectsList: {
    padding: "0px 32px 0 32px",
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
          <Grid style={{ maxWidth: 944 }} item xs={12} lg={6}>
            <Spacing
              desktop={{ margin: "5vh 0px 40px 0px" }}
              smart={{ margin: "64px 32px 0 32px" }}
            >
              <div className={classes.headerTitle}>
                <HeaderTitle title={"Projetos"} />
                <Image src={`2023/eye.svg`} />
              </div>
            </Spacing>
            <Spacing
              desktop={{ margin: "0 0 10vh 0" }}
              smart={{ margin: "24px 32px 40px 32px" }}
            >
              <Typography
                className={classes.description}
                component="p"
                align="left"
                color="textPrimary"
                variant="body1"
              >
                Todos os nossos projetos Open Source em um só lugar.
                Incentivamos sua contribuição no projeto que mais lhe agradar.
              </Typography>
            </Spacing>
            <div className={classes.projectsList}>
              <ProjectsList useMansonry={false} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default ProjectsPage
