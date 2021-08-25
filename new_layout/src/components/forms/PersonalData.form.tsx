import React, {useState} from 'react'
import { Grid, Typography, TextField, InputAdornment, Button } from '@material-ui/core'
import { ParticipationHistory } from '@components/participations'


//Internal
import User, { UserProps } from '@services/user'
import Spacing from '@components/spacing'
import LoadingButton from '@components/loading-button'

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
    githubUser: Yup.string().required("Preenchimento do github user"),
})


const PersonalDataForm = (props:PersonalDataFormProps) => {
    const { user , showSnackBar } =  props
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const initialValues = {
            email: user.email,
            githubUser: user.githubUser,
            githubID: user.githubID,
    }

    const onSubmit = async (values: any) => {
        try{
            setIsLoading(true)
            await User.Service.getInstance().UpdateUser(values)
            setTimeout(() => {
                setIsLoading(false)
                showSnackBar("success", "Dados pessoais atualizado com sucesso !")
            },3000)
        }catch(e){
            showSnackBar("error",e.message)
        }
    }
    
    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    return (
        <React.Fragment>
            <Spacing desktop={{margin: "40px 0px"}} smart={{margin: "40px 0px"}}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h2" color="secondary" variant="h2">Dados pessoais</Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
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
                                    startAdornment: <InputAdornment position="start">@</InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
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
                        <Grid item xs={12}>
                            <TextField
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
                                        <EmailIcon/>
                                    </InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LoadingButton isLoading={isLoading}>
                                Salvar Alterações
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </form>
        </Spacing>
            <ParticipationHistory user={user}/>
        </React.Fragment>
    )
}




interface PersonalDataFormProps {
    user: UserProps,
    showSnackBar: Function
}


export default PersonalDataForm
