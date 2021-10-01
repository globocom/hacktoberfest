import React from 'react'
import { colorLanguage } from './color-language'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    repoLanguageColor: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        marginRight: ".3rem"
    },

    repoLanguageWrapper: {
        display: "flex",
        alignItems: "center",
    },
})


interface RepoLanguageProps {
    language: string
}

interface CircleLanguageProps {
    language: string
}

const CircleLanguage = (props: CircleLanguageProps) => {
    const classes = useStyles()
    return <span className={classes.repoLanguageColor} style={{backgroundColor: colorLanguage[`${props.language}`]}}></span>
}

const RepoLanguage = (props: RepoLanguageProps) => {
    const classes = useStyles()
    return (
        <span className={classes.repoLanguageWrapper}>
            <CircleLanguage language={props.language}/>
            <Typography component="span" color="textPrimary" variant="body1">
                {props.language}
            </Typography>
        </span>
    )
}

export default RepoLanguage