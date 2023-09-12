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


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
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
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      marginRight: 12,
      height: "95%",
      width: "95%"
    }
  },
  projectName: {
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '30.8px',
  },
  projectDescription: {
    fontFamily: "Globotipo Variable",
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '25.2px',
    color: theme.palette.primary.light,
  },
  projectTable: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
  },
  projectImage: {
    width: "50px",
  },
  projectButton: {
    color: theme.palette.text.primary,
    width: "176px",
    height: "70px",
    borderRadius: "1px solid",
    fontFamily: "Globotipo Variable",
    fontSize: '16px',
    fontWeight: 700,
  }
}))

const excludedLanguages = [
  "makefile",
  "css",
  "shell",
  "html",
  "dockerfile"
]

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
          <TableContainer component={Paper}>
            <Table aria-label="simple table" className={classes.projectTable}>
              <TableBody>
                {projects.map((project, index) => {
                  return (
                    <ProjectTableRow key={index} {...project} />
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
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

function ProjectTableRow(props: ProjectProps) {
  const classes = useStyles()
  const { name, description, repo, imageUrl, stats = {}, isHome } = props;
  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }
  const items:string[] = _.get(stats, 'repository.repoLanguages.items', []);
  let filtered:string[] = []
  if (items.length > 0) {
    filtered = items.filter(item => item.name && !excludedLanguages.includes(item?.name.toLowerCase()));
  }
  return (
    <React.Fragment>
      <TableRow key={name}>
        <TableCell component="th" scope="row" align="center" className={classes.projectImage}>
        <RepoLanguages languages={[filtered[0]]} />
        </TableCell>
        <TableCell component="th" scope="row" className={classes.projectName}>{name}</TableCell>
        <TableCell component="th" scope="row" className={classes.projectDescription}>{description}</TableCell>
        <TableCell component="th" scope="row">
          <Button variant="outlined" color="primary" className={classes.projectButton} onClick={() => accessProjectRepo()}>ACESSAR</Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
function ProjectCard(props: ProjectProps) {
  const classes = useStyles()
  const { name, description, repo, imageUrl, stats = {}, isHome } = props;
  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }
  const items:string[] = _.get(stats, 'repository.repoLanguages.items', []);
  const filtered = items.filter(item => item.name && !excludedLanguages.includes(item?.name.toLowerCase()));
  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="space-between" className={ isHome ? [classes.projectCard, classes.homeCard].join(" ") : classes.projectCard}>
          {items.length > 0 && <RepoLanguages languages={[filtered[0]]} /> }
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
