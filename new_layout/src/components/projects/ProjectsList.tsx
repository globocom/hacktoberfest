import React, { useEffect, useState } from "react"
import { Button, CircularProgress, Grid, Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Spacing from "@components/spacing"
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
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  bottomDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    margin: "32px 0px",
  },
}))

function ProjectsList(props: ProjectListProps) {
  const { listLimit = 0 } = props
  const [projects, setProjects] = useState<Array<ProjectProps>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const classes = useStyles()

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
      }catch(e){
        console.error(e.message)
      }
    }
    fetchProjects()
  }, [])

  return (
    <Spacing smart={{ margin: "0px 0px 40px" }}>
      <Grid container direction="column">
        <Grid item xs={8} md={12}>
          <div className={classes.topDivider} />
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
  const { name, description, repo, imageUrl } = props
  const { name: imageName, thumborUrl } = imageUrl

  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }

  return (
    <React.Fragment>
      <Spacing smart={{margin: "24px 0px"}}>
              <img src={thumborUrl} alt={imageName} height={40} />
          </Spacing>
      <Grid container alignItems="flex-start">
          <Grid item xs={12} md={9}>
            <Typography color="textPrimary" className={classes.projectName}>
              {name}
            </Typography>
            <Spacing smart={{ margin: "16px 0px 0px" }}>
              <Typography component="p" color="textPrimary" variant="body1">
                {description}
              </Typography>
            </Spacing>
          </Grid>
          <Spacing smart={{margin: "24px 0px"}}>
            <Grid item xs={2} md={3}>
              <Button
                className={classes.rounded}
                color="secondary"
                variant="contained"
                onClick={accessProjectRepo}
              >
                acessar
              </Button>
            </Grid>
          </Spacing>
      </Grid>
      <div className={classes.bottomDivider} />
    </React.Fragment>
  )
}

interface ProjectListProps {
  listLimit?: number
}

export default ProjectsList
