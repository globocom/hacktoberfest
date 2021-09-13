import React, { useState, useEffect } from "react"
import { Grid, Box } from "@material-ui/core"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Spacing from "@components/spacing"
import Participants, { ParticipantsProps } from "@services/participants"
import Tabs from "@components/tabs"

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState<Array<ParticipantsProps>>([])

  useEffect(() => {
    const fetchParticipants = async () => {
      const response: Array<ParticipantsProps> = await Participants.Service.getInstance().GetParticipants()
      setParticipants(response)
    }
    fetchParticipants()
  }, []);
  
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <SEO description="Globo Hacktoberfest" title="Participantes" />
      <Grid container justifyContent="center" alignContent="center">
        <Spacing smart={{ margin: "38px 0px 100px" }}>
          <Grid item xs={11} md={6} lg={4}>
            <Box style={{ flexGrow: 1 }}>
              <Tabs dataSource={participants} />
            </Box>
          </Grid>
        </Spacing>
      </Grid>
    </Layout>
  )
}

export default ParticipantsPage
