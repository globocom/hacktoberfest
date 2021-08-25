import React from 'react'
import { Grid, Typography } from '@material-ui/core'


//Internal
import { UserProps, Participation } from '@services/user'
import Spacing from '@components/spacing'
import { makeStyles } from '@material-ui/core/styles'
import EmojiEventIcon from '@material-ui/icons/EmojiEvents'
import { Image } from '@components/image'


const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '15px',
        backgroundColor: 'rgba(33, 22, 128, 0.04)'
    },
    pictureContainer: {
        textAlign: "center",
    },
    trophy: {
        width: 100,
    }
  }))
  

const EditionElement = (props: EditionProps) => {
    const classes = useStyles()
    return (
        <Grid className={classes.root} container spacing={2} >
            <Grid item xs={12} md={3}>
                <div className={classes.pictureContainer}>
                    <Image className={classes.trophy} src="trophy-participants.svg"/>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <Spacing smart={{margin: "8px 0px"}}>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid item>
                            <Typography style={{fontWeight: 600}} component="p" variant="body1">
                                Edição {props.edition}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <EmojiEventIcon/>
                        </Grid>
                    </Grid>
                </Spacing>
                <Typography component="p" variant="body2">{props.participation?.opened} Prs Reallizados, {props.participation?.merged} PRs Aprovados</Typography>
            </Grid>
        </Grid>
    )
}



const ParticipationHistory = (props:ParticipationHistoryProps) => {
    const { user  } =  props
    const editions: Array<string> = Object.keys(user.hacktoberfest?.edition || [])
    return (
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Spacing smart={{margin: "0px 0px 24px"}}>
                        <Typography component="h2" color="secondary" variant="h2">Histórico de Participação</Typography>
                    </Spacing>
                </Grid>
                <Grid item xs={12} md={12}>
                    { editions.map((edition: string, index: number) => <EditionElement key={index} edition={edition} participation={user.hacktoberfest?.edition[edition].progress} />)}
                </Grid>
            </Grid>
    )
}


interface EditionProps {
    edition: string,
    participation?: Participation
}


interface ParticipationHistoryProps {
    user: UserProps
}


export default ParticipationHistory
