import React from "react"
import { Grid, Box, useMediaQuery } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core"
import Layout from "@components/layout"
import Spacing from "@components/spacing"
import Tabs from "@components/tabs"
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
  separator: {
    width: "100%",
    marginBottom: "-10px",
  },
  hero: {
    width: 180,
    height: 180,
    float: "right",
    zIndex: 1,
    position: "relative",
    top: -100,
  },
  description: {
    fontSize: "18px",
    lineHeight: "100%",
    color: theme.palette.primary.contrastText,
    fontWeight: 400,
    lineSpacing: "0%"
  },
}))

const ParticipantsPage = () => {
  const classes = useStyles()
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(theme.breakpoints.values.lg)
  )
  return (
    <Layout
      title="Participantes - Globo Hacktoberfest"
      description="Participantes - Globo Hacktoberfest"
      headerTitle="Participantes"
    >
      <Grid
        className={classes.root}
        container
        justifyContent="center"
        alignContent="center"
      >
        <Spacing
          desktop={{ margin: "50px 40px 80px 40px" }}
          smart={{ margin: "50px 40px 80px 40px" }}
        >
          <Grid
            item
            style={{ maxWidth: 1400, minHeight: "61vh", width: isDesktop ? "auto" : "340px" }}
            xs={12}
            lg={12}
          >
            <HeaderTitle 
              title="Participantes"
              description="Navegue e veja quem contribuiu com cada edição."
              imagePath={"2025/participant-hero.svg"}
            />
            <Box style={{ flexGrow: 1 }}>
              <Tabs />
            </Box>
          </Grid>
        </Spacing>
      </Grid>
    </Layout>
  )
}

export default ParticipantsPage
