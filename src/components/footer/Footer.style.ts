import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      padding: "30px 0px",
      borderTop: `1px solid ${theme.palette.text.primary}`,
      textAlign: "center",
      "& a": {
        color: theme.palette.text.primary,
      },
    },
    menuItem: {
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
  })
)
