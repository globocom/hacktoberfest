import React from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "@components/layout"
import Spacing from "@components/spacing"
import Tabs from "@components/tabs"
import { HeaderTitle } from "@components/header"

const useStyles = makeStyles({
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  }
})

const ParticipantsPage = () => {
  
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <Grid container justifyContent="center" alignContent="center">
        <Spacing smart={{ margin: "38px 0px 100px" }}>
          <Grid item xs={10}>
              <Spacing desktop={{margin: "5vh 0px 40px 0px"}} smart={{ margin: "64px 12px 0px 12px" }}>
                <div>
                  <HeaderTitle title={"Participantes"}/>
                </div>
              </Spacing>
              <Spacing desktop={{margin: "40px 0px 10vh 0px"}} smart={{ margin: "24px 12px 40px 12px" }}>
                <Typography
                  component="p"
                  align="left"
                  color="textPrimary"
                  variant="body1"
                >
                  Navegue e veja quem contribuiu com cada edição.
                </Typography>
              </Spacing>
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
