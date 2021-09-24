import React  from "react"
import { Snackbar, SnackbarContent, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
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
  }
}))

const snackbarMessage = 
  "Nós usamos as informações do seu cadastro para fins de \
  comunicação sobre as edições passadas, corrente e futuras \
  do evento e também sobre a premiação e outros assuntos \
  correlacionados. Ao se inscrever, você concorda com estes termos."

const UserInfoAlert = () => {
  const classes = useStyles()

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
    >
      <SnackbarContent
        className={classes.snackbar}
        message={snackbarMessage}
        action={
          <Button className={classes.button}>
            Prosseguir
          </Button>
        }
      />
    </Snackbar>
  )

}

export default UserInfoAlert