import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
    },
    projectName: {
      fontSize: 56,
      marginRight: 30,
      lineHeight: 1,
    },
    rounded: {
      borderRadius: 50,
      fontWeight: "normal",
      boxShadow: "none",
      textTransform: "lowercase",
      [theme.breakpoints.up("md")]: {
        display: "block",
        float: "right",
      },
    },
    divider: {
      width: "100%",
      borderTop: `1px solid #090055;`,
      padding: "32px 0px",
    },
    bottomDivider: {
      width: "100%",
      borderTop: `1px solid #E0E0E0;`,
      padding: "24px 0px",
    },
  })
)
