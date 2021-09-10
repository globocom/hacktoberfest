import React, { useState, useEffect } from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Avatar, Box, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Tab, Tabs, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"
import { Image } from '@components/image'
import { withStyles } from "@material-ui/core/styles"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <p>{children}</p>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const ParticipantsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <SEO description="Globo Hacktoberfest" title="Participantes" />
      <Grid container direction="column" justifyContent="center" alignItems="flex-start" alignContent="center">
        <Spacing smart={{margin: "64px 0px 24px"}}>
          <Grid item xs={6} md={6}>
          <Box style={{ flexGrow: 1 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              style={{ minWidth: 700 }}
            >
              <Tab style={{ minWidth: 68, fontSize: "1rem" }} label="2021"  />
              <Tab style={{ minWidth: 68, fontSize: "1rem" }} label="2020"  />
              <Tab style={{ minWidth: 68, fontSize: "1rem" }} label="2019" />
              <Tab style={{ minWidth: 68, fontSize: "1rem" }} label="2018" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box>
            <List style={{ backgroundColor: "#fff", borderRadius: 8, border: "1px solid #C8DAF6", padding: 8 }}>
              <ListItem alignItems="flex-start" style={{ paddingBottom: 2 }}>
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
              <ListItem alignItems="flex-start" style={{ paddingBottom: 2 }}>
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
            </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                  nha
            </TabPanel>
            <TabPanel value={value} index={2}>
                  nha
            </TabPanel>
            <TabPanel value={value} index={3}>
                  nha
            </TabPanel>
          </Box>
          </Grid>
        </Spacing>
      </Grid>
      
    </Layout>
  )
}

export default ParticipantsPage
