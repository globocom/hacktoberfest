import React, { useState } from "react"

import {
  Grid,
  Typography,
  InputAdornment,
  MenuItem,
  makeStyles,
  Theme,
  Box,
} from "@material-ui/core"
import InfoSharpIcon from "@material-ui/icons/InfoSharp"

//Internal
import User, { UserProps } from "@services/user"
import { HacktoberfestTextInput } from "@components/text-input"
import LoadingButton from "@components/loading-button"
import Hacktoberfest from "@services/hacktoberfest"
import { HeaderTitle } from "@components/header"

//Icons
import PersonPinCircle from "@material-ui/icons/PersonPinCircle"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import FormatSizeIcon from "@material-ui/icons/FormatSize"
import ColorizeIcon from "@material-ui/icons/Colorize"
//End-Icons

//Formik
import * as Yup from "yup"
import { useFormik } from "formik"
import { useEffect } from "react"

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(0)
      .max(30, "Nome longo demais")
      .required("Preenchimento do nome é obrigatório"),
    city: Yup.string().required("Preenchimento da cidade é obrigatório"),
    postalCode: Yup.string().required("Preenchimento do CEP é obrigatório"),
    state: Yup.string().required("Preenchimento do Estado é obrigatório"),
    address: Yup.string().required("Preenchimento da Rua é obrigatório"),
  })

const useStyles = makeStyles((theme: Theme) => ({
  fontCall: {
    fontSize: "2.25rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    },
  },
  subFontCall: {
    fontSize: "1.125rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
  },
}))

const ShippingForm = (props: ShippingFormProps) => {
  const classes = useStyles()
  const { user, showSnackBar, currentEdition, setCurrentEdition } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [colors, setColors] = useState<Array<string>>([])

  useEffect(() => {
    const fillColors = async () => {
      const edition = await Hacktoberfest.Service.getInstance().GetEdition()
      setColors(edition?.shirtColors || [])
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
    shirtColor: userEdition[currentEdition]?.shirtColor || "",
  }

  const onSubmit = async (values: any) => {
    try {
      setIsLoading(true)
      await User.Service.getInstance().UpdateUser(values)
      setTimeout(() => {
        setIsLoading(false)
        showSnackBar("success", "Dados para premiação atualizado com sucesso !")
      }, 3000)
    } catch (e) {
      setIsLoading(false)
      showSnackBar("error", "Erro ao cadastrar dados de premiação")
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={10} md={12}>
          <HeaderTitle title={"Dados para premiação"} />
        </Grid>
        <Grid item xs={10} md={12}>
          <Typography component="h3" variant="h3">
            Preencha com o endereço onde será entregue a camiseta.
          </Typography>
          <Box marginBottom={2} display="flex" alignItems="center">
            <InfoSharpIcon
              style={{ color: "#FFD700", marginRight: "2px", fontSize: "24px" }}
            />
            <Typography variant="body2" style={{ fontStyle: "italic" }}>
              Envio de camisetas somente para o Brasil!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={8}>
          <HacktoberfestTextInput
            fullWidth
            name="name"
            variant="outlined"
            label="Destinatário"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonPinCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={10} md={4}>
          <HacktoberfestTextInput
            fullWidth
            name="postalCode"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
            color="secondary"
            variant="outlined"
            label="CEP"
          />
        </Grid>

        <Grid item xs={10} md={8}>
          <HacktoberfestTextInput
            fullWidth
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            color="secondary"
            variant="outlined"
            label="Cidade"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCityIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={10} md={4}>
          <HacktoberfestTextInput
            fullWidth
            name="state"
            onChange={formik.handleChange}
            value={formik.values.state}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            color="secondary"
            variant="outlined"
            label="Estado"
          />
        </Grid>

        <Grid item xs={10} md={12}>
          <HacktoberfestTextInput
            fullWidth
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            color="secondary"
            variant="outlined"
            label="Endereço Completo"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={10} md={12}>
          <HacktoberfestTextInput
            fullWidth
            variant="outlined"
            name="shirtSize"
            value={formik.values.shirtSize}
            onChange={formik.handleChange("shirtSize")}
            error={formik.touched.shirtSize && Boolean(formik.errors.shirtSize)}
            helperText={formik.touched.shirtSize && formik.errors.shirtSize}
            color="secondary"
            select
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FormatSizeIcon />
                </InputAdornment>
              ),
            }}
            label="Tamanho da Camiseta"
          >
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"BLP"}
            >
              Baby Look - P
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"BLM"}
            >
              Baby Look - M
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"BLG"}
            >
              Baby Look - G
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"BLGG"}
            >
              Baby Look - GG
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"TSP"}
            >
              Camiseta - P
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"TSM"}
            >
              Camiseta - M
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"TSG"}
            >
              Camiseta - G
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"TSGG"}
            >
              Camiseta - GG
            </MenuItem>
            <MenuItem
              style={{ color: "#000", fontFamily: "Globotipo Variable" }}
              value={"TSGGG"}
            >
              Camiseta - GGG
            </MenuItem>
          </HacktoberfestTextInput>
        </Grid>

        {colors.length > 0 && (
          <Grid item xs={10} md={12}>
            <HacktoberfestTextInput
              fullWidth
              variant="outlined"
              name="shirtColor"
              label="Cor da Camiseta"
              value={formik.values.shirtColor}
              onChange={formik.handleChange("shirtColor")}
              error={
                formik.touched.shirtColor && Boolean(formik.errors.shirtColor)
              }
              helperText={formik.touched.shirtColor && formik.errors.shirtColor}
              color="secondary"
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ColorizeIcon />
                  </InputAdornment>
                ),
              }}
            >
              {colors.map((color, index) => (
                <MenuItem
                  key={index}
                  style={{ color: "#000", fontFamily: "Globotipo Variable" }}
                  value={color}
                >
                  {color}
                </MenuItem>
              ))}
            </HacktoberfestTextInput>
          </Grid>
        )}

        <Grid item xs={10} lg={3}>
          <LoadingButton isLoading={isLoading}>Salvar Alterações</LoadingButton>
        </Grid>
      </Grid>
    </form>
  )
}

interface ShippingFormProps {
  user: UserProps
  showSnackBar: Function
  currentEdition: number
  setCurrentEdition: (edition: number) => void
}
export default ShippingForm
