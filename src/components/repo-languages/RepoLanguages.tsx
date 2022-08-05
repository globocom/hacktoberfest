import React from "react"
import { colorLanguage } from "./color-language"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  repoLanguageColor: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    marginRight: ".3rem",
  },

  repoLanguageWrapper: {
    display: "flex",
    alignItems: "center",
  },
  languageList: {
    display: "inline-flex",
    flexWrap: "wrap",
  },
  languageListItem: {
    paddingRight: 16,
    listStyleType: "none",
  },
})

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
