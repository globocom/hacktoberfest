import React from "react"
import { colorLanguage } from "./color-language"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  repoLanguageColor: {
    padding: '0px 15px',
    borderRadius: 12,
    marginBottom: 40,
  },

  repoLanguageWrapper: {
    display: "flex",
    alignItems: "center",
  },
  languageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  languageListItem: {
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
    <div
      className={classes.repoLanguageColor}
      style={{ backgroundColor: colorLanguage[`${props.language.name}`] }}
    >
      {props.language.name}
    </div>
  )
}

const RepoLanguages = (props: RepoLanguagesProps) => {
  const classes = useStyles()
  return (
    <ul className={classes.languageList}>
      {props.languages.map((language, i) => (
        <li key={i} className={classes.languageListItem}>
            <CircleLanguage language={language} />
        </li>
      ))}
    </ul>
  )
}

export default RepoLanguages
