import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
)
