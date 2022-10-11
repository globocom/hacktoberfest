import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
)
