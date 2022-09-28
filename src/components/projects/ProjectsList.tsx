import React, { useEffect, useState } from "react"
import {
  CircularProgress,
  Typography,
  Grid
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import RepoLanguages from "@components/repo-languages"
import Projects, { ProjectProps } from "@services/projects"
import Masonry from 'react-masonry-css'
import _ from 'lodash'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  projectName: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: '48px',
  },
  rounded: {
    borderRadius: 24,
    fontWeight: "normal",
    boxShadow: "none",
    textTransform: "lowercase",
    [theme.breakpoints.up("md")]: {
      display: "block",
      float: "right",
    },
  },
  projectCard: {
    border: "2px solid #FFFFFF",
    boxShadow: "0px 0px 4px #FFFFFF, 0px 4px 4px rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(16px)",
    borderRadius: "24px",
    marginBottom: 24,
    padding: 24
  },
  masonryGrid: {
    display: "flex",
  },
  masonryGridCol: {
      backgroundClip: "padding-box",
      width: "100% !important",
      '&:not(:last-child)':{
        marginRight: 24
      }
  },
  homeCard: {
    marginRight: 12,
    height: "95%",
    width: "95%"
  },
  projectDescription: {
    lineHeight: '24px'
  },
}))

const ProjectsList = (props: ProjectListProps) => {
  const classes = useStyles();
  const { listLimit = 0, useMansonry = true } = props
  const [projects, setProjects] = useState<Array<ProjectProps>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const breakpointColumnsObj = {
    default: 3,
    1620: 3,
    1024: 2,
    768: 1,
    320: 1
  };
  

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true)
      try {
        const response: Array<ProjectProps> = await Projects.Service.getInstance().GetProjects()
        if (response) {
          if (listLimit) response.splice(listLimit)
          setProjects(response)
        } else setError(true)
        setLoading(false)
      } catch (e: any) {
        console.error(e.message)
      }
    }
    fetchProjects()
  }, [])

  return (
    <>
      {loading && ( <ProjectsListLoading /> ) }
      {(!loading && error) && ( <ProjectsListError /> ) }

      {(!loading && !error && !useMansonry && 
        <Grid container> 
          {projects.map((project, index) => {
                return <Grid item xs={12} md={4} lg={4} xl={2} > 
                  <ProjectCard key={index} {...project} isHome={true} />
                </Grid>
          })}
        </Grid>
      )}

      
      {(!loading && !error && useMansonry && <Masonry
              breakpointCols={breakpointColumnsObj}
              className={classes.masonryGrid}
              columnClassName={classes.masonryGridCol}>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />
                  })
                }
            </Masonry>
      )}

    </>
  )
}

function ProjectsListLoading() {
  return <CircularProgress />
}

function ProjectsListError() {
  return (
    <Typography
      component="p"
      align="center"
      color="textPrimary"
      variant="body1"
    >
      Ocorreu um erro ao exibir a lista de projetos. Por favor, tente novamente.
    </Typography>
  )
}

function ProjectCard(props: ProjectProps) {
  const classes = useStyles()
  const { name, description, repo, imageUrl, stats = {}, isHome } = props;
  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }
  const items:string[] = _.get(stats, 'repository.repoLanguages.items', []);
  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="space-between" className={ isHome ? [classes.projectCard, classes.homeCard].join(" ") : classes.projectCard}>
          {items.length > 0 && <RepoLanguages languages={[items[0]]} /> }
          <div>
            <Typography className={classes.projectName} component="p">{name}</Typography>
          </div>
          <div style={{marginTop: 16}}>
            <Typography component="p" className={classes.projectDescription}>{description}</Typography>
          </div>
          <div style={{marginTop: 40, display: "flex", justifyContent: "flex-start", cursor: "pointer"}} onClick={() => accessProjectRepo()}>
            <Typography style={{marginRight: 10, fontWeight: 600}} component="p" variant="body1">acessar {name}</Typography>
            <ArrowForwardIcon color="secondary"/>
          </div>
      </Grid>
    </React.Fragment>
  )
}

interface ProjectListProps {
  listLimit?: number
  useMansonry?: boolean
}

export default ProjectsList
