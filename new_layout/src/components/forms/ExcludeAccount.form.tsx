import React from 'react'
import { Grid, Typography, Button, FormControl } from '@material-ui/core'
import Spacing from '@components/spacing'

const ExcludeAccountForm = () => {
    return (
            <Spacing desktop={{margin: "40px 0px"}} smart={{margin: "40px 0px"}}>
                <Grid container >
                    <Grid item xs={12}>
                        <Typography component="h2" color="secondary" variant="h2">Outros</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography component="p" color="primary" variant="body1">Caso você deseje excluir sua conta, clique no botão abaixo.<br/>Está ação é irreversível.</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Button size="large" color="secondary" variant="contained">
                            Excluir minha conta
                        </Button>
                    </Grid>
                </Grid>
            </Spacing>
    )
}


export default ExcludeAccountForm