import React, { Fragment } from "react"
import { Button, Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Spacing from "@components/spacing"
import Layout from "@components/layout"
import SEO from "@components/seo"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  rounded: {
    borderRadius: 50,
    fontWeight: "normal",
  },
}))

const ProjectsPage = () => {
  const projects = [
    {
      id: "af0f18af-6636-4f47-a0f9-b62d0f0bd9a8",
      name: "huskyCI",
      repo: "https://github.com/globocom/huskyCI",
      imageUrl: {
        name: "secDevLabs teste upload",
        rightsHolder: "teste globo",
        thumborUrl:
          "https://s2.glbimg.dev.globoi.com/5RwLARCdKp91GY3Cs9WqLq0oKSw=/600x0/filters:quality(70)/i.s3.glbimg.dev.globoi.com/v1/AUTH_c0aabc33d97445a38d3aec7bea276fb8/internal_photos/bs/2021/m/g/3AddXrQ66QD64qMhKhVA/secdevlabs-logo-teste.png",
      },
      description: "Performing security tests inside your CI.",
    },
    {
      id: "07d361d0-c262-493f-9f8b-2dfc97b01766",
      name: "Megadraft",
      site: "http://megadraft.io/",
      repo: "https://github.com/globocom/megadraft",
      imageUrl: {
        name: "Megadraft",
        rightsHolder: "Globo",
        thumborUrl:
          "https://s2.glbimg.dev.globoi.com/9ZaRtejoKMkg_EpACOSKi9SavXI=/600x0/filters:quality(70)/i.s3.glbimg.dev.globoi.com/v1/AUTH_c0aabc33d97445a38d3aec7bea276fb8/internal_photos/bs/2021/V/W/r3RPR8TlaaiwxekZ400w/megadraft.png",
      },
      docs: "http://megadraft.io/#/docs/overview",
      description:
        "Megadraft is a Rich Text editor built on top of Facebook's Draft.JS featuring a nice default base of components and extensibility",
    },
    {
      id: "2c75492b-4c6c-4b39-9a03-e09f096a109f",
      name: "Globo Network API Web UI",
      repo: "https://github.com/globocom/GloboNetworkAPI-Webui",
      imageUrl: {
        name: "Megadraft",
        rightsHolder: "Globo",
        thumborUrl:
          "https://s2.glbimg.dev.globoi.com/9ZaRtejoKMkg_EpACOSKi9SavXI=/600x0/filters:quality(70)/i.s3.glbimg.dev.globoi.com/v1/AUTH_c0aabc33d97445a38d3aec7bea276fb8/internal_photos/bs/2021/V/W/r3RPR8TlaaiwxekZ400w/megadraft.png",
      },
      docs:
        "https://github.com/globocom/GloboNetworkAPI-WebUI/blob/master/README.md",
      description:
        "This web tool helps network administrator manage and automate networking resources (routers, switches and load balancers) and document logical and physical networking.",
    },
    {
      id: "68e8adf6-c06a-430a-8a43-fff8c464c25e",
      name: "secDevLabs",
      repo: "https://github.com/globocom/secDevLabs",
      imageUrl: {
        name: "secDevLabs Logo",
        rightsHolder: "Globo.com",
        thumborUrl:
          "https://s2.glbimg.dev.globoi.com/BIKkMHKILIi3tDHEvQ_TCOb5X9Y=/600x0/filters:quality(70)/i.s3.glbimg.dev.globoi.com/v1/AUTH_c0aabc33d97445a38d3aec7bea276fb8/internal_photos/bs/2021/E/T/Arpn2rQH6iGyKSAnfdpg/secdevlabs-logo.png",
      },
      docs: "https://github.com/globocom/secDevLabs/blob/master/README.md",
      description:
        "A laboratory for learning secure web and mobile development in a practical manner.",
    },
  ]

  return (
    <Layout
      title="Projetos - Globo Hacktoberfest"
      description="Projetos - Globo Hacktoberfest"
      headerTitle="Projetos"
    >
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
      {projects.map((project, index) => {
        const { name, description, repo, imageUrl } = project

        return (
          <ProjectCard
            name={name}
            description={description}
            repoUrl={repo}
            image={imageUrl}
          />
        )
      })}
    </Layout>
  )
}

function ProjectCard(props: ProjectCardProps) {
  const classes = useStyles()
  const { name, description, repoUrl, image } = props
  const { thumborUrl } = image

  function projectAccessOnClick() {
    window.open(repoUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Fragment>
      <Typography color="primary" variant="h1">
        {name}
      </Typography>
      <img src={thumborUrl} alt="project image" height={50} />
      <Typography component="p" color="primary" variant="body1">
        {description}
      </Typography>
      <Button
        className={classes.rounded}
        color="secondary"
        variant="contained"
        onClick={projectAccessOnClick}
      >
        acessar
      </Button>
    </Fragment>
  )
}

interface ProjectCardProps {
  name: String
  description: String
  projectUrl: String
  image: Object
}

export default ProjectsPage
