import React, { useState, useContext } from 'react'
import { Grid, Typography, TextField, InputAdornment, makeStyles, Theme } from '@material-ui/core'


//Internal
import User, { UserProps } from '@services/user'
import Spacing from '@components/spacing'
import LoadingButton from '@components/loading-button'
import { SnackbarContext } from '@components/snackbar/HacktoberfestSnackbar'
import { HacktoberfestTextInput } from '@components/text-input'
import { HeaderTitle } from "@components/header"

//Icons
import EmailIcon from '@material-ui/icons/Email'

//Formik
import * as Yup from "yup"
import { useFormik } from 'formik'


const validationSchema = () => Yup.object().shape({
  email: Yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento do email obrigatório"),
  githubUser: Yup.string().required("Preenchimento do usuário Github obrigatório"),
})

const useStyles = makeStyles((theme: Theme) => ({
  fontCall: {
    fontSize: "2.25rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    }
  },
  subFontCall: {
    fontSize: "1.125rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    }
  }
}))


const PersonalDataForm = (props: PersonalDataFormProps) => {
  const classes = useStyles();
  const { user, onSuccess, showOnlyEmailField = false } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const snackbarContext = useContext(SnackbarContext)

  const initialValues = {
    name: user.name,
    email: user.email,
    githubUser: user.githubUser,
    githubID: user.githubID,
  }

  const onSubmit = async (values: any) => {
    try {
      setIsLoading(true)
      await User.Service.getInstance().UpdateUserEmail(values)
      setTimeout(() => {
        setIsLoading(false)
        snackbarContext.showSnackBar("success", "Dados pessoais atualizado com sucesso !")
        onSuccess && onSuccess()
      }, 3000)
    } catch (e) {
      setIsLoading(false)
      snackbarContext.showSnackBar("error", "Erro ao cadastrar dados pessoais")
    }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          {!showOnlyEmailField && <>
            <Grid item xs={10} md={12}>
              <HeaderTitle title={"Dados pessoais"} />
            </Grid>
            <Grid item xs={10} md={12}>
              <Typography component="h3" variant="h3">Preencha o seu e-mail para podermos enviar atualizações sobre o evento.</Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <HacktoberfestTextInput
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.githubUser}
                name="githubUser"
                id="githubUser"
                color="primary"
                variant="outlined"
                label="Github"
                error={formik.touched.githubUser && Boolean(formik.errors.githubUser)}
                helperText={formik.touched.githubUser && formik.errors.githubUser}
                InputProps={{
                  startAdornment: <InputAdornment position="start">@</InputAdornment>,
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={10} md={4}>
              <HacktoberfestTextInput
                color="primary"
                value={formik.values.githubID}
                fullWidth
                variant="outlined"
                label="ID Github"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
          </>
          }
          <Grid item xs={10} md={12}>
            <HacktoberfestTextInput
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
              fullWidth
              variant="outlined"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }}
            />
          </Grid>
          <Grid container alignItems="flex-start" justifyContent="flex-start" item xs={10} lg={3}>
            <LoadingButton fullWidth isLoading={isLoading}>
              Salvar Alterações
                        </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}




interface PersonalDataFormProps {
  user: UserProps,
  showOnlyEmailField?: boolean,
  onSuccess?: Function
}


export default PersonalDataForm
