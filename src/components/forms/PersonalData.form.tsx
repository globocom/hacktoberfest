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
  cpf: Yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    .required("Preenchimento do CPF obrigatório"),
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

const formatCPF = (value: string): string => {
  // Remove tudo que não é dígito
  const numbers = value.replace(/\D/g, '')

  // Aplica a máscara: 000.000.000-00
  if (numbers.length <= 3) {
    return numbers
  } else if (numbers.length <= 6) {
    return numbers.replace(/(\d{3})(\d{1,3})/, '$1.$2')
  } else if (numbers.length <= 9) {
    return numbers.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3')
  } else {
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4')
  }
}


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
    linkedin: user.linkedin,
    cpf: user.cpf,
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

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(event.target.value)
    formik.setFieldValue('cpf', formatted)
  }

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
            <HeaderTitle title={"Minha Área"} description='Dados pessoais'/>
            <Grid item xs={12} md={4}>
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
                  disabled: true
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <HacktoberfestTextInput
                color="primary"
                value={formik.values.githubID}
                fullWidth
                variant="outlined"
                label="ID Github"
                InputProps={{
                  disabled: true
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <HacktoberfestTextInput
                color="primary"
                value={formik.values.linkedin}
                fullWidth
                variant="outlined"
                label="LinkedIn"
                InputProps={{
                  // Removido a linha 'disabled: true' pois desabilita o input do campo LinkedIn
                }}
              />
            </Grid>
          </>
          }
          <Grid item xs={12} md={7}>
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
          <Grid item xs={12} md={5}>
            <HacktoberfestTextInput
              onChange={handleCPFChange}
              name="cpf"
              value={formik.values.cpf}
              fullWidth
              variant="outlined"
              error={formik.touched.cpf && Boolean(formik.errors.cpf)}
              helperText={formik.touched.cpf && formik.errors.cpf}
              label="CPF"
              inputProps={{ maxLength: 14 }}
            />
          </Grid>
          <Grid container alignItems="flex-start" justifyContent="flex-start" item xs={12} lg={12}>
            <LoadingButton fullWidth isLoading={isLoading}>
              SALVAR
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
