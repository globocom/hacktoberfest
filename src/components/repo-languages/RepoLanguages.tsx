import React from "react"
import { colorLanguage } from "./color-language"
import { makeStyles, Typography } from "@material-ui/core"
import { Image } from "@components/image"


const useStyles = makeStyles({
  repoLanguageColor: {
    padding: '0px 15px',
    borderRadius: 12,
    marginBottom: 40,
  },

  wrapper: {
    width: 50,
    height: 50,
    marginLeft: '16px'
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

const LANGUAGES:object = {
  "go": "2023/go.svg",
  "php": "2023/php.svg",
  "javascript": "2023/javascript.svg",
  "python": "2023/python.svg",
  "prometheus": "2023/prometheus.svg",
  "default": "2023/language-default.svg"
}

const RepoLanguages = (props: RepoLanguagesProps) => {
  const classes = useStyles()

  const imageUrl = props.languages[0]?.name || "default"

  return (
    <Image src={LANGUAGES[imageUrl.toLowerCase()]} className={classes.wrapper}/>
  )
}

export default RepoLanguages
