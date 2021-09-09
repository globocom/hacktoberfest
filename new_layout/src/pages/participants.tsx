import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core"
import Spacing from "@components/spacing"

const ParticipantsPage = () => {
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <SEO description="Globo Hacktoberfest" title="Participantes" />
      <Spacing smart={{padding: "0px 40px"}}>

      <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
                >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
          />
      </ListItem>
      </List>
          </Spacing>
    </Layout>
  )
}

export default ParticipantsPage
