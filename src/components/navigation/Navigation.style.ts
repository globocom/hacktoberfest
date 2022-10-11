import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 15,
      backgroundColor: theme.palette.primary.main,
    },
    navigation: {
      listStyle: "none",
      [theme.breakpoints.up("md")]: {
        display: "inline-flex",
        listStyle: "none",
      },
    },
    smartMenu: {
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.5)",
      overflow: "hidden",
      zIndex: 999,
    },
    smartMenuContainer: {
      width: "60%",
      marginLeft: "40%",
      height: "100%",
      backgroundColor: theme.palette.background.default,
      zIndex: 1,
    },
    smartHomeCall: {
      position: "absolute",
      bottom: "5%",
      left: "45%",
    },
    item: {
      paddingBottom: 15,
      [theme.breakpoints.up("md")]: {
        color: "red",
        padding: 15,
        cursor: "pointer",
      },
    },
  })
)
