import React, { useState, useEffect } from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { 
  Avatar, 
  Box, 
  Grid, 
  IconButton, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemSecondaryAction, 
  ListItemText, 
  Tab, 
  Tabs, 
  Typography
} from "@material-ui/core"
import Spacing from "@components/spacing"
import { Image } from '@components/image'
import Participants, { ParticipantsProps } from "@services/participants"

interface TabPanelProps {
  children: React.ReactNode,
  value: number,
  index: number,
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...rest}
    >
      {value === index && (
        <React.Fragment>
          {children}
        </React.Fragment>
      )}
    </div>
  )
}

const ParticipantsPage = () => {
  const [tabValue, setTabValue] = useState<number>(0)
  const [participants, setParticipants] = useState<Array<ParticipantsProps>>([])

  useEffect(() => {
    const fetchParticipants = async () => {
      const response: Array<ParticipantsProps> = await Participants.Service.getInstance().GetParticipants()
      setParticipants(response)
    }
    fetchParticipants()
  }, []);

  const handleChange = (_: any, newTabValue: number) => {
    setTabValue(newTabValue);
  };
  
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <SEO description="Globo Hacktoberfest" title="Participantes" />
      <Grid container justifyContent="center" alignContent="center">
        <Spacing smart={{ margin: "38px 0px 100px" }}>
          <Grid item xs={11} md={6} lg={4}>
            <Box style={{ flexGrow: 1 }}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                {participants.map(item => (
                  <Tab style={{ minWidth: 68, fontSize: "1rem" }} label={item.edition}  />
                ))}
              </Tabs>
              {participants.map((item, index) => (
                <TabPanel value={tabValue} index={index}>
                  <List style={{ backgroundColor: "#fff", borderRadius: 8, border: "1px solid #C8DAF6", padding: 8 }}>
                    {item.participants.map(participant => (
                      <ListItem alignItems="flex-start" style={{ paddingBottom: 2 }}>
                        <ListItemAvatar>
                          <Avatar alt={participant.githubUser} src={participant.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={`@${participant.githubUser}`}
                          secondary={
                            <Typography
                              component="span"
                              variant="body2"
                              >
                              {participant.total_pull_requests} pull requests • {participant.approved ? "desafio completo" : "desafio incompleto"} 
                            </Typography>
                          }
                        />
                        <a href={`https://github.com/${participant.githubUser}`} target="_blank">
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="GitHub">
                              <Image src="github-logo.svg" />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </a>
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
              ))}
            </Box>
          </Grid>
        </Spacing>
      </Grid>
    </Layout>
  )
}

export default ParticipantsPage
