import React from "react"
import { makeStyles, Typography, Modal, Fade, Theme, Box, Backdrop } from "@material-ui/core"
import {PersonalDataForm} from '@components/forms'
import Spacing from "@components/spacing"

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: 'absolute' as 'absolute',
    backgroundColor: theme.palette.background.paper,
    top: '50%',
    left: '50%',
    fontFamily: theme.typography.fontFamily,
    transform: 'translate(-50%, -50%)',
    width: "80%",
    boxShadow: '4px 4px 4px black',
    [theme.breakpoints.up("md")]: {
      width: "25%",
    }
  }
}))


const EmailPopin = (props:any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
        <Fade in={open}>
            <Box className={classes.modal}>
                <Spacing smart={{padding: "20px"}}>
                    <div>
                        <Typography id="transition-modal-title" variant="h2" component="h3" color="secondary">
                            Email para contato
                        </Typography>
                        <Typography variant="body2" component="span">
                            Precisamos do seu e-mail para enviarmos atualizações sobre o evento e entrarmos em contato caso seja necessário confirmar algum dado para premiação.
                        </Typography>
                        <PersonalDataForm showOnlyEmailField onSuccess={handleClose} user={props.user}/>
                    </div>
                </Spacing>
            </Box>
        </Fade>
    </Modal>
  </div>
  )
}

export default EmailPopin
