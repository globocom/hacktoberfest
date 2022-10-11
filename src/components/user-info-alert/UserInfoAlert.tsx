import React, { useEffect, useState }  from "react"
import { 
  Snackbar, 
  SnackbarContent, 
  Button, 
} from "@material-ui/core"
import { setCookie, getCookie } from "@helpers/cookiesHelper"
import { useStyles } from "./UserInfoAlert.style";


const COOKIE_NAME = "ACCEPT_GLOBO_HACKTOBERFEST_LGPD"

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