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
import { makeStyles, Theme } from "@material-ui/core/styles"
import { CircularProgress } from "@material-ui/core"
import { Image } from '@components/image'
import Participants, { ParticipantProps } from "@services/participants"

const EDITIONS = [
  2022,
  2021,
  2020,
  2019
]

const useStyles = makeStyles((theme: Theme) => ({
  tab: {
    minWidth: 68,
    fontSize: "1rem",
  },
  list: {
    borderRadius: 8,
    "&.empty": {
      border: "1px solid white",
      marginTop: 48,
      justifyContent: "center",
      textAlign: "center",
      padding: "48px 80px",
    }
  },
  listItem: {
    padding: 24,
    borderRadius: 8,
    margin: "24px 0",
    border: "1px solid white",
    backgroundColor: "#0d0d0d",
    [theme.breakpoints.up("lg")]: {
      margin: "32px 0",
    },
  },
  complete: {
    color: "#33DD99"
  },
  incomplete:{
    color: "#ff0000"
  },
  gutterRemove:{
    padding: "0 0 16px 0"
  },
  loading: {
    textAlign: "center", 
    marginTop: 10
  }
}))

const ParticipantsTabs = () => {
  const [tabValue, setTabValue] = useState<number>(0)
  const [edition, setEdition] = useState<number>(2022)
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
        indicatorColor="secondary"
        textColor="inherit"
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
              <div className={classes.listItem}>
                <ListItem key={index} className={classes.gutterRemove} alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt={participant.githubUser} src={participant.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`@${participant.githubUser}`}
                  />
                  <a href={`https://github.com/${participant.githubUser}`} target="_blank">
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="GitHub">
                        <Image src="github-logo.svg" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </a>
                </ListItem>
                <Typography component="span" variant="caption"> {participant.total_pull_requests} pull requests </Typography>
                <Typography component="span" variant="caption" className={participant.approved ? classes.complete : classes.incomplete}> • </Typography> 
                <Typography component="span" variant="caption"> {participant.approved ? "desafio completo" : "desafio incompleto"}  </Typography>
               </div>
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
      <Typography variant="h3">
        Nenhum participante fez pull requests ainda. Seja o primeiro!
      </Typography>
    </Box>
  </Box>
)

export default ParticipantsTabs