import React, { useState } from "react"
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
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Image } from '@components/image'
import { ParticipantsProps } from "@services/participants"

interface ParticipantsTabsProps {
  dataSource: Array<ParticipantsProps>
}

const useStyles = makeStyles(() => ({
  tab: {
    minWidth: 68,
    fontSize: "1rem",
  },
  list: {
    backgroundColor: "#fff",
    borderRadius: 8,
    border: "1px solid #C8DAF6",
    padding: 8
  },
  listItem: {
    paddingBottom: 2
  }
}))

const ParticipantsTabs = (props: ParticipantsTabsProps) => {
  const { dataSource } = props
  const [tabValue, setTabValue] = useState<number>(0)
  const classes = useStyles()

  const handleChange = (_: any, newTabValue: number) => {
    setTabValue(newTabValue)
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
        {dataSource.map(item => (
          <Tab className={classes.tab} label={item.edition}  />
        ))}
      </Tabs>
      {dataSource.map((item, index) => (
        <TabPanel value={tabValue} index={index}>
          <List className={classes.list}>
            {item.participants.map(participant => (
              <ListItem alignItems="flex-start" className={classes.listItem}>
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
            ))}
          </List>
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

export default ParticipantsTabs