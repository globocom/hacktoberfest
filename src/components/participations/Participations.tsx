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
    flexDirection: 'row',
    backgroundColor:"#17042B",
    marginTop:24,
    marginRight:32,
    marginBottom: 30,
    height:400,
    width:"100%",
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      width:200,
    },
  },

  conatinerPicures: {
    display:"flex", 
    flexDirection: 'column',
    flex:1,
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      flexDirection:"row", 
    },
  },
  pictureContainer: {
    textAlign: "center",
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    height: '280px'
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
      <div className={classes.pictureContainer} style={{ backgroundImage: `url("/${props.edition}.png")`}} />
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
    <Spacing
        desktop={{ margin: "100px 0px 0px 0px" }}
        smart={{ margin: "100px 0px 0px 0px" }}
        >
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
      
        <HeaderTitle title={"Histórico de Participação"} description='Relembre suas participações no Hacktoberfest.' />
        <Grid  xs={12} md={12} className={classes.conatinerPicures}>
          {editions.map((edition: string, index: number) => <Grid key={index} item className={classes.root}> <EditionElement edition={edition} editionData={props.user.editions[edition]} /> </Grid>)}
        </Grid>
      </Grid >
    </Spacing>
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
