import React, { useEffect, useState }  from "react"
import {
  Snackbar,
  SnackbarContent,
  Button,
  makeStyles,
  Theme
} from "@material-ui/core"
import { setCookie, getCookie, getCookieExpiration } from "@helpers/cookiesHelper"

const COOKIE_NAME = "ACCEPT_GLOBO_HACKTOBERFEST_LGPD"
const COOKIE_EXPIRATION = 330

const useStyles = makeStyles((theme: Theme) => ({
  snackbar: {
    backgroundColor: theme.palette.background.paper,
    color: '#000',
    borderRadius: "8px",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
    maxWidth: "1094px",
    flexWrap: "nowrap",
    "& > div": {
      flex: "1 1 auto",
    },
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: "8px",
  },
  message: {
    flex: 1,
    paddingRight: "16px",
  },
  button:   {
    width: "180px",
    height: "44px",
    fontFamily: "Globotipo Variable",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "100%",
    letterSpacing: "0%",
    borderRadius: "40px",
    border: "none",
    background: "transparent",
    color: theme.palette.text.primary,
    textAlign: "center",
    textTransform: "none",
    opacity: 1,
    transform: "rotate(0deg)",
    position: "relative",
    transition: "all 0.3s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "40px",
      padding: "1px",
      background: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "xor",
      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      zIndex: -1,
    },
    "&:hover": {
      background: "linear-gradient(90deg, #FFBD09 0%, #FF111E 100%)",
      color: "#FFFFFF",
      "&::before": {
        display: "none",
      },
    },
  }
}))

const snackbarMessage: string =
  "Nós usamos as informações do seu cadastro para fins de comunicação sobre as edições passadas, corrente e futuras do evento e também sobre a premiação e outros assuntos correlacionados. Ao se inscrever, você concorda com estes termos."

const UserInfoAlert = () => {
  const [hideSnackbar, setHideSnackbar] = useState(true)
  const classes = useStyles()

  useEffect(() => {
    const cookie = getCookie(COOKIE_NAME);
    const expirationDate = getCookieExpiration();
    if (!cookie || (expirationDate && expirationDate < new Date())) {
      setHideSnackbar(false);
    }
  }, []);

  const handleClick = () => {
    setCookie(COOKIE_NAME, "true", COOKIE_EXPIRATION)
    setHideSnackbar(true)
  }

  return (
    !hideSnackbar ? (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open
      >
        <SnackbarContent
          className={classes.snackbar}
          message={
            <div className={classes.messageContainer}>
              <span className={classes.message}>{snackbarMessage}</span>
              <Button className={classes.button} onClick={handleClick}>
                Prosseguir
              </Button>
            </div>
          }
        />
      </Snackbar>
    ) : <React.Fragment/>
  )

}

export default UserInfoAlert