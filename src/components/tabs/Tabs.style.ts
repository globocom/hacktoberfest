import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      minWidth: 68,
      fontSize: "1rem",
    },
    list: {
      backgroundColor: "#fff",
      borderRadius: 8,
      border: "1px solid #C8DAF6",
      padding: 8,
      "&.empty": {
        textAlign: "center",
        minHeight: 360,
        alignItems: "center",
        justifyContent: "center",
      },
    },
    listItem: {
      paddingBottom: 2,
    },
    loading: {
      textAlign: "center",
      marginTop: 10,
    },
  })
)
