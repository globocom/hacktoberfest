import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "15px",
      backgroundColor: "rgba(33, 22, 128, 0.04)",
    },
    pictureContainer: {
      textAlign: "center",
    },
    trophy: {
      width: 100,
    },
  })
)
