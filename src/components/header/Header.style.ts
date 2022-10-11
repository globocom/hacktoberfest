import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerRoot: {
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.primary.main,
      "& a": {
        color: theme.palette.text.primary,
        textDecoration: "none",
        [theme.breakpoints.up("md")]: {
          color: theme.palette.primary.contrastText,
        },
      },
    },
    container: {
      padding: 15,
    },
    logo: {
      display: "inline-block",
      border: "3px solid white",
      padding: 30,
    },
    headerTitleRoot: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.main,
        minHeight: 260
    },
    colored: {
        color: theme.palette.primary.contrastText,
    },
    divisor: {
        width: "20%",
        marginTop: 24,
        borderBottom: `1px solid rgba(255, 255, 255, 0.18);`,
    }
  })
)
