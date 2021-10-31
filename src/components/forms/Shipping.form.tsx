import React, { useState } from 'react'

import { Grid, Typography, TextField, InputAdornment, MenuItem} from '@material-ui/core'

//Internal
import Spacing from '@components/spacing'
import User, { UserProps } from '@services/user'
import LoadingButton from '@components/loading-button'
import Hacktoberfest from '@services/hacktoberfest'

//Icons
import PersonPinCircle from '@material-ui/icons/PersonPinCircle'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FormatSizeIcon from '@material-ui/icons/FormatSize'
import ColorizeIcon from '@material-ui/icons/Colorize'
//End-Icons


//Formik
import * as Yup from "yup"
import {  useFormik } from 'formik'
import { useEffect } from 'react'

const validationSchema = () => Yup.object().shape({
    name: Yup
            .string()
            .min(0)
            .max(30, "Nome longo demais")
            .required("Preenchimento do nome é obrigatório"),
    city: Yup.string().required("Preenchimento da cidade é obrigatório"),
    postalCode: Yup.string().required("Preenchimento do CEP é obrigatório"),
    state: Yup.string().required("Preenchimento do Estado é obrigatório"),
    address: Yup.string().required("Preenchimento da Rua é obrigatório")
})


const ShippingForm = (props: ShippingFormProps) => {
    const { user, showSnackBar } = props
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentEdition, setCurrentEdition] = useState<number>(0)

    const [colors, setColors] = useState<Array<string>>([])

    useEffect(() => {
        const fillColors = async () =>  {
            const edition = await Hacktoberfest.Service.getInstance().GetEdition()
            setColors(edition?.shirtColors || [])
            setCurrentEdition(edition.edition)
        }
        fillColors()
    }, [])

    const userEdition = user.editions || {}

    const initialValues = {
            name: user.name,
            city: user.city,
            postalCode: user.postalCode,
            state: user.state,
            address: user.address,
            shirtSize: userEdition[currentEdition]?.shirtSize || "",
            shirtColor: userEdition[currentEdition]?.shirtColor || ''
    }


    const onSubmit = async (values: any) => {
        try{
            setIsLoading(true)
            await User.Service.getInstance().UpdateUser(values)
            setTimeout(() => {
                setIsLoading(false)
                showSnackBar("success", "Dados para premiação atualizado com sucesso !")
            },3000)
        }catch(e){
          setIsLoading(false)
          showSnackBar("error", "Erro ao cadastrar dados de premiação")
        }
    }

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize:true});
    return (
        <Spacing desktop={{margin: "40px 0px"}} smart={{margin: "40px 0px"}}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography style={{fontWeight: 600}} component="h2" color="secondary" variant="h3">Dados para premiação</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField
                            fullWidth
                            name="name"
                            variant="outlined"
                            label="Destinatário"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <PersonPinCircle/>
                            </InputAdornment>
                        }}/>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            name="postalCode"
                            onChange={formik.handleChange}
                            value={formik.values.postalCode}
                            error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                            helperText={formik.touched.postalCode && formik.errors.postalCode}
                            variant="outlined"
                            label="CEP"/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <TextField
                            fullWidth
                            name="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                            variant="outlined"
                            label="Cidade" InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <LocationCityIcon/>
                            </InputAdornment>
                        }}/>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            name="state"
                            onChange={formik.handleChange}
                            value={formik.values.state}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                            variant="outlined"
                            label="Estado"/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            variant="outlined"
                            label="Endereço Completo" InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <LocationOnIcon/>
                            </InputAdornment>
                        }}/>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="shirtSize"
                            value={formik.values.shirtSize}
                            onChange={formik.handleChange("shirtSize")}
                            error={formik.touched.shirtSize && Boolean(formik.errors.shirtSize)}
                            helperText={formik.touched.shirtSize && formik.errors.shirtSize}
                            select
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                        <FormatSizeIcon/>
                                    </InputAdornment>
                            }}
                            label="Tamanho da Camiseta">
                                <MenuItem value={"BLP"}>Baby Look - P</MenuItem>
                                <MenuItem value={"BLM"}>Baby Look - M</MenuItem>
                                <MenuItem value={"BLG"}>Baby Look - G</MenuItem>
                                <MenuItem value={"BLGG"}>Baby Look - GG</MenuItem>
                                <MenuItem value={"TSP"}>Camiseta - P</MenuItem>
                                <MenuItem value={"TSM"}>Camiseta - M</MenuItem>
                                <MenuItem value={"TSG"}>Camiseta - G</MenuItem>
                                <MenuItem value={"TSGG"}>Camiseta - GG</MenuItem>
                                <MenuItem value={"TSGGG"}>Camiseta - GGG</MenuItem>
                        </TextField>
                    </Grid>

                    {colors.length > 0 &&
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name="shirtColor"
                                label="Cor da Camiseta"
                                value={formik.values.shirtColor}
                                onChange={formik.handleChange("shirtColor")}
                                error={formik.touched.shirtColor && Boolean(formik.errors.shirtColor)}
                                helperText={formik.touched.shirtColor && formik.errors.shirtColor}
                                select
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                            <ColorizeIcon/>
                                        </InputAdornment>
                                }}>
                                <MenuItem disabled value={''}/>
                                {
                                    colors.map((color, index) => (<MenuItem key={index} value={color}>{color}</MenuItem>))
                                }
                            </TextField>
                        </Grid>
                    }

                    <Grid item xs={12}>
                        <LoadingButton isLoading={isLoading}>
                            Salvar Alterações
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
        </Spacing>
    )
}


interface ShippingFormProps {
    user: UserProps,
    showSnackBar: Function
}
export default ShippingForm
