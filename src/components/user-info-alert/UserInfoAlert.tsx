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
    backgroundColor: "#DDF2FF",
    color: '#000',
    borderRadius: "8px",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#07B1EF4D",
    fontFamily: "inherit",
    borderRadius: "2px",
    border: "3px solid #02BBFF",
    color: "#2E3192",
  }
}))

const snackbarMessage: string =
  "Nós usamos as informações do seu cadastro para fins de \
  comunicação sobre as edições passadas, corrente e futuras \
  do evento e também sobre a premiação e outros assuntos \
  correlacionados. Ao se inscrever, você concorda com estes termos."

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
          message={snackbarMessage}
          action={
            <Button className={classes.button} onClick={handleClick}>
              Prosseguir
            </Button>
          }
        />
      </Snackbar>
    ) : <React.Fragment/>
  )

}

export default UserInfoAlert