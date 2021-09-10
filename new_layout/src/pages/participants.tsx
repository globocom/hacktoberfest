import React, { useState, useEffect } from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { Image } from '@components/image'

const ParticipantsPage = () => {
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <SEO description="Globo Hacktoberfest" title="Participantes" />
      <Grid container direction="column" justifyContent="center" alignItems="flex-start" alignContent="center">
        <Spacing smart={{margin: "64px 0px 24px"}}>
          <Grid item xs={6} md={6}>
            <List style={{ minWidth: 700 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="joserenatosilva" src="https://avatars0.githubusercontent.com/u/11424945?v=4" />
                </ListItemAvatar>
                <ListItemText
                  primary="@joserenatosilva"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      >
                      15 pull requests • desafio completo
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="GitHub">
                    <Image src="github-logo.svg" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="joserenatosilva" src="https://avatars0.githubusercontent.com/u/11424945?v=4" />
                </ListItemAvatar>
                <ListItemText
                  primary="@joserenatosilva"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      >
                      15 pull requests • desafio completo
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="GitHub">
                    <Image src="github-logo.svg" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Spacing>
      </Grid>
      
    </Layout>
  )
}

export default ParticipantsPage
