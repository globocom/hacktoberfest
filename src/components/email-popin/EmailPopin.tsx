import React from "react"
import { Typography, Modal, Fade, Box, Backdrop } from "@material-ui/core"
import {PersonalDataForm} from '@components/forms'
import Spacing from "@components/spacing"
import { useStyles } from "./EmailPopin.style";

const EmailPopin = (props: any) => {
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
