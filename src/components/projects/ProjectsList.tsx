import React, { useEffect, useState } from "react"
import {
  CircularProgress,
  Typography,
  useMediaQuery,
  Grid,
  Box,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import RepoLanguages from "@components/repo-languages"
import { ProjectProps } from "@services/projects"
import Masonry from "react-masonry-css"
import _ from "lodash"
import ProjectsService from '@services/projects/Projects.service'


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
    padding: 24,
  },
  masonryGrid: {
    display: "flex",
  },
  masonryGridCol: {
    backgroundClip: "padding-box",
    width: "100% !important",
    "&:not(:last-child)": {
      marginRight: 24,
    },
  },
  homeCard: {
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      marginRight: 12,
      height: "95%",
      width: "95%",
    },
  },
  projectName: {
    color: theme.palette.text.primary,
    fontFamily: "Globotipo Variable",
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: '30.8px',
    borderBottom: "none",
    padding: "16px 32px"
  },
  projectDescription: {
    fontFamily: "Globotipo Variable",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "100%",
    color: theme.palette.text.primary,
    borderBottom: "none",
    letterSpacing: "0%",
  },
  projectTable: {
    backgroundColor: theme.palette.table.background,
    color: theme.palette.primary.light,
  },
  projectImage: {
    borderBottom: "none",
  },
  responsiveImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "none"
  },
  projectButton: {
    width: "103px",
    height: "44px",
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "100%",
    letterSpacing: "0%",
    borderRadius: "40px",
    border: "none",
    background: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
    color: theme.palette.text.primary,
    textTransform: "none",
    opacity: 1,
    transform: "rotate(0deg)",
    position: "relative",
    padding: "1px",
    transition: "all 0.3s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "1px",
      left: "1px",
      right: "1px",
      bottom: "1px",
      borderRadius: "39px",
      background: theme.palette.background.paper,
      zIndex: 1,
      transition: "opacity 0.3s ease",
    },
    "&:hover::before": {
      opacity: 0,
    },
    "&:hover": {
      color: "#FFFFFF",
    },
    "& .MuiButton-label": {
      position: "relative",
      zIndex: 2,
    },
  },
  tableRow: {
    borderBottom: `1px solid #E3E3E3`,
    '&:last-child': {
      borderBottom: "none"
    },
    height: 120,
    "&:hover": { backgroundColor: theme.palette.action.hover }
  },
}))

const excludedLanguages = ["makefile", "css", "shell", "html", "dockerfile"]

const ProjectsList = (props: ProjectListProps) => {
  const classes = useStyles();
  const { listLimit = 20, useMansonry = true } = props
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
        const response: Array<ProjectProps> = await ProjectsService.getInstance().GetProjects()
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
      {loading && (<ProjectsListLoading />)}
      {(!loading && error) && (<ProjectsListError />)}

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
  return <Box display="flex" width="100%" justifyContent="center">
      <CircularProgress aria-label="Carregando projetos" aria-busy="true" />
    </Box>
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
  const { name, description, repo, imageUrl, stats = {}, isHome } = props
  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }
  const items: string[] = _.get(stats, "repository.repoLanguages.items", [])
  let filtered: string[] = []
  if (items.length > 0) {
    filtered = items.filter(
      (item) =>
        item.name && !excludedLanguages.includes(item?.name.toLowerCase())
    )
  }
  const isDesktop = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(theme.breakpoints.values.lg)
  })

  return (
    <React.Fragment>
      <TableRow key={name} className={classes.tableRow}>
        <TableCell component="th" scope="row" align="center" className={isDesktop ?  classes.projectImage : classes.responsiveImage}>
          <RepoLanguages languages={[filtered[0]]} />
          {!isDesktop && name}
        </TableCell>
        {isDesktop && (
          <TableCell component="th" scope="row" className={classes.projectName}>
            {name}
          </TableCell>
        )}
        {isDesktop && (
          <TableCell
            component="th"
            scope="row"
            className={classes.projectDescription}
          >
            {description}
          </TableCell>
        )}

        <TableCell component="th" scope="row" style={{ borderBottom: "none", textAlign: "center" }}>
          <Button
            variant="outlined"
            className={classes.projectButton}
            onClick={() => accessProjectRepo()}
          >
            Acessar
          </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
function ProjectCard(props: ProjectProps) {
  const classes = useStyles()
  const { name, description, repo, imageUrl, stats = {}, isHome } = props
  function accessProjectRepo() {
    window.open(repo, "_blank", "noopener,noreferrer")
  }
  const items: string[] = _.get(stats, "repository.repoLanguages.items", [])
  const filtered = items.filter(
    (item) => item.name && !excludedLanguages.includes(item?.name.toLowerCase())
  )
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        className={
          isHome
            ? [classes.projectCard, classes.homeCard].join(" ")
            : classes.projectCard
        }
      >
        {items.length > 0 && <RepoLanguages languages={[filtered[0]]} />}
        <div>
          <Typography className={classes.projectName} component="p">
            {name}
          </Typography>
        </div>
        <div style={{ marginTop: 16 }}>
          <Typography component="p" className={classes.projectDescription}>
            {description}
          </Typography>
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "flex-start",
            cursor: "pointer",
          }}
          onClick={() => accessProjectRepo()}
        >
          <Typography
            style={{ marginRight: 10, fontWeight: 600 }}
            component="p"
            variant="body1"
          >
            acessar {name}
          </Typography>
          <ArrowForwardIcon color="secondary" />
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
