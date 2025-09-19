import React, { useState, useEffect } from "react"
import {
  Avatar,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { CircularProgress } from "@material-ui/core"
import { Image } from "@components/image"
import Participants, { ParticipantProps } from "@services/participants"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const EDITIONS = [2025, 2024, 2023, 2022, 2021, 2020, 2019]

const useStyles = makeStyles((theme: Theme) => ({
  tab: {
    minWidth: 68,
    fontSize: "22px",
    fontWeight: 900,
    lineHeight: "100%",
    letterSpacing: "0%",
    paddingRight: 40,
  },
  list: {
    "&.empty": {
      border: "1px solid white",
      margin: "48px 0px",
      justifyContent: "center",
      textAlign: "center",
      padding: "48px 80px",
    },
  },
  listItem: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    width: "100%",
    height: "110px",
    borderRadius: 0,
    border: "1px solid #C4C4C4"
  },
  gutterRemove: {
    padding: "0 0 16px 0",
  },
  loading: {
    textAlign: "center",
    marginTop: 20,
  },
  githubUser: {
    fontSize: 20,
    fontWeight: 700,
    fontStyle: "bold",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#000000",
  },
  pullRequest: {
    fontSize: 15,
    fontWeight: 400,
    fontStyle: "bold",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#383838",
  },
  listItemText: {
    marginLeft: 16,
  }
}))

const ParticipantsTabs = () => {
  const [tabValue, setTabValue] = useState<number>(0)
  const [edition, setEdition] = useState<number>(2025)
  const [participants, setParticipants] = useState<Array<ParticipantProps>>([])
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setLoading(true)
        const response: Array<ParticipantProps> = await Participants.Service.getInstance().GetParticipants(
          edition
        )
        setParticipants(response)
      } catch (e) {
      } finally {
        setLoading(false)
      }
    }
    fetchParticipants()
  }, [edition])

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
        style={{marginBottom: 20, borderBottom: "1px solid #361560"}}
        TabIndicatorProps={{
          style: {
            backgroundColor: "secondary",
          },
        }}
      >
        {EDITIONS.map((edition, index) => (
          <Tab key={index} className={classes.tab} label={edition} />
        ))}

      </Tabs>
      {EDITIONS.map((_, index) => (
        <TabPanel key={index} value={tabValue} index={index}>
          {loading && (
            <div className={classes.loading}>
              <CircularProgress color='secondary' />
            </div>
          )}
          {!loading &&
            (participants.length ? (
              <Grid container>
                {!loading &&
                  participants.map &&
                  participants.map((participant, index) => (
                    <UserCard
                      key={index}
                      participant={participant} />
                  ))}
              </Grid>
            ) : (
              <EmptyList className={classes.list} />
            ))}
        </TabPanel>
      ))}
    </>
  )
}

interface TabPanelProps {
  children: React.ReactNode
  value: number
  index: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props

  return (
    <div role="tabpanel" hidden={value !== index} {...rest}>
      {value === index && <React.Fragment>{children}</React.Fragment>}
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

interface UserCardProps {
  participant: ParticipantProps,
  key?: number
}

const UserCard = ({ participant, key }: UserCardProps) => {
  const classes = useStyles()
  return (
    <Grid container item xs={12} sm={12} md={6} lg={4} xl={4} key={key}>
      <Card className={classes.listItem}>
        <CardHeader
          avatar={
            <Avatar
              alt={participant.githubUser}
              src={participant.avatar}
            />
          }
            action={
              <a
                href={`https://github.com/${participant.githubUser}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton aria-label="GitHub">
                  <Image src="github-logo.png" width={24} height={24} />
                </IconButton>
              </a>
            }
          title={`@${participant.githubUser}`}
          subheader={
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}><Typography component="span" variant="caption" className={classes.pullRequest}>
              {" "}
              {participant.total_pull_requests} pull requests{" "}
            </Typography>
            <Typography component="span" variant="caption" className={classes.pullRequest}>
              {" "}
              {participant.approved
                ? "desafio completo"
                : "desafio incompleto"}{" "}
            </Typography>
            <FiberManualRecordIcon htmlColor={participant.approved ? "#33DD99" : "#ff0000"} />
            </div>
          }
        />
      </Card>
    </Grid>
    )
}

export default ParticipantsTabs
