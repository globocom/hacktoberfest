import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inlineText: {
      fontSize: "3.5rem",
      lineHeight: "66px",
    },
    heroPanel: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: theme.palette.primary.main,
      height: "93.3vh",
      width: "100%",
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        height: "92vh",
      },
    },
    terms: {
      width: "100%",
      display: "block",
    },
    button: {
      backgroundColor: "#fff",
      fontFamily: "inherit",
      borderRadius: "64px",
      textTransform: "none",
      color: theme.palette.text.primary,
    },
    howWorks: {
      position: "absolute",
      width: "100%",
      fontWeight: 100,
      display: `inline-flex`,
      justifyContent: `center`,
      bottom: "45px",
    },
    heroImage: {
      width: "40vw",
      display: "block",
      margin: "0px auto",
    },
    sticker: {
      position: "absolute",
      zIndex: 1,
    },
    progressionContainer: {
      width: "25vw",
      display: "block",
      margin: "0px auto 24px auto",
    },
    progression: {
      border: "5px solid #fff",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: 50,
      padding: 22,
    },
    active: {
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
      borderRadius: 7,
    },
    howWorksHeroSmart: {
      position: "absolute",
      width: "100%",
      fontWeight: 100,
      display: `inline-flex`,
      justifyContent: `center`,
      bottom: "30px",
    },
    progressionContainerHeroSmart: {
      width: "80vw",
      display: "block",
      margin: "0px auto 24px auto",
    },
    progressionHeroSmart: {
      border: "5px solid #fff",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: 50,
      padding: "10px 30px",
    },
    textProgress: {
      width: "60vw",
      display: "block",
      margin: "0px auto",
    },
  })
)
