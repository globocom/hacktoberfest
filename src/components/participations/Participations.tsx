import React from 'react'
import { Grid, Typography } from '@material-ui/core'


//Internal
import { UserProps, Participation } from '@services/user'
import Spacing from '@components/spacing'
import { makeStyles, Theme } from '@material-ui/core/styles'
import EmojiEventIcon from '@material-ui/icons/EmojiEvents'
import { Image } from '@components/image'
import LoadingButton from '@components/loading-button'



const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: 'rgba(33, 22, 128, 0.04)',
        border: '1px solid #fff',
        borderRadius: 24,
        flexDirection: 'column',
        maxWidth: 300,
        [theme.breakpoints.up("md")]: {

        },
        height: 269
        
    },
    pictureContainer: {
        textAlign: "center",
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundImage: "url(\"https://s3.glbimg.com/v1/AUTH_8b507d480c314f97a3b4b28346d025f5/hacktoberfest/Topo.png\")",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '18vh',
        [theme.breakpoints.up("md")]: {
            height: '16vh'
        },
    },
    trophy: {
        width: 100,
    }
  }))


const EditionElement = (props: EditionProps) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.pictureContainer}/>
            <Spacing smart={{margin: "8px 0px"}}>
                <div>
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
                    <Typography component="p" variant="body2"><b>{props.participation?.opened}</b> PRs Realizados </Typography>
                    <Typography component="p" variant="body2"><b>{props.participation?.merged}</b> PRs Aprovados</Typography>
                </div>
            </Spacing>
        </div>
    )
}



const ParticipationHistory = (props:ParticipationHistoryProps) => {
    const { user  } =  props
    const classes = useStyles()
    const editions: Array<string> = Object.keys(user.hacktoberfest || {}) || []

    return (
        <>
        <Grid container>
            <Grid item xs={12}>
                <Typography>Histórico de Participação</Typography>
            </Grid>
        </Grid>
        <Grid container justifyContent='space-between'>
            { editions.map((edition: string, index: number) => <Grid sm={3} xs={12} md={3} item className={classes.root}> <EditionElement edition={edition}/> </Grid>)}
        </Grid>
        </>
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
