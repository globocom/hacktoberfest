import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snackbar: {
      backgroundColor: "#fff",
      color: theme.palette.text.primary,
      borderRadius: 8,
      "& a": {
        color: theme.palette.primary.main,
      },
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      borderRadius: 8,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
)
