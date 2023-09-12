import React from 'react'
import { Grid, Typography } from '@material-ui/core'


//Internal
import { UserProps, Edition } from '@services/user'
import Spacing from '@components/spacing'
import { makeStyles, Theme } from '@material-ui/core/styles'
import EmojiEventIcon from '@material-ui/icons/EmojiEvents'
import { HeaderTitle } from "@components/header"




const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'rgba(33, 22, 128, 0.04)',
    border: '2px solid #fff',
    borderRadius: 24,
    flexDirection: 'column',
    boxShadow: "0px 0px 4px #FFFFFF, 0px 4px 4px rgba(255, 255, 255, 0.25)",
    marginBottom: 30,
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      maxWidth: '28vw',
    },
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      maxWidth: '32%',
    }

  },
  pictureContainer: {
    textAlign: "center",
    overflow: 'hidden',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundImage: "url(\"https://s2-backstage.glbimg.com/CM9pjJibR0jIa62tA-9j6PdHazw=/https://s3.glbimg.com/v1/AUTH_8b507d480c314f97a3b4b28346d025f5/hacktoberfest/Topo.png\")",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '18vh',
    [theme.breakpoints.up("md")]: {
      height: '16vh'
    },
  },

  trophy: {
    width: 100,
  },
  fontCall: {
    fontSize: "2.25rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    }
  },
  subFontCall: {
    fontSize: "1.125rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    }
  }
}))


const EditionElement = (props: EditionProps) => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.pictureContainer} />
      <Spacing smart={{ margin: "24px" }}>
        <div>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item>
              <Typography style={{ fontWeight: 600 }} component="p" variant="body1">
                Edição {props.edition}
              </Typography>
            </Grid>
            <Grid item>
              <EmojiEventIcon />
            </Grid>
          </Grid>
          <Typography component="p" variant="body2"><b>{props.editionData?.totalMergeRequests || 0}</b> PRs Realizados </Typography>
          <Typography component="p" variant="body2"><b>{props.editionData?.totalMergeRequestsMerged || 0}</b> PRs Aprovados</Typography>
        </div>
      </Spacing>
    </div>
  )
}



const ParticipationHistory = (props: ParticipationHistoryProps) => {
  const { user } = props
  const classes = useStyles()
  const editions: Array<string> = Object.keys(user.editions || {}) || []

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={10} md={12}>
        <HeaderTitle title={"Participações"} />
      </Grid>
      <Grid item xs={10} md={12}>
        <Typography component="h3" variant="h3">Relembre suas participações no Hacktoberfest.</Typography>
      </Grid>
      {editions.map((edition: string, index: number) => <Grid xs={10} md={4} key={index} item className={classes.root}> <EditionElement edition={edition} editionData={props.user.editions[edition]} /> </Grid>)}
    </Grid >
  )
}


interface EditionProps {
  edition: string,
  editionData?: Edition
}


interface ParticipationHistoryProps {
  user: UserProps
}


export default ParticipationHistory
