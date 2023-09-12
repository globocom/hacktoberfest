import React from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core"
import { Image } from "@components/image"
import Layout from "@components/layout"
import Spacing from "@components/spacing"
import Tabs from "@components/tabs"
import { HeaderTitle } from "@components/header"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  topDivider: {
    width: "100%",
    borderBottom: `1px solid #E0E0E0;`,
    marginBottom: 32,
  },
  separator: {
    width: '100%',
    marginBottom: '-10px'
  },
}))

const ParticipantsPage = () => {
  const classes = useStyles()
  return (
    <Layout title="Participantes - Globo Hacktoberfest" description="Participantes - Globo Hacktoberfest" headerTitle="Participantes">
      <Grid className={classes.root} container justifyContent="center" alignContent="center">
        <Spacing desktop={{ margin: "160px 0px 0px 0px" }} smart={{ margin: "40px 32px" }}>
          <Grid item style={{ maxWidth: 944, minHeight: '61vh' }} xs={12} lg={6}>
            <HeaderTitle title={"Participantes"} />
            <Spacing desktop={{ margin: "40px 0px 10vh 0px" }} smart={{ margin: "24px 0 40px 0" }}>
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
        <Image className={classes.separator} src={`2023/separator.svg`} />
      </Grid>
    </Layout>
  )
}

export default ParticipantsPage
