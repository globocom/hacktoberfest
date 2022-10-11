import React from "react"
import { colorLanguage } from "./color-language"
import { Typography } from "@material-ui/core"
import { useStyles } from "./RepoLanguages.style";

interface RepoLanguagesProps {
  languages: string[]
}

interface CircleLanguageProps {
  language: string
}

const CircleLanguage = (props: CircleLanguageProps) => {
  const classes = useStyles()
  return (
    <span
      className={classes.repoLanguageColor}
      style={{ backgroundColor: colorLanguage[`${props.language}`] }}
    ></span>
  )
}

const RepoLanguages = (props: RepoLanguagesProps) => {
  const classes = useStyles()
  return (
    <ul className={classes.languageList}>
      {props.languages.map((language, i) => (
        <li key={i} className={classes.languageListItem}>
          <span className={classes.repoLanguageWrapper}>
            <CircleLanguage language={language} />
            <Typography component="span" color="textPrimary" variant="body1">
              {language}
            </Typography>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default RepoLanguages
