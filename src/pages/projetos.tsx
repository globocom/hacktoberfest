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
    color: theme.palette.primary.contrastText,
    fontFamily: "Globotipo Variable",
    fontWeight: 400,
    marginLeft: "32px",
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
          <Grid style={{ maxWidth: 1523 }} item xs={5} lg={10}>
            <Spacing
              desktop={{ margin: "5vh 0px 40px 0px" }}
              smart={{ margin: "64px 32px 0 32px" }}
            >
              <div className={classes.headerTitle}>
                <div>
                  <HeaderTitle title={"Projetos"} />
                  <Typography
                    className={classes.description}
                    component="p"
                    align="left"
                    color="textPrimary"
                    variant="body1"
                  >
                    Todos os nossos projetos Open Source em um só lugar.
                    Incentivamos sua contribuição no projeto que mais lhe
                    agradar.
                  </Typography>
                </div>
                <Image src={`2024/notebook.svg`} />
              </div>
            </Spacing>
            <div>
              <ProjectsList useMansonry={false} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default ProjectsPage
