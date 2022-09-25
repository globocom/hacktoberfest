import React from "react"
import { colorLanguage } from "./color-language"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  repoLanguageColor: {
    padding: '0px 15px',
    borderRadius: 12,
    marginRight: ".3rem",
  },

  repoLanguageWrapper: {
    display: "flex",
    alignItems: "center",
  },
  languageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end"
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
      style={{ backgroundColor: colorLanguage[`${props.language}`] }}
    >
      {props.language}
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
