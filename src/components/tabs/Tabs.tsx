import React, { useState, useEffect } from "react"
import { 
  Avatar,
  IconButton, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemSecondaryAction, 
  ListItemText, 
  Tab, 
  Tabs, 
  Typography,
  Box
} from "@material-ui/core"
import { CircularProgress } from "@material-ui/core"
import { Image } from '@components/image'
import Participants, { ParticipantProps } from "@services/participants"
import { useStyles } from "./Tabs.style";

const EDITIONS = [
  2021,
  2020,
  2019
]

const ParticipantsTabs = () => {
  const [tabValue, setTabValue] = useState<number>(0)
  const [edition, setEdition] = useState<number>(2021)
  const [participants, setParticipants] = useState<Array<ParticipantProps>>([])
  const [loading, setLoading] = useState(false)
  const classes = useStyles()


  useEffect(() => {
    const fetchParticipants = async () => {
      try{
        setLoading(true)
        const response: Array<ParticipantProps> = await Participants.Service.getInstance().GetParticipants(edition)
        setParticipants(response)
      }catch(e){

      }finally {
        setLoading(false)
      }
      
    }
    fetchParticipants()
  }, [edition]);

  const handleChange = (_: any, newTabValue: number) => {
    const newEditionValue = EDITIONS[newTabValue]
    setTabValue(newTabValue)
    setEdition(newEditionValue)
  }
  
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {EDITIONS.map((edition, index) => (
          <Tab key={index} className={classes.tab} label={edition} />
        ))}
      </Tabs>
      {EDITIONS.map((_, index) => (
        <TabPanel key={index} value={tabValue} index={index}>
          {loading && <div className={classes.loading}><CircularProgress /></div>}
          {!loading && (
            participants.length ? (
          <List className={classes.list}>
            {!loading && (
             participants.map && participants.map((participant, index) => (
                <ListItem key={index} alignItems="flex-start" className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar alt={participant.githubUser} src={participant.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`@${participant.githubUser}`}
                    secondary={
                      <Typography
                        component="span"
                        variant="caption"
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
              )))
            }
          </List>) : <EmptyList className={classes.list} />)}
        </TabPanel>
      ))}
    </>
  )
}

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

interface EmptyListProps {
  className: string
}

const EmptyList = ({ className }: EmptyListProps) => (
  <Box display="flex" className={`${className} empty`}>
    <Box component="div">
      <Image src="hero/note.svg" />
      <Typography variant="h3">
        Nenhum participante fez pull requests ainda!<br/>
        Seja o primeiro!
      </Typography>
    </Box>
  </Box>
)

export default ParticipantsTabs