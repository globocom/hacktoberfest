import { createTheme } from "@material-ui/core/styles"

const theme = createTheme()

theme.palette = {
  ...theme.palette,
  primary: {
    main: "#8600F6",
    contrastText: "#fff",
    light: "#C6B6D9",
    dark: "#220A42",
  },
  secondary: {
    main: "#FF0C1F",
    contrastText: "#fff",
    light: "#000",
    dark: "#17042B",
  },
  // remover esse table
  table: {
    background: "#491B77"
  },
  background: {
    default: "#000000",
    paper: "#FFFFFF",
  },
  action: {
    ...theme.palette.action,
    disabledBackground: "#7d7d7d",
    disabled: "#b8b8b8",
  },
  text: {
    primary: "#000",
    secondary: "#fff",
    disabled: "#FFFFFFA3",
    hint: "#FFF",
  },
  // Cores customizadas para as linhas decorativas
  custom: {
    yellow: "#FFD006",
    darkGray: "#0D1114",
    yellowChallenge: "#FFCB07",
  },
  type: "light",
}

theme.breakpoints = {
  ...theme.breakpoints,
  values: {
    ...theme.breakpoints.values,
    xs: 320,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1980,
  },
}

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: "3.75rem",
    lineHeight: "64px",
    fontWeight: "bolder",
  },
  h2: {
    fontSize: "1.5rem", //24px
    lineHeight: "36px",
  },
  h3: {
    fontSize: "1.5rem", //24px
    lineHeight: "32px",
    fontWeight: "normal",
  },
  h5: {
    fontSize: "0.825rem", //12px
    lineHeight: "16px",
    fontWeight: "normal",
  },
  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: "27px",
  },
  subtitle2: {
    fontSize: "1.25rem",
    lineHeight: "24px",
  },
  body1: {
    fontSize: "1.125rem", //18px
    lineHeight: "27px",
  },
  body2: {
    fontSize: "1rem", //16px
    lineHeight: "24px",
  },
  caption: {
    fontSize: "0.875rem",
    lineHeight: "14px",
  },
  fontFamily: "Globotipo Variable",
}

export default theme
