import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      fontFamily: theme.typography.fontFamily,
      "& a": {
        textDecoration: "none",
      },
    },
  })
)
