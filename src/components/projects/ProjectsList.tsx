import React, { useEffect, useState } from "react"
import {
  CircularProgress,
  Typography,
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import RepoLanguages from "@components/repo-languages"
import Projects, { ProjectProps } from "@services/projects"
import Masonry from 'react-masonry-css'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  projectName: {
    fontSize: '2rem',
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
    boxShadow: "0px 0px 4px #FFFFFF, 0px 4px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(16px)",
    borderRadius: "24px",
    margin: 12,
    padding: 24
  },
  masonryGrid: {
    display: "flex",
  },
  masonryGridCol: {
      backgroundClip: "padding-box",
      width: "100% !important"
  }
}))

const ProjectsList = (props: ProjectListProps) => {
  const classes = useStyles();
  const { listLimit = 0 } = props
  const [projects, setProjects] = useState<Array<ProjectProps>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
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
       {loading ? (
            <ProjectsListLoading />
          ) : error ? (
            <ProjectsListError />
          ) : (
            <Masonry
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
  const { name, description, repo, imageUrl, languages } = props;
  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }

  return (
    <React.Fragment>
      <div className={classes.projectCard}>
          <RepoLanguages languages={[languages[0]]} />
          <div>
            <Typography className={classes.projectName} component="p">{name}</Typography>
          </div>
          <div style={{marginTop: 16}}>
            <Typography component="p">{description}</Typography>
          </div>
          <div style={{marginTop: 40, display: "flex", justifyContent: "flex-start", cursor: "pointer"}} onClick={() => accessProjectRepo()}>
            <Typography style={{marginRight: 10}} component="p" variant="body1">acessar {name}</Typography>
            <ArrowRightAltIcon/>
          </div>
      </div>
    </React.Fragment>
  )
}

interface ProjectListProps {
  listLimit?: number
}

export default ProjectsList
