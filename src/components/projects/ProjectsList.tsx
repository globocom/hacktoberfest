import React, { useEffect, useState } from "react"
import { Button, CircularProgress, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Spacing from "@components/spacing"
import RepoLanguages from "@components/repo-languages"
import Projects, { ProjectProps } from "@services/projects"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  projectName: {
    fontSize: 56,
    marginRight: 30,
    lineHeight: 1,
  },
  rounded: {
    borderRadius: 50,
    fontWeight: "normal",
    boxShadow: "none",
    textTransform: "lowercase",
    [theme.breakpoints.up('md')]: {
        display: "block",
        float: "right"
    }
  },
  divider: {
    width: "100%",
    borderTop: `1px solid #090055;`,
    padding: '32px 0px',
  },
  bottomDivider: {
    width: "100%",
    borderTop: `1px solid #E0E0E0;`,
    padding: "24px 0px",
  },
}))

function ProjectsList(props: ProjectListProps) {
  const { listLimit = 0 } = props
  const [projects, setProjects] = useState<Array<ProjectProps>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true)
      try{
        const response: Array<ProjectProps> = await Projects.Service.getInstance().GetProjects()
        if (response) {
          if (listLimit) response.splice(listLimit)
          setProjects(response)
        } else setError(true)
        setLoading(false)
      }catch(e: any){
        console.error(e.message)
      }
    }
    fetchProjects()
  }, [])

  return (
    <Spacing smart={{ margin: "0px 0px 40px" }}>
      <Grid container direction="column">
        <Grid item xs={12}>
          {loading ? (
            <ProjectsListLoading />
          ) : error ? (
            <ProjectsListError />
          ) : (
            projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />
            })
          )}
        </Grid>
      </Grid>
    </Spacing>
  )
}

function ProjectsListLoading() {
  return <CircularProgress />
}

function ProjectsListError() {
  return (
    <Typography component="p" align="center" color="textPrimary" variant="body1">
      Ocorreu um erro ao exibir a lista de projetos. Por favor, tente novamente.
    </Typography>
  )
}

function ProjectCard(props: ProjectProps) {
  const classes = useStyles()
  const { name, description, repo, imageUrl, languages } = props
  const { name: imageName, thumborUrl } = imageUrl
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }

  return (
    <React.Fragment>
      <div className={classes.divider}>
        {!isDesktop && <img src={thumborUrl} alt={imageName} height={40} /> }
          <Grid container alignItems="center" alignContent="space-between" justifyContent="space-between">
              <Grid item xs={12}>
                <Typography color="textPrimary" variant="h1" component="p">
                  {name}
                  {isDesktop && <img src={thumborUrl} alt={imageName} height={40} />}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Spacing smart={{ margin: "16px 0px" }}>
                    <Grid item xs={12} md={8}>
                          <Typography component="p" color="textPrimary" variant="body1">
                            {description}
                          </Typography>
                          <Spacing smart={{ margin: "16px 0px 0px" }}>
                            <Grid>
                              <RepoLanguages languages={languages} />
                            </Grid>
                          </Spacing>
                    </Grid>
                  </Spacing>
                  <Grid item xs={12} md={2}>
                    <Button
                      className={classes.rounded}
                      color="secondary"
                      size="large"
                      variant="contained"
                      onClick={accessProjectRepo}
                      onAuxClick={accessProjectRepo}
                    >
                      <b>acessar</b>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
      </div>
    </React.Fragment>
  )
}

interface ProjectListProps {
  listLimit?: number
}

export default ProjectsList
