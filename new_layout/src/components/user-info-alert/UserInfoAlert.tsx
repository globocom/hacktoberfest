import React, { useEffect, useState }  from "react"
import { 
  Snackbar, 
  SnackbarContent, 
  Button, 
  makeStyles, 
  Theme 
} from "@material-ui/core"
import { setCookie, getCookie } from "@helpers/cookiesHelper"

const COOKIE_NAME = "ACCEPT_GLOBO_HACKTOBERFEST_LGPD"

const useStyles = makeStyles((theme: Theme) => ({
  snackbar: {
    backgroundColor: "#fff", 
    color: theme.palette.text.primary,
    borderRadius: 8,
    "& a": {
      color: theme.palette.primary.main
    }
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    }
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
    if (!getCookie(COOKIE_NAME)) setHideSnackbar(false)
  }, []);

  const handleClick = () => {
    setCookie(COOKIE_NAME, "true")
    setHideSnackbar(true)
  }

  return (
    !hideSnackbar && (
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
    )
  )

}

export default UserInfoAlert