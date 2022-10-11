import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: "absolute" as "absolute",
      backgroundColor: theme.palette.background.paper,
      top: "50%",
      left: "50%",
      fontFamily: theme.typography.fontFamily,
      transform: "translate(-50%, -50%)",
      width: "80%",
      boxShadow: "4px 4px 4px black",
      [theme.breakpoints.up("md")]: {
        width: "25%",
      },
    },
  })
)
